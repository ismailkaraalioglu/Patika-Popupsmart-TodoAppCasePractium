import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todos/services";
import Todo from "./Todo";
import TodoListError from "./TodoListError";
import TodoListLoading from "./TodoListLoading";

function Todos() {
  const statusGetTodos = useSelector((state) => state.todos.statusGetTodos);
  const todos = useSelector((state) => state.todos.todoItems);

  const dispatch = useDispatch();

  useEffect(() => {
    if (statusGetTodos === "idle") {
      dispatch(getTodos());
    }
  }, [dispatch, statusGetTodos]);

  return (
    <div className="md:mt-10 mt-7 md:w-1/2 w-full md:mx-auto">
      <h1 className="text-center font-bold text-xl dark:text-gray-300">
        Todo List
      </h1>
      {statusGetTodos === "failed" && <TodoListError />}
      {statusGetTodos === "loading" && <TodoListLoading />}
      {statusGetTodos === "succeeded" && (
        <div className="w-full flex flex-col gap-y-1 mt-5">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
