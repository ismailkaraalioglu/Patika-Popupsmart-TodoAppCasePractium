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
        className: "todoCompletedSuccessAlert",
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
    <div className="todoContainer">
      <div className="todoLeftSection">
        <button
          className="todoCompletedButton"
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
            "todoContentCompleted": todo.isCompleted,
          })}
        >
          {todo.content}
        </div>
      </div>

      <div className="todoRightSection">
        <button className="todoEditButton" onClick={() => handleTaskEdit(todo)}>
          <FiEdit size={21} />
        </button>
        <button
          className="todoRemoveButton"
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
