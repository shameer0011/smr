import {
  TODO_ADD,
  TODO_DELETE,
  TODO_GET,
  TODO_UPDATE,
} from "../Action/ActionTodo";

const initialState = {
  todoReducer: [],
  editTodo: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      console.log("TODO ADD REDUCER", action.payload);
      return { ...state, todoReducer: [...state.todoReducer, action.payload] };

    case TODO_GET:
      console.log("TODO GET REDUCER", action.payload);
      return { ...state, editTodo: state.todoReducer[action.payload] };

    case TODO_UPDATE:
      console.log("TODO UPDATE REDUCER", action.payload);
      const Todo_Copy = [...state.todoReducer];
      Todo_Copy[action.payload.id] = action.payload.text;

      return { ...state, todoReducer: Todo_Copy };

    case TODO_DELETE:
      console.log("TODO DELETE REDUCER", action.payload);
      return {
        ...state,
        todoReducer: state.todoReducer.filter(
          (item) => action.payload == !state.todoReducer.indexOf(item)
        ),
      };

    default:
      return state;
  }
};
