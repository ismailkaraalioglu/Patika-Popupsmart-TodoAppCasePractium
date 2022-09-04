import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import eventSlice from "./event/eventSlice";
import todosSlice from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    events: eventSlice,
    todos: todosSlice,
  },
});
