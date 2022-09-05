import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todoapp/getTodos", async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`
  );
  return res.data;
});

export const addTodo = createAsyncThunk("todoapp/addTodo", async (task) => {
  const res = await axios({
    method: "post",
    url: `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos`,
    data: {
      content: task,
    },
  });
  return res.data;
});

export const editTodo = createAsyncThunk(
  "todoapp/editTodo",
  async ({ value, task }) => {
    const res = await axios({
      method: "put",
      url: `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${task.id}`,
      data: {
        ...task,
        content: value,
      },
    });
    return res.data;
  }
);

export const completedTodo = createAsyncThunk(
  "todoapp/completedTodo",
  async (task) => {
    const res = await axios({
      method: "put",
      url: `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${task.id}`,
      data: {
        ...task,
        isCompleted: !task.isCompleted,
      },
    });
    return res.data;
  }
);

export const removeTodo = createAsyncThunk(
  "todoapp/removeTodo",
  async (task) => {
    await axios.delete(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/todos/${task.id}`
    );
    return task.id;
  }
);
