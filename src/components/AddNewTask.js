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
        className: "dark:bg-zinc-500 dark:text-gray-300",
      });
    } else {
      toast.promise(
        dispatch(addTodo(newTask)),
        {
          loading: "Saving...",
          success: <b>Task saved!</b>,
        },
        {
          className: "dark:bg-zinc-500 dark:text-gray-300",
        }
      );
      setNewTask("");
    }
  };

  return (
    <form
      className="md:w-1/2 w-full md:mx-auto flex items-center justify-between"
      onSubmit={handleNewTask}
    >
      <div
        className="rounded-l-xl py-4 px-2 dark:text-gray-300 bg-white bg-opacity-40 dark:bg-opacity-20 shadow backdrop-blur-lg border dark:border-zinc-800 border-r-0 border-white group cursor-pointer"
        onClick={inputTaskValueRemove}
      >
        <AiOutlinePlus
          size={24}
          className="group-hover:rotate-45 group-hover:transition-all"
        />
      </div>
      <input
        className="p-4 bg-white bg-opacity-40 dark:bg-opacity-20 dark:text-gray-200 shadow backdrop-blur-lg border border-r-0 border-l-0 border-white dark:border-zinc-800 flex-1 placeholder:font-medium placeholder:text-sm dark:placeholder:text-gray-300 placeholder:italic outline-none"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="py-[18px] px-4 rounded-r-xl font-medium text-sm dark:text-gray-300 bg-green-500 dark:bg-green-700 dark:hover:bg-green-800 bg-opacity-70 shadow backdrop-blur-lg border dark:border-zinc-800 border-l-0 border-white hover:bg-opacity-90">
        New Task
      </button>
    </form>
  );
}

export default AddNewTask;
