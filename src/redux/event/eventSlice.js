import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "events",
  initialState: {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    editTaskModal: false,
    editInputValue: "",
    currentEditTask: null,
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
  },
});

export const { changeDarkMode, showEditTaskModal, changeInputValue } =
  eventSlice.actions;

export default eventSlice.reducer;
