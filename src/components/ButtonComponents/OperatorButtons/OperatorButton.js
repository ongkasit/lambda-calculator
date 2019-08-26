import React from "react";
import { directive } from "@babel/types";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <div className="operators-container">
    <button onClick={() => props.addOperator(props.operator.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
    </div>
  );
};

export default OperatorButton;
