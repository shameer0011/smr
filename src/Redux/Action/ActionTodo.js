export const TODO_ADD = "TODO_ADD";
export const TODO_GET = "TODO_GET";
export const TODO_UPDATE = "TODO_UPDATE";
export const TODO_DELETE = "TODO_DELETE";

export const todo_Add = (text) => {
  return {
    type: TODO_ADD,
    payload: text,
  };
};

export const todo_Edit = (id) => {
  return {
    type: TODO_GET,
    payload: id,
  };
};

export const todo_Update = (id, text) => {
  return {
    type: TODO_UPDATE,
    payload: { id, text },
  };
};
export const delete_Todo = (id) => {
  return {
    type: TODO_DELETE,
    payload: id,
  };
};
