import React from "react";
import "./Dictionary.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <h6>Example: {props.example}</h6>
      </div>
    );
  } else {
    return (
      <div className="Example">
        <h6>No example avaible</h6>
      </div>
    );
  }
}
