import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion.cjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Modal.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
            <motion.button  whileHover={{scale:1.1}} onClick={clickHandler}><FontAwesomeIcon icon={faTimes}/></motion.button>
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
