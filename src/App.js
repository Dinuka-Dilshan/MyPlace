import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { AuthContext } from "./shared/Context/Auth-context";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import LoadingSpinner from "./shared/UIcomponents/LoadingSpinner";

const Users = React.lazy(() => import("./user/pages/Users"));
const MainHeader = React.lazy(() =>
  import("./shared/Navigation/MainHeader/MainHeader")
);
const UserPlaces = React.lazy(() => import("./places/pages/UserPlaces"));
const AddPlace = React.lazy(() => import("./places/pages/AddPlace"));
const UpdatePlace = React.lazy(() => import("./places/pages/UpdatePlace"));
const Authenticate = React.lazy(() => import("./user/pages/Authenticate"));

let timer;

function App() {
  //const auth = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);
  const [token, setToken] = useState(null);
  const [expireTime, setExpireTime] = useState(null);

  const login = useCallback((userID, token, expiresOn) => {
    setIsLoggedIn(true);
    setToken(token);
    setExpireTime(expiresOn || new Date().getTime() + 60 * 60 * 1000);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userID: userID,
        token,
        expiresOn: expiresOn || new Date().getTime() + 60 * 60 * 1000,
      })
    );
    setUserID(userID);
  }, []);

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("userData");
    setUserID(null);
    setExpireTime(null);
  }, []);

  useEffect(() => {
    if (token && expireTime) {
      const remainingTime = expireTime - new Date().getTime();
      console.log(remainingTime);
      timer = setTimeout(logOut, remainingTime);
    } else {
      clearTimeout(timer);
    }
  }, [logOut, token, expireTime]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData &&
      userData.token &&
      userData.userID &&
      userData.expiresOn > new Date().getTime()
    ) {
      login(userData.userID, userData.token, userData.expiresOn);
    } else {
      logOut();
    }
  }, [login, logOut]);

  const routeForLoggedIn = (
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/places/user/:userID" exact>
        <UserPlaces />
      </Route>
      <Route path="/addPlace" exact>
        <AddPlace />
      </Route>
      <Route path="/places/:placeID">
        <UpdatePlace />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  const routesForLoggedOut = (
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/authenticate" exact>
        <Authenticate />
      </Route>
      <Route path="/:userID/places" exact>
        <UserPlaces />
      </Route>
      <Redirect to="/authenticate" />
    </Switch>
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, userID, token, login, logOut }}>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <MainHeader />
          {isLoggedIn && routeForLoggedIn}
          {!isLoggedIn && routesForLoggedOut}
        </Suspense>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
