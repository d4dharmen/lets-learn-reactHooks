import { useState } from "react";

import "./App.css";

// import component
import NameComp from "./components/NameComp";

function App() {
  return (
    <div className="App">
      <h1>hi from app</h1>
      {/* //passing props */}
      <NameComp name="dharmendra" work="webDevloper"> 
      {/* passing children props */}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          commodi sunt sapiente nam unde dolore distinctio ipsum quis
          reprehenderit eos.
        </p>
        <h5>this is second child</h5>
      </NameComp>

      <NameComp name="bablu" work="dataScientist">
        <button className="button"> like</button>
      </NameComp>
      <NameComp name="mohan" />
    </div>
  );
}

export default App;
