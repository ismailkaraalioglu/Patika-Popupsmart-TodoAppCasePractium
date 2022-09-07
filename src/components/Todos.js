import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todos/services";
import Todo from "./Todo";
import TodoListLoading from "./TodoListLoading";

function Todos() {
  const loadingGetTodos = useSelector((state) => state.todos.loadingGetTodos);
  const todos = useSelector((state) => state.todos.todoItems);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loadingGetTodos === "idle") {
      dispatch(getTodos());
    }
  }, [dispatch, loadingGetTodos]);

  return (
    <div className="mt-10 w-1/2 mx-auto">
      <h1 className="text-center font-bold text-xl dark:text-gray-300">
        Todo List
      </h1>
      {loadingGetTodos === "loading" && <TodoListLoading />}
      {loadingGetTodos === "succeeded" && (
        <div className="w-full h-[450px] overflow-auto flex flex-col gap-y-1 mt-5">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
