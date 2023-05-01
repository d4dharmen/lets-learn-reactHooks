import React, { useState } from "react";
import './CounterInTitle.css'

const CounterInTitle = () => {
let [value, setValue] = useState(0)

  const incrementHandler = ()=>{
    setValue(value + 1)
  }
  const decrementHandler = ()=>{
    setValue(value - 1)
  }
  const resetHandler = ()=>{
    setValue(0)
  }



  return (
    <div>
      <h2>you have clicked <span className="counter">{value}</span> times </h2>
      <div className="buttons">
      <button onClick={incrementHandler}> + </button>
      <button onClick={decrementHandler}> - </button>
      <button onClick={resetHandler}> Reset </button>
      </div>
      
    </div>
  );
};
export default CounterInTitle