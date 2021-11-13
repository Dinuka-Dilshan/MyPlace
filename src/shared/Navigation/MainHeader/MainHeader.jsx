import Header from "../Header/Header";
import NavItems from "../NavItems/NavItems";
import Logo from "../Logo/Logo";

import "./MainHeader.css";
import React, { useState } from "react";
import NavDrawer from "../NavDrawer/NavDrawer";
import BurgerButton from "../BurgerButton/BurgerButton";
import BackDrop from "../../UIcomponents/BackDrop";

const MainHeader = () => {

  const [isNavDrawerOpen,setIsNavDrawerOpen] = useState(false);


  const openNavDrawer = ()=>{
    setIsNavDrawerOpen(true);
  }

  const closeNavDrawer = ()=>{
    setIsNavDrawerOpen(false);
  }

  return (
    <React.Fragment>
    
    {isNavDrawerOpen && <BackDrop closeNavDrawer={closeNavDrawer}/>}
    {isNavDrawerOpen && <NavDrawer closeNavDrawer={closeNavDrawer}/>}
      <Header>
        <div className="main-header-wrapper">
          <div className="main-header-logo-wrapper">
            <Logo/>
            <BurgerButton  openNavDrawer={openNavDrawer}/>
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
