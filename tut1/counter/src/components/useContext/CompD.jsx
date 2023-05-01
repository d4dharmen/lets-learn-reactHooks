import { useContext } from "react";
// import { address, name, title } from "../../App";
const ComD = () => {
  const aname = useContext(name);
  const atitle = useContext(title);
  const aaddress = useContext(address)
  return (
    <div>
      <h1>
        {" "}
        hi from D {aname} {atitle}
      </h1>
      <h2> i know you live at {aaddress}</h2>
    </div>
  );
};
export default ComD;
