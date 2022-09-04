import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todoapp/getTodos", async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}`);
  return res.data;
});
