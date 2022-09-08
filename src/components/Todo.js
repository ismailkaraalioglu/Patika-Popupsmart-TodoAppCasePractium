import classNames from "classnames";
import toast from "react-hot-toast";
import { BsCheck2, BsCheck2All } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo } from "../redux/todos/services";
import {
  showEditTaskModal,
  showConfirmDeleteModal,
} from "../redux/event/eventSlice";

function Todo({ todo }) {
  const statusRemoveTodo = useSelector((state) => state.todos.statusRemoveTodo);
  const statusCompletedTodo = useSelector(
    (state) => state.todos.statusCompletedTodo
  );

  const dispatch = useDispatch();

  const handleIsCompleted = (todo) => {
    toast.promise(
      dispatch(completedTodo(todo)),
      {
        loading: "Completed is changing...",
        success: <b>Completed changed!</b>,
      },
      {
        className: "dark:bg-zinc-500 dark:text-gray-300",
      }
    );
  };

  const handleTaskRemove = (todo) => {
    dispatch(showConfirmDeleteModal(todo));
  };

  const handleTaskEdit = (todo) => {
    dispatch(showEditTaskModal(todo));
  };

  return (
    <div className="flex items-center justify-between p-5 bg-white bg-opacity-40 dark:bg-opacity-20 shadow backdrop-blur-lg border border-white dark:border-zinc-400 rounded-xl dark:text-gray-100">
      <div className="flex items-center gap-x-4">
        <button
          className="cursor-pointer hover:scale-125"
          onClick={() => handleIsCompleted(todo)}
          disabled={statusCompletedTodo === "loading"}
        >
          {todo.isCompleted ? (
            <BsCheck2All size={21} className="fill-green-500" />
          ) : (
            <BsCheck2 size={21} />
          )}
        </button>
        <div
          className={classNames({
            "text-green-500 line-through": todo.isCompleted,
          })}
        >
          {todo.content}
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-4">
        <button
          className="cursor-pointer hover:scale-110"
          onClick={() => handleTaskEdit(todo)}
        >
          <FiEdit size={21} />
        </button>
        <button
          className="cursor-pointer hover:scale-110"
          onClick={() => handleTaskRemove(todo)}
          disabled={statusRemoveTodo === "loading"}
        >
          <IoTrashBinOutline size={22} />
        </button>
      </div>
    </div>
  );
}

export default Todo;
