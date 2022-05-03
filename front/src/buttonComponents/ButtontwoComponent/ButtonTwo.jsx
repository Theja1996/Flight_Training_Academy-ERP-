import React from "react";
import "../../buttonComponents/ButtontwoComponent/ButtonTwo.css";

export default function ButtonTwo(props) {
  return (
    <div className="button-two-div">
      <button
        className="button-two"
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
