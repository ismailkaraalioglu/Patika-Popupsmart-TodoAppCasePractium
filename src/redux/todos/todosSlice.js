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
    loadingGetTodos: "idle",
  },
  reducers: {},
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.loadingGetTodos = "loading";
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todoItems = action.payload;
      state.loadingGetTodos = "succeeded";
    },
    [addTodo.fulfilled]: (state, action) => {
      state.todoItems.push(action.payload);
      state.loadingAddTodo = "succeeded";
    },
    [completedTodo.fulfilled]: (state, action) => {
      const { id, isCompleted } = action.payload;
      const index = state.todoItems.findIndex((todo) => todo.id === id);
      state.todoItems[index].isCompleted = isCompleted;
    },
    [editTodo.fulfilled]: (state, action) => {
      const { id, content } = action.payload;
      const index = state.todoItems.findIndex((todo) => todo.id === id);
      state.todoItems[index].content = content;
    },
    [removeTodo.fulfilled]: (state, action) => {
      const id = action.payload;
      const index = state.todoItems.findIndex((todo) => todo.id === id);
      state.todoItems.splice(index, 1);
    },
  },
});

export default todosSlice.reducer;
