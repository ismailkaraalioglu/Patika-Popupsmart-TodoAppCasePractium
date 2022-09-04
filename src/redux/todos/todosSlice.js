import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./services";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoItems: [],
    loadingGetTodos: "idle",
  },
  reducers: {},
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.loadingGetTodos = "loading";
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todoItems = action.payload;
      state.loadingGetTodos = "succeeded"
    },
  },
});

export default todosSlice.reducer;
