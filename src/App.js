import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <div className="todo-style">
          <h1>Todo App</h1>
          <AddTodo />
          <div className="todos-list">
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
