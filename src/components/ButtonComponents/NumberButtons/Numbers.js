import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file
import { numbers } from "../../../data.js";


const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  console.log("Numbers", props);
  return (
    <div className="numbers" >
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {buttonNumbers.map (number => <NumberButton key={number} 
                                                  text={number} 
                                                  addNumber={props.addNumber}/>)}
    </div>
  );
};

export default Numbers; 