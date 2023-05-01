import ComB from "./compB";

const ComA = (props) => {
  return (
    <div>
      <h1> hi from a {props.name} </h1>
      <ComB />
    </div>
  );
};
export default ComA;
