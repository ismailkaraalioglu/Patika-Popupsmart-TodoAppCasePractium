import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddNewTask() {
  const [newTask, setNewTask] = useState("");

  const inputTaskValueRemove = () => {
    setNewTask("");
  };

  const handleNewTask = (e) => {
    e.preventDefault();
    if (newTask === "" || newTask.length < 3) return;
  };

  return (
    <form
      className="w-1/2 mx-auto flex items-center justify-between"
      onSubmit={handleNewTask}
    >
      <div
        className="rounded-l-xl py-4 px-2 bg-white bg-opacity-40 shadow backdrop-blur-lg border border-r-0 border-white group cursor-pointer"
        onClick={inputTaskValueRemove}
      >
        <AiOutlinePlus
          size={24}
          className="group-hover:rotate-45 group-hover:transition-all"
        />
      </div>
      <input
        className="p-4 bg-white bg-opacity-40 shadow backdrop-blur-lg border border-r-0 border-l-0 border-white flex-1 placeholder:font-medium placeholder:text-sm placeholder:italic outline-none"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="py-[18px] px-4 rounded-r-xl font-medium text-sm bg-green-500 bg-opacity-40 shadow backdrop-blur-lg border border-l-0 border-white hover:bg-opacity-70">
        New Task
      </button>
    </form>
  );
}

export default AddNewTask;
