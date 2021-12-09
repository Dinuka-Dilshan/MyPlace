import React from "react";

import "./Navitems.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Auth-context";
import { useContext } from "react";

const NavItems = (props) => {


  const auth = useContext(AuthContext);


  const closeNav = () => {
    props.closeNavDrawer && props.closeNavDrawer();
  };

  return (
    <ul className="nav-item-list" style={props.listStyle}>
      <li onClick={closeNav} style={props.listItemStyle}>
        <NavLink className="navLink" to="/" exact>
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && <li onClick={closeNav} style={props.listItemStyle}>
        <NavLink className="navLink" to={`/places/`}>
          My Places
        </NavLink>
      </li>}
      {auth.isLoggedIn && <li onClick={closeNav} style={props.listItemStyle}>
        <NavLink className="navLink" to="/addPlace">
          Add Place
        </NavLink>
      </li>}
      {!auth.isLoggedIn && <li onClick={closeNav} style={props.listItemStyle}>
        <NavLink className="navLink" to="/authenticate">
          Login
        </NavLink>
      </li>}
      {auth.isLoggedIn && <li onClick={closeNav} style={props.listItemStyle}>
        <NavLink className="navLink" to="/" onClick={auth.logout}>
          Logout
        </NavLink>
      </li>}
    </ul>
  );
};

export default NavItems;
