import AddNewTask from "./AddNewTask";
import EditModal from "./EditModal";
import Todos from "./Todos";

function Main() {
  return (
    <main className="md:mt-10 mt-7">
      <AddNewTask />
      <Todos />
      <EditModal />
    </main>
  );
}

export default Main;
