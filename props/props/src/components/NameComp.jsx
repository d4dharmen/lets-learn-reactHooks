import React from "react";
import './NameComp.css'

const NameComp = (props) => {
  // we cannot change the read only porperty of props i.e props.name = "sameer"
  return (
    <div className="conatainer">
      <h2>welcome mr. {props.name} i know you are a {props.work}</h2>
      {props.children}  
    </div>
  );
};
export default NameComp;
