import React from "react";

import "./Button.css";

const Button = (props) => {
  const buttonClick = () => {
    props.onClick && props.onClick();
  };
  return (
    <button
      className="btn"
      disabled={props.disabled}
      style={props.styles}
      onClick={buttonClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
