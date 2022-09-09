import toast from "react-hot-toast";
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
    toast.promise(
      dispatch(editTodo({ value, task })),
      {
        loading: "Editing...",
        success: <b>Task Edited!</b>,
      },
      {
        className: "editTodoAlert",
      }
    );

    dispatch(showEditTaskModal());
  };

  return (
    <>
      {editTaskModal && (
        <div>
          <div className="editModalContainer">
            <div className="editModalPage">
              <div className="editModalContent">
                <div className="editModalTitleSection">
                  <h3 className="editModalTitle">Editing Todo Task</h3>
                </div>
                <div className="editModalInputSection">
                  <input
                    className="editModalInput"
                    placeholder="Edit to do task..."
                    value={editInputValue}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="editModalButtonSection">
                  <button
                    className="editModalCloseButton"
                    type="button"
                    onClick={() => dispatch(showEditTaskModal())}
                  >
                    Close
                  </button>
                  <button
                    className="editModalSaveButton"
                    type="button"
                    onClick={() => saveChange(editInputValue, currentEditTask)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="editModalPageBackground"></div>
        </div>
      )}
    </>
  );
}

export default EditModal;
