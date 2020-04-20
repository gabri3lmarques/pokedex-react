import React from "react";
import propTypes from "prop-types";
import "./button.style.css";

const Button = (props) => {
  return (
    <button name="action" className="button-component">
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string,
};

export default Button;
