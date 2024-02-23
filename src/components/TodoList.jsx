import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
    const todos = useSelector((state) => state.todos);
    return (
        <div className="flex justify-center flex-col items-center ">
            {todos.map((item) => (
                <div className="text-center " key={item.id}>
                    <h1 className="bg-gray-800 rounded border border-gray-700 outline-none text-gray-200 p-4 min-w-80">
                        {item.text}
                    </h1>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
