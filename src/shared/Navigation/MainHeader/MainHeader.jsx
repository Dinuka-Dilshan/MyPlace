import Header from "../Header/Header";
import NavItems from "../NavItems/NavItems";
import Logo from "../Logo/Logo";

import "./MainHeader.css";
import React from "react";
import NavDrawer from "../NavDrawer/NavDrawer";

const MainHeader = (props) => {
  return (
    <React.Fragment>
      <NavDrawer/>
      <Header>
        <div className="main-header-wrapper">
          <div className="main-header-logo-wrapper">
            <Logo />
          </div>
          <div className="main-header-Nav-Item-wrapper">
            <NavItems />
          </div>
        </div>
      </Header>
    </React.Fragment>
  );
};

export default MainHeader;
