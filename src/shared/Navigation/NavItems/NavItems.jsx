import "./Navitems.css";
import { NavLink } from "react-router-dom";

const NavItems = (props) => {
  return (
        <ul className='nav-item-list' style={props.listStyle}>
          <li style={props.listItemStyle}>
            <NavLink className="navLink" to="/" exact>
              All Users
            </NavLink>
          </li>
          <li style={props.listItemStyle}>
            <NavLink className="navLink" to={`/places/`}>
              My Places
            </NavLink>
          </li>
          <li style={props.listItemStyle}>
            <NavLink className="navLink" to="/places">
              Add Place
            </NavLink>
          </li>
          <li style={props.listItemStyle}>
            <NavLink className="navLink" to="/users">
              Authenticate
            </NavLink>
          </li>
        </ul>
  );
};

export default NavItems;
