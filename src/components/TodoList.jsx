import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeTodo } from '../Features/ToDo/TodoSlice'
function TodoList() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos);
    return (
        <div className="flex justify-center flex-col items-center ">
            {todos.map((item) => (
                <div className="text-center flex " key={item.id}>
                    <div className="bg-gray-800 rounded border border-gray-700 outline-none text-gray-200 p-4 min-w-80">
                        {item.text}
                    </div>
                    <button className="text-2xl text-red-700" onClick={() => dispatch(removeTodo(item.id))}><MdDeleteForever /></button>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
