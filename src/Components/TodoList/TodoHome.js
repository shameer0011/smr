import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodoList,
  DeleteTodoList,
  getTodo,
  updateTodoList,
} from "../../Redux/Action/TodoAction";

export const TodoHome = () => {
  const selectState = useSelector((state) => state.lists.list);
  const updateTodo = useSelector((state) => state.lists.updateTodo);
  const [text, settext] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    settext(updateTodo);
  }, [updateTodo]);

  const dispatch = useDispatch();

  const textDisplay = (e) => {
    settext(e.target.value);
  };

  const addHandler = () => {
    dispatch(AddTodoList(text));
    settext("");
  };

  const deleteHandler = (key) => {
    dispatch(DeleteTodoList(key));
  };

  const fetchTodo = (id) => {
    setEditId(id);
    dispatch(getTodo(id));
  };

  const updateHandler = () => {
    dispatch(updateTodoList(editId, text));
    settext("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={textDisplay}
        placeholder="pls text me..."
        value={text}
      />
      {updateTodo === "" ? (
        <button onClick={addHandler}>Add</button>
      ) : (
        <button onClick={updateHandler}>Upate</button>
      )}

      {selectState.map((item, index) => (
        <div key={Math.random() * 9} style={{ display: "flex" }}>
          <p>{item}</p>
          <button onClick={() => fetchTodo(index)}>Edit</button>
          <button onClick={() => deleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default TodoHome;
