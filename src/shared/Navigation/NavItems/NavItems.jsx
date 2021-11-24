import React from "react";

import "./Navitems.css";
import { NavLink } from "react-router-dom";

const NavItems = (props) => {
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
      <li onClick={closeNav} style={props.listItemStyle}>
        <NavLink className="navLink" to={`/places/`}>
          My Places
        </NavLink>
      </li>
      <li onClick={closeNav} style={props.listItemStyle}>
        <NavLink className="navLink" to="/addPlace">
          Add Place
        </NavLink>
      </li>
      <li onClick={closeNav} style={props.listItemStyle}>
        <NavLink className="navLink" to="/users">
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavItems;
