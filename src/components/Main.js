import AddNewTask from "./AddNewTask";
import Todos from "./Todos";
import EditModal from "./EditModal";
import ConfirmModal from "./ConfirmModal";

function Main() {
  return (
    <main className="mainContainer">
      <AddNewTask />
      <Todos />
      <EditModal />
      <ConfirmModal />
    </main>
  );
}

export default Main;
