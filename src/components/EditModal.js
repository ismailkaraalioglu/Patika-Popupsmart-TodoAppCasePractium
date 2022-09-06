import { useSelector, useDispatch } from "react-redux";
import { showEditTaskModal, changeInputValue } from "../redux/event/eventSlice";
import { editTodo } from "../redux/todos/services";

function EditModal() {
  const editInputValue = useSelector((state) => state.events.editInputValue);
  const editTaskModal = useSelector((state) => state.events.editTaskModal);
  const currentEditTask = useSelector((state) => state.events.currentEditTask);

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    dispatch(changeInputValue(e.target.value));
  };

  const saveChange = (value, task) => {
    dispatch(editTodo({ value, task }));
    dispatch(showEditTaskModal());
  };

  return (
    <>
      {editTaskModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-1/3">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-200 outline-none focus:outline-none">
                <div className="text-center px-6 py-9 rounded-t">
                  <h3 className="text-xl font-semibold italic">
                    Editing Todo Task
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <input
                    className="my-4 p-4 w-full rounded-xl bg-white bg-opacity-40 shadow backdrop-blur-lg border border-r-0 border-l-0 border-white flex-1 placeholder:font-medium placeholder:text-sm placeholder:italic outline-none"
                    placeholder="Edit to do task..."
                    value={editInputValue}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center justify-end px-6 py-9 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => dispatch(showEditTaskModal())}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => saveChange(editInputValue, currentEditTask)}
                  >
                    Save Changes
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

export default EditModal;
