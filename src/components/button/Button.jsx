import React from "react";
import "./Button.css";

function Button({ className, value, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
