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
        className: "confirmAlert",
      }
    );
    dispatch(showConfirmDeleteModal());
  };

  return (
    <>
      {confirmDeleteModal && (
        <div>
          <div className="confirmModalContainer">
            <div className="confirmModalPage">
              <div className="confirmModalContent">
                <div className="confirmModalTitleSection">
                  <h3 className="confirmModalTitle">Are you sure?</h3>
                </div>

                <div className="confirmModalButtonSection">
                  <button
                    className="confirmModalNoButton"
                    type="button"
                    onClick={() => dispatch(showConfirmDeleteModal())}
                  >
                    No
                  </button>
                  <button
                    className="confirmModalYesButton"
                    type="button"
                    onClick={() => taskDeleted(currentDeleteTask)}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="confirmModalPageBackground"></div>
        </div>
      )}
    </>
  );
}

export default ConfirmModal;
