import React, { useState } from "react";
import "./useStateWithForm.css";

const UseStateWithForm = () => {
  // states
  const [prefix, setPrefix] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState({});

  //states handlers
  const selectHandler = (event) => {
    setPrefix(event.target.value);
    // console.log(`you have chosen ${event.target.value}`);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const submitHandler = () => {
    // console.log("form submitted");
    const formData = {
      salutation: prefix,
      name: name,
      title: title,
    };
    setData(formData);
  };

//   console.log(data.fname);
  return (
    <div>
      <h2>
        welcome {data.salutation} {data.name} nice title {data.title}
      </h2>
      <form action="/#" onSubmit={submitHandler}>
        <div className="inputs">
          <select name="salutation" id="" onChange={selectHandler}>
            <option value="select" disabled>
              {" "}
              select ..
            </option>
            <option value="Mr."> Mr.</option>
            <option value="Mrs."> Mrs.</option>
          </select>
          <label htmlFor="">name</label>
          <input type="text" onChange={nameHandler} />
          <label htmlFor="">titleName</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default UseStateWithForm;
