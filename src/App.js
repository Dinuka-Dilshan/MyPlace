import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UserList from "./user/pages/UserList";
import PlaceList from './places/pages/PlaceList';
import Users from './data';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UserList users={Users}/>
        </Route>

        <Route path="/places" exact>
          <PlaceList />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
