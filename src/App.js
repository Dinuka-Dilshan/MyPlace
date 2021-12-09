import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Users from "./user/pages/Users";
import MainHeader from "./shared/Navigation/MainHeader/MainHeader";
import UserPlaces from "./places/pages/UserPlaces";
import AddPlace from "./places/pages/AddPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Authenticate from "./user/pages/Authenticate";
import { AuthContext } from "./shared/Context/Auth-context";
import { useCallback, useState } from "react/cjs/react.development";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const logIn = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const routeForLoggedIn = (
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userID/places" exact>
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
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: logIn,
        logout: logOut,
      }}
    >
      <Router>
        <MainHeader />
        {isLoggedIn && routeForLoggedIn}
        {!isLoggedIn && routesForLoggedOut}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
