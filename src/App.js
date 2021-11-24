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

function App() {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userID/places">
          <UserPlaces />
        </Route>
        <Route path="/places" exact>
          <UserPlaces />
        </Route>
        <Route path='/addPlace' exact>
          <AddPlace/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
