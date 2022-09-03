import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import todosSlice from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    todos: todosSlice,
  },
});
