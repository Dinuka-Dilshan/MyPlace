import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion.cjs";

import "./Modal.css";

const Modal = (props) => {

    const [isVisible,setIsvisible] = useState(true);

    const clickHandler=()=>{
        setIsvisible(false);
    }


    const element = isVisible?<motion.div className="modal-backdrop">
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header-wrapper">
        <div className='modal-header'>
            {props.header}
        </div>
        <div className='close-btn'>
            <button onClick={clickHandler}>X</button>
        </div>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  </motion.div>:<div/>


  return (
      element
  );
};

export default Modal;
