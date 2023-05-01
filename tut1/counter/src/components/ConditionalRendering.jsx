import { useEffect, useState } from "react";

const ConditionalRendering = () => {
    const [counter, setCounter]= useState(0)
    const [input, setInputData]= useState("")
    
useEffect(()=>{
document.title = `title changed ${counter}times`
})
const changeHandler = (event)=>{
    setInputData(event.target.value)
    
}
    
  return (
    <div>
        <h2>your input is :-- {input}</h2>
      <input type="text" name="" id="" value={input} onChange={changeHandler}/>
      <button onClick={()=> setCounter(counter + 1)}>clicked {counter} </button>
    </div>
  );
};
export default ConditionalRendering;
