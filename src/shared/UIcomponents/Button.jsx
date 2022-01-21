import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  const buttonClick = () => {
    props.onClick && props.onClick();
  };

  if (props.to) {
    return(
      <Link to={props.to} className="btn">
      {props.children}
    </Link>
    )
  } else {
    return (
      <button
      type={props.type}
        className="btn"
        disabled={props.disabled}
        style={props.styles}
        onClick={buttonClick}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
