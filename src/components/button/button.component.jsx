import React from "react";
import "./button.style.css";

const Button = (props) => {
  return <button className="button-component">{props.text}</button>;
};

export default Button;
