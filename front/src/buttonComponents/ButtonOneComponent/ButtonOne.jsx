import React from "react";
import "../../buttonComponents/ButtonOneComponent/ButtonOne.css";

export default function ButtonOne(props) {
  return (
    <div className="Button-One-div">
      <button
        className="Button-One"
        onClick={() => {
          props.onClick();
        }}
      >
        <h4 className="pre-text">
          {props.icon}
          {props.text}
        </h4>
      </button>
    </div>
  );
}
