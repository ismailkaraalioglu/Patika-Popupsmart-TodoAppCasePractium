import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todos/services";
import Todo from "./Todo";

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
    <div className="mt-10 w-3/5 mx-auto">
      <h1 className="text-center font-bold text-xl">Todo List</h1>
      <div className="w-full flex flex-col gap-y-1 mt-5">
        {loadingGetTodos === "loading" && <div>Yükleniyor</div>}
        {loadingGetTodos === "succeeded" &&
          todos.map((todo, idx) => <Todo key={idx} todo={todo} />)}
      </div>
    </div>
  );
}

export default Todos;
