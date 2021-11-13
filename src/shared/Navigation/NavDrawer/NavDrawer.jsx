import React from "react";
import ReactDOM from "react-dom";
import NavItems from "../NavItems/NavItems";
import { AnimatePresence, motion } from "framer-motion";

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
   
    <AnimatePresence>
    <motion.div
      className="nav-drawer"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: "0.5" }}
      exit={{
        x: "-100vw",
        transition: { delay: 0.7, duration: 1 }
      }}
    >
      <div className="nav-drawer-content-wrapper">
        <div className="nav-drawer-content">
          <NavItems
            listStyle={listStyleOveride}
            listItemStyle={listItemStyleOveride}
            closeNavDrawer={props.closeNavDrawer}
          />
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );

  return ReactDOM.createPortal(content, document.getElementById("backdrop"));
};

export default NavDrawer;
