import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/services";

function AddNewTask() {
  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();

  const inputTaskValueRemove = () => {
    setNewTask("");
  };

  const handleNewTask = (e) => {
    e.preventDefault();
    if (newTask === "" || newTask.length < 3) {
      toast.error("At least 3 characters are required.", {
        className: "addNewTaskInputErrorAlert",
      });
    } else {
      toast.promise(
        dispatch(addTodo(newTask)),
        {
          loading: "Saving...",
          success: <b>Task saved!</b>,
        },
        {
          className: "addTodoSuccessAlert",
        }
      );
      setNewTask("");
    }
  };

  return (
    <form className="addNewTaskFormContainer" onSubmit={handleNewTask}>
      <div className="addNewTaskValueRemove" onClick={inputTaskValueRemove}>
        <AiOutlinePlus size={24} className="addNewTaskValueRemoveIcon" />
      </div>
      <input
        className="addNewTaskInput"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="addNewTaskButton">New Task</button>
    </form>
  );
}

export default AddNewTask;
