import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion.cjs";
import "./Modal.css";

const Modal = (props) => {
  const [isVisible, setIsvisible] = useState(true);

  const clickHandler = () => {
    setIsvisible(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  const okBtnclickHandler = () => {
    setIsvisible(false);
    if (props.onOkBtnClick) {
      props.onOkBtnClick();
    }
  };

  const element = isVisible ? (
    <AnimatePresence>
      <motion.div className="modal-backdrop">
        <motion.div className="modal" initial={{ y: -1000 }} animate={{ y: 0 }}>
          <div className="modal-content">
            <div className="modal-header-wrapper">
              <div className="modal-header">{props.header}</div>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer ">
              <div className='modal-footer-div'>
                {props.okBtn&&<div className="close-btn">
                  <motion.button style={{backgroundColor: '#da2a2a'}} onClick={okBtnclickHandler}>{props.okBtnText||'ok'}</motion.button>
                </div>}
                <div className="close-btn">
                  <motion.button onClick={clickHandler}>close</motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : (
    <div />
  );

  return element;
};

export default Modal;
