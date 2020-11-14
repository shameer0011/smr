export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const DELETE_TODO_LIST = "DELETE_TODO_LIST";
export const UPDATE_TODO_LIST = "UPDATE_TODO_LIST";
export const GET_TODO = "GET_TODO";

export const AddTodoList = (todo) => {
  return {
    type: ADD_TODO_LIST,
    payload: todo,
  };
};

export const DeleteTodoList = (id) => {
  return {
    type: DELETE_TODO_LIST,
    payload: id,
  };
};

export const updateTodoList = (id, newTodo) => {
  return {
    type: UPDATE_TODO_LIST,
    payload: { id, newTodo },
  };
};

export const getTodo = (id) => {
  return {
    type: GET_TODO,
    payload: id,
  };
};
