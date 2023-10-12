import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "./todoTypes";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await axios.get("http://localhost:3000");
    return [...response.data];
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async ({ _id, text, status }: Todo) => {
    try {
      const response = await axios.post("http://localhost:3000", {
        text,
        status,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const putTodoAsync = createAsyncThunk(
  "todos/putTodoAsync",
  async ({ id }: { id: string }) => {
    try {
      const response = await axios.put(`http://localhost:3000/${id}/`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async ({ id }: { id: string }) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const clearTodoAsync = createAsyncThunk(
  "todos/clearTodoAsync",
  async () => {
    try {
      const response = await axios.delete("http://localhost:3000");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
