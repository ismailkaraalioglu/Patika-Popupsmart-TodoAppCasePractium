import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { showConfirmDeleteModal } from "../redux/event/eventSlice";
import { removeTodo } from "../redux/todos/services";

function ConfirmModal() {
  const confirmDeleteModal = useSelector(
    (state) => state.events.confirmDeleteModal
  );
  const currentDeleteTask = useSelector(
    (state) => state.events.currentDeleteTask
  );

  const dispatch = useDispatch();

  const taskDeleted = (task) => {
    toast.promise(
      dispatch(removeTodo(task)),
      {
        loading: "Deleting...",
        success: <b>Task deleted!</b>,
      },
      {
        className: "dark:bg-zinc-500 dark:text-gray-300",
      }
    );
    dispatch(showConfirmDeleteModal());
  };

  return (
    <>
      {confirmDeleteModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto md:w-1/3 w-full">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-200 dark:bg-zinc-800 outline-none focus:outline-none">
                <div className="text-center px-6 py-9 rounded-t">
                  <h3 className="text-xl font-semibold italic dark:text-gray-200">
                    Are you sure?
                  </h3>
                </div>

                <div className="flex items-center justify-center px-6 py-9 rounded-b">
                  <button
                    className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => dispatch(showConfirmDeleteModal())}
                  >
                    No
                  </button>
                  <button
                    className="bg-emerald-500 hover:bg-emerald-600 text-gray-200 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => taskDeleted(currentDeleteTask)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </>
  );
}

export default ConfirmModal;
