import {
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  GET_TODO,
  UPDATE_TODO_LIST,
} from "../Action/TodoAction";
const initialState = {
  list: [],
  updateTodo: "",
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      if (!state.list.includes(action.payload)) {
        return {
          ...state,
          list: [...state.list, action.payload],
        };
      } else {
        alert("THIS VALUES IN ALREADY ADDED");
        return state;
      }
    case DELETE_TODO_LIST:
      return {
        ...state,
        list: state.list.filter(
          (item) => action.payload !== state.list.indexOf(item)
        ),
      };
    case UPDATE_TODO_LIST:
      const newArray = [...state.list];
      const el = action.payload.newTodo;
      newArray[action.payload.id] = el;
      return {
        ...state,
        list: newArray,
        updateTodo: "",
      };

    case GET_TODO:
      return {
        ...state,
        updateTodo: state.list[action.payload],
      };

    default:
      return state;
  }
};

export default TodoReducer;
