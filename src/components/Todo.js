import React from "react";
import classNames from "classnames";
import { BsCheck2, BsCheck2All } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo } from "../redux/todos/services";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handleIsCompleted = (todo) => {
    dispatch(editTodo(todo));
  };

  const handleTaskRemove = (todo) => {
    dispatch(removeTodo(todo));
  };

  return (
    <div className="flex items-center justify-between p-5 bg-white bg-opacity-40 shadow backdrop-blur-lg border border-white rounded-xl">
      <div className="flex items-center gap-x-4">
        <div
          className="cursor-pointer hover:scale-110"
          onClick={() => handleIsCompleted(todo)}
        >
          {todo.isCompleted ? (
            <BsCheck2All size={21} className="fill-green-500" />
          ) : (
            <BsCheck2 size={21} />
          )}
        </div>
        <div
          className={classNames({
            "text-green-500 line-through": todo.isCompleted,
          })}
        >
          {todo.content}
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-4">
        <div className="cursor-pointer hover:scale-110">
          <FiEdit size={21} />
        </div>
        <div
          className="cursor-pointer hover:scale-110"
          onClick={() => handleTaskRemove(todo)}
        >
          <IoTrashBinOutline size={22} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
