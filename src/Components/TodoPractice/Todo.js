import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_Todo,
  todo_Add,
  todo_Edit,
  todo_Update,
} from "../../Redux/Action/ActionTodo";

export const Todo = () => {
  const dispatch = useDispatch();

  const [text, settext] = useState("");
  const [UpdateId, setUpdateId] = useState("");
  const selectText = useSelector((state) => state.todo_Store.todoReducer);
  const EditTodo = useSelector((state) => state.todo_Store.editTodo);

  useEffect(() => {
    settext(EditTodo);
  }, [EditTodo]);

  const handleChange = (e) => {
    settext(e.target.value);
  };

  const AddTodo = () => {
    console.log("addding todo");
    dispatch(todo_Add(text));
    settext("");
  };
  const DeleteTodo = (id) => {
    dispatch(delete_Todo(id));
  };

  const GetElement = (id) => {
    dispatch(todo_Edit(id));
    setUpdateId(id);
  };
  const UpdateTodo = () => {
    dispatch(todo_Update(UpdateId, text));
    settext("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="pls text me..."
        value={text}
      ></input>
      {EditTodo ? (
        <button onClick={UpdateTodo}>Update</button>
      ) : (
        <button onClick={AddTodo}>Add</button>
      )}

      {selectText.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => GetElement(index)}>Edit</button>
          <button onClick={() => DeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
