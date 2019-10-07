import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/action";
function AddTodo(props) {
  let input;
  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(input.value);
    input.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-style"
        placeholder="Enter Your Todos here..."
        ref={node => (input = node)}
      />
      {"  "}
      <button type="submit">Add Todo</button>
    </form>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: val => {
      dispatch(addTodo(val));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
