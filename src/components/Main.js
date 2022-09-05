import AddNewTask from "./AddNewTask";
import EditModal from "./EditModal";
import Todos from "./Todos";

function Main() {
  return (
    <main className="mt-10">
      <AddNewTask />
      <Todos />
      <EditModal />
    </main>
  );
}

export default Main;
