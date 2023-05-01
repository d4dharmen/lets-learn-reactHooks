import React, { useReducer } from "react";

const intialState = {
  FirstCountValue: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { FirstCountValue: state.FirstCountValue + action.changeby };
    case "decrement":
      return { FirstCountValue: state.FirstCountValue - action.changeby };
    case "reset":
      return { FirstCountValue: intialState.FirstCountValue };
    default:
      return { intialState };
  }
};
const UseReducerObj = () => {
  const [value, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      {" "}
      <h2> value {value.FirstCountValue} </h2>
      <button
        onClick={() => {
          dispatch({ type: "increment",changeby:1  });
        }}
      >
        {" "}
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", changeby:1 });
        }}
      >
        {" "}
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment", changeby: 5 });
        }}
      >
        {" "}
        increment5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", changeby: 5 });
        }}
      >
        {" "}
        decrement5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        {" "}
        reset
      </button>
    </div>
  );
};
export default UseReducerObj;
