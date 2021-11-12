import React from "react";
import ReactDOM  from "react-dom";
import NavItems from "../NavItems/NavItems";

import "./NavDrawer.css";

const listStyleOveride = {
  display: "block",
  marginLeft: "0",
};

const listItemStyleOveride = {
  marginTop: "3rem",
  fontSize: "1.4rem",
};

const NavDrawer = (props) => {
  const content = (
    <div className="nav-drawer">
      <div className="nav-drawer-content-wrapper">
        <div className="nav-drawer-content">
          <NavItems
            listStyle={listStyleOveride}
            listItemStyle={listItemStyleOveride}
          />
        </div>
      </div>
    </div>
  );

 return ReactDOM.createPortal(content,document.getElementById('drawer'));
};

export default NavDrawer;
