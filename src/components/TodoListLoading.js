import React from "react";
import { ImSpinner9 } from "react-icons/im";

function TodoListLoading() {
  return (
    <div className="w-full h-[200px] flex flex-col items-center justify-center dark:text-gray-300">
      <ImSpinner9 size={30} className="animate-spin" />
      <p className="mt-2 text-xl italic">Todo List Loading...</p>
    </div>
  );
}

export default TodoListLoading;
