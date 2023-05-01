import { useEffect, useState } from "react";

const ConditionalUseEffect = () => {
  const [name, setName] = useState("dharmendra");
  const [counter, setCounter] = useState(0);

  const [title, setTitle] = useState(" ");

  useEffect(()=>{
  document.title = `your title has changed ${counter} times`
  })

  const clickHandler = () => {
    if (name === "dharmendra") {
      setName("prakash");
      setCounter(counter + 1);
    } else {
      setName("dharmendra");
    }
  };

  return (
    <div>
      <h2>my name is {name} </h2>
      <button onClick={clickHandler}> toggle name</button>
    </div>
  );
};
export default ConditionalUseEffect;
