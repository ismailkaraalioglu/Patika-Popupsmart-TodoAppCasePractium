import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "events",
  initialState: {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
  },
  reducers: {
    changeDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { changeDarkMode } = eventSlice.actions;

export default eventSlice.reducer;
