const reducer = (
  state = {
    todos: [
      { todo: "Buy Bread", completed: false, showPinBtn: false, id: 0 },
      { todo: "Write a blog", completed: false, showPinBtn: false, id: 1 }
    ],
    pinnedItems: []
  },
  action
) => {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: state.todos.concat({
        todo: action.text,
        completed: false,
        id: action.id
      })
    };
  }
  if (action.type === "COMPLETE_TODO") {
    const newStateWithMarked = {
      ...state,
      todos: state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    };
    return newStateWithMarked;
  }
  if (action.type === "SHOW_COMPLETED") {
    return {
      ...state,
      showCompleted: true,
      showActive: false
    };
  }
  if (action.type === "SHOW_ALL") {
    return { ...state, showActive: false, showCompleted: false };
  }
  if (action.type === "SHOW_ACTIVE") {
    return {
      ...state,
      showActive: true,
      showCompleted: false
    };
  }
  //   if (action.type === "SHOW_PIN") {
  //     return {
  //       ...state,
  //       todos: state.todos.map(todo =>
  //         todo.id === action.id ? { ...todo, showPinBtn: !todo.showPinBtn } : todo
  //       )
  //     };
  //   }
  //   if (action.type === "HIDE_PIN") {
  //     return {
  //       ...state,
  //       todos: state.todos.map(todo =>
  //         todo.id === action.id ? { ...todo, showPinBtn: false } : todo
  //       )
  //     };
  //   }
  if (action.type === "DELETE_TODO") {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.id)
    };
  }
  if (action.type === "PIN_TODO") {
    const item = state.todos.find(item => item.id === action.id);
    return {
      ...state,
      ...state.pinnedItems.push(item)
    };
  }
  if (action.type === "DELETE_PINNED_TODO") {
    console.log(state);
    const filterPin = state.pinnedItems.filter(item => item.id !== action.id);
    return {
      ...state,
      pinnedItems: filterPin
    };
  }
  return state;
};
export default reducer;

// return a new state object replacing with the data you got from action
