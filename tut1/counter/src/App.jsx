import React from "react";
import "./App.css";
import Counter from "./components/counter";
import CounterInTitle from "./components/CounterInTitle";
import UseStateWithForm from "./components/Form/useStateWithForm";
import ConditionalUseEffect from "./components/ConditionalUseEffect";
import ConditionalRendering from "./components/ConditionalRendering";
import ComA from "./components/useContext/comA";
import Comp1 from "./components/practicalUseContext/Comp1";
import SimpleReducer from "./components/useReducer/SimpleReducer";
import UseReducerObj from "./components/useReducer/UseReducerObj";

// export const name = React.createContext();
// export const title = React.createContext();
// export const address = React.createContext()

export const title = React.createContext();
export const pTitle = React.createContext();
export const PDescription = React.createContext();
function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <CounterInTitle /> */}
      {/* <UseStateWithForm /> */}
      {/* <ConditionalUseEffect /> */}
      {/* <ConditionalRendering /> */}

      {/* <name.Provider value={"prakash"}>
        <title.Provider value={"chauhan"}>
          <address.Provider value={'sondiha'}>
          <ComA />
          </address.Provider>
          
        </title.Provider>
      </name.Provider> */}

      {/* <title.Provider value={"samsung galaxy"}>
        <pTitle.Provider value={"isse achha mobile nahi aata"}>
          <PDescription.Provider
            value={
              "kehne ko to bahut kuchh kaha ja sakta hai lekin baat yah hai ki yeh product unique hai aisa feature market main exists nahi karta hai"
            }
          >
            <div className="mainContainer">
            <Comp1 className= "content"/>
            <Comp1 className= "content"/>
            <Comp1 className= "content"/>
            </div>
           
          </PDescription.Provider>
        </pTitle.Provider>
      </title.Provider> */}

      {/* <SimpleReducer /> */}
      <UseReducerObj />
    </>
  );
}

export default App;
