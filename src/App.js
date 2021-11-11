import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PlaceList from './places/pages/PlaceList';
import Users from "./user/pages/Users";
import MainHeader from "./shared/Navigation/MainHeader";



function App() {
  return (
    <Router> 
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Users/>
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
