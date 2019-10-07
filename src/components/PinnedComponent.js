import React from "react";
import { connect } from "react-redux";
import { deletePinnedTodo } from "../actions/action";
function PinnedComponent(props) {
  console.log({ props });
  function deletePin(id) {
    props.deletePinnedItem(id);
  }
  return (
    <div className="pin-card">
      <h5>#Pinned</h5>
      <ul>
        {props.todoItems.pinnedItems.length > 0
          ? props.todoItems.pinnedItems.map(pinned => (
              <li key={pinned.id}>
                {pinned.todo}{" "}
                <button
                  className="delete-btn-pinned"
                  type="submit"
                  onClick={() => deletePin(pinned.id)}
                >
                  X
                </button>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    todoItems: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deletePinnedItem: id => {
      dispatch(deletePinnedTodo(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinnedComponent);
