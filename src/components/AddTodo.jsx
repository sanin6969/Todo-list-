import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, romoveTodo } from "../Features/ToDo/TodoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput("");
  };
  return <div></div>;
}

export default AddTodo;
