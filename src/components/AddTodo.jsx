import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/ToDo/TodoSlice";
function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };
    return (
        <div>
            <h1 className="text-5xl text-gray-800 font-bold text-center  m-10">
                ToDo List
            </h1>
            <form className=" flex justify-center m-20" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 outline-none text-gray-200 py-1 px-3 leading-3"
                    placeholder="enter your list "
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="text-black bg-purple-700 py-2 px-6 rounded text-lg font-semibold">
                    {" "}
                    add ToDo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
