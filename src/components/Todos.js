import React from "react";
import { connect } from "react-redux";
import PinnedComponent from "./PinnedComponent";
import {
  completeTodo,
  showCompleteTodo,
  showAll,
  showActive,
  pinTodos,
  deleteTodo
} from "../actions/action";
function Todos(props) {
  // console.log({ props });
  function completeTodo(id) {
    props.setCompleted(id);
  }
  function showComplete() {
    props.showCompleted();
  }
  function showAllActive() {
    props.showActive();
  }
  function showAllTodo() {
    props.showAllTodos();
  }
  // function showPinButton(id) {
  //   props.showPin(id);
  // }
  // function hidePinButton(id) {
  //   props.hidePin(id);
  // }
  function pinTodo(id) {
    props.pinTodoItem(id);
  }
  function deleteTodo(id) {
    props.deleteItem(id);
  }
  return (
    <div>
      {props.todos.pinnedItems.length > 0 ? <PinnedComponent /> : null}
      <ul>{todoFilter().map(todoMapper())}</ul>
      <div className="filter-btn">
        Filters:{" "}
        <button type="submit" onClick={showAllTodo}>
          Show All
        </button>{" "}
        <button type="submit" onClick={showAllActive}>
          Show Active
        </button>{" "}
        <button type="submit" onClick={showComplete}>
          Show Completed
        </button>
      </div>
    </div>
  );

  function todoMapper() {
    return todo => (
      <li
        key={todo.id}
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
        onClick={() => completeTodo(todo.id)}
        className="list-style"
        // onMouseOver={() => showPinButton(todo.id)}
        // onMouseOut={() => hidePinButton(todo.id)}
      >
        {todo.todo}{" "}
        {/* {todo.showPinBtn ? (
          <button type="submit" onClick={() => pinTodo(todo.id)}>
            Pin Todo
          </button>
        ) : null} */}
        <span>
          <button
            className="delete-btn"
            type="submit"
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
          <button
            className="pin-btn"
            type="submit"
            onClick={() => pinTodo(todo.id)}
          >
            Pin Todo
          </button>
        </span>
      </li>
    );
  }

  function todoFilter() {
    return props.todos.todos.filter(todo =>
      props.todos.showActive
        ? todo.completed === false
        : props.todos.showCompleted
        ? todo.completed === true
        : true
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCompleted: id => {
      dispatch(completeTodo(id));
    },
    showCompleted: () => {
      dispatch(showCompleteTodo());
    },
    showActive: () => {
      dispatch(showActive());
    },
    showAllTodos: () => {
      dispatch(showAll());
    },
    // showPin: id => {
    //   dispatch(showPin(id));
    // },
    // hidePin: id => {
    //   dispatch(hidePin(id));
    // },
    pinTodoItem: id => {
      dispatch(pinTodos(id));
    },
    deleteItem: id => {
      dispatch(deleteTodo(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
