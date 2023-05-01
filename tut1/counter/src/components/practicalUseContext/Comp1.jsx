import Comp2 from "./Comp2";
import './style.css'
import { useContext } from "react";
import { title } from "../../App";

const Comp1 = ()=>{
    const name = useContext(title)
    return(
        <div className="container">
            <h2>product title is here:-- {name}</h2>
            <Comp2 />
        </div>
    )
}
export default Comp1;