import React from "react";
import { BiMessageAltError } from "react-icons/bi";
import { useSelector } from "react-redux";

function TodoListError() {
  const isErrorGetTodos = useSelector((state) => state.todos.isErrorGetTodos);

  return (
    <div className="todoListErrorContainer">
      <BiMessageAltError size={35} />
      <p className="todoListErrorTitle">Todo List {isErrorGetTodos}</p>
    </div>
  );
}

export default TodoListError;
