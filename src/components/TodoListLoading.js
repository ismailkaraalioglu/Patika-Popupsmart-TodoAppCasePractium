import React from "react";
import { ImSpinner9 } from "react-icons/im";

function TodoListLoading() {
  return (
    <div className="todoListLoadingContainer">
      <ImSpinner9 size={30} className="todoListLoadingIcon" />
      <p className="todoListLoadingTitle">Todo List Loading...</p>
    </div>
  );
}

export default TodoListLoading;
