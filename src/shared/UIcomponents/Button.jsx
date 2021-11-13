import React from "react";

import './Button.css';

const Button = (props) => {
  const buttonClick = () => {
    props.onClick && props.onClick();
  };
  return <div className='btn' style={props.styles} onClick={buttonClick}>{props.children}</div>;
};

export default Button;
