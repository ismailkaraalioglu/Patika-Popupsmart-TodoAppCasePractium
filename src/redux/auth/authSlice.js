import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userLogin } = authSlice.actions;

export default authSlice.reducer;
