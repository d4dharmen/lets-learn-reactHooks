import React, { useState } from "react";
const Counter = () => {
  const [value, setVlaue] = useState(0);
  
  function clickHandler() {
    setVlaue(value + 1);
  }

  return (
    <div>
      {/* <button onClick={()=> setVlaue(value+1)}> clicked {value} times</button> */}
      <button onClick={clickHandler}> clicked {value} times</button>
    </div>
  );
};

export default Counter;
