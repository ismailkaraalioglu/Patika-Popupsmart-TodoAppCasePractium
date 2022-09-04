import React from "react";
import { BsCheck2, BsCheck2All } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoTrashBinOutline } from "react-icons/io5";

function Todo({ todo }) {
  return (
    <div className="flex items-center justify-between p-5 bg-white bg-opacity-40 shadow backdrop-blur-lg border border-white rounded-xl">
      <div className="flex items-center gap-x-4">
        <div className="cursor-pointer hover:scale-110">
          {todo.isCompleted ? (
            <BsCheck2All size={21} />
          ) : (
            <BsCheck2 size={21} />
          )}
        </div>
        <div>{todo.content}</div>
      </div>

      <div className="flex items-center justify-center gap-x-4">
        <div className="cursor-pointer hover:scale-110">
          <FiEdit size={21} />
        </div>
        <div className="cursor-pointer hover:scale-110">
          <IoTrashBinOutline size={22} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
