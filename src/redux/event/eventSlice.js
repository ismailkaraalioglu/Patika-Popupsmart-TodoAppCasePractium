import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "events",
  initialState: {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    editTaskModal: false,
    editTaskContentValue: "",
  },
  reducers: {
    changeDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
    showEditTaskModal: (state, action) => {
      state.editTaskModal = !state.editTaskModal;
    },
  },
});

export const { changeDarkMode, showEditTaskModal } = eventSlice.actions;

export default eventSlice.reducer;
