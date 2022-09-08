import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "events",
  initialState: {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    editTaskModal: false,
    confirmDeleteModal: false,
    editInputValue: "",
    currentEditTask: null,
    currentDeleteTask: null,
  },
  reducers: {
    changeDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
    showEditTaskModal: (state, action) => {
      state.editTaskModal = !state.editTaskModal;
      if (state.editTaskModal) {
        const currentTask = action.payload;
        state.editInputValue = currentTask.content;
        state.currentEditTask = currentTask;
      } else {
        state.editInputValue = "";
      }
    },
    changeInputValue: (state, action) => {
      state.editInputValue = action.payload;
    },
    showConfirmDeleteModal: (state, action) => {
      state.confirmDeleteModal = !state.confirmDeleteModal;
      if (state.confirmDeleteModal) {
        state.currentDeleteTask = action.payload;
      }
    },
  },
});

export const {
  changeDarkMode,
  showEditTaskModal,
  changeInputValue,
  showConfirmDeleteModal,
} = eventSlice.actions;

export default eventSlice.reducer;
