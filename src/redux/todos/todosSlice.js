import { createSlice } from "@reduxjs/toolkit";
import {
  getTodos,
  completedTodo,
  removeTodo,
  addTodo,
  editTodo,
} from "./services";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoItems: [],
    statusGetTodos: "idle",
    statusRemoveTodo: "idle",
    statusCompletedTodo: "idle",
    isErrorGetTodos: null,
  },
  reducers: {},
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.statusGetTodos = "loading";
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todoItems = action.payload;
      state.statusGetTodos = "succeeded";
    },
    [getTodos.rejected]: (state, action) => {
      state.statusGetTodos = "failed";
      state.isErrorGetTodos = action.error.message;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.todoItems.push(action.payload);
    },
    [completedTodo.pending]: (state, action) => {
      state.statusCompletedTodo = "loading";
    },
    [completedTodo.fulfilled]: (state, action) => {
      const { id, isCompleted } = action.payload;
      const index = state.todoItems.findIndex((todo) => todo.id === id);
      state.todoItems[index].isCompleted = isCompleted;
      state.statusCompletedTodo = "succeeded";
    },
    [editTodo.fulfilled]: (state, action) => {
      const { id, content } = action.payload;
      const index = state.todoItems.findIndex((todo) => todo.id === id);
      state.todoItems[index].content = content;
    },
    [removeTodo.pending]: (state, action) => {
      state.statusRemoveTodo = "loading";
    },
    [removeTodo.fulfilled]: (state, action) => {
      const id = action.payload;
      const index = state.todoItems.findIndex((todo) => todo.id === id);
      state.todoItems.splice(index, 1);
      state.statusRemoveTodo = "succeeded";
    },
  },
});

export default todosSlice.reducer;
