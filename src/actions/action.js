let nextId = 2;
export const addTodo = text => {
  return {
    type: "ADD_TODO",
    text,
    id: nextId++
  };
};
export const completeTodo = id => {
  return {
    type: "COMPLETE_TODO",
    id
  };
};
export const showCompleteTodo = () => {
  return {
    type: "SHOW_COMPLETED"
  };
};
export const showAll = () => {
  return {
    type: "SHOW_ALL"
  };
};
export const showActive = () => {
  return {
    type: "SHOW_ACTIVE"
  };
};
// export const showPin = id => {
//   return {
//     type: "SHOW_PIN",
//     id
//   };
// };
// export const hidePin = id => {
//   return {
//     type: "HIDE_PIN",
//     id
//   };
// };
export const pinTodos = id => {
  return {
    type: "PIN_TODO",
    id
  };
};
export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};
export const deletePinnedTodo = id => {
  return {
    type: "DELETE_PINNED_TODO",
    id
  };
};
