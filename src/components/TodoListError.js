import React from "react";
import { BiMessageAltError } from "react-icons/bi";
import { useSelector } from "react-redux";

function TodoListError() {
  const isErrorGetTodos = useSelector((state) => state.todos.isErrorGetTodos);

  return (
    <div className="w-full h-[200px] flex flex-col items-center justify-center dark:text-gray-300">
      <BiMessageAltError size={35} />
      <p className="text-xl italic">Todo List {isErrorGetTodos}</p>
    </div>
  );
}

export default TodoListError;
