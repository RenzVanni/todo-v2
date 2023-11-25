import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "./todoTypes";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_DOMAIN);
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
      const response = await axios.post(import.meta.env.VITE_DOMAIN, {
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
      const response = await axios.put(`${import.meta.env.VITE_DOMAIN}/${id}/`);
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
      await axios.delete(`${import.meta.env.VITE_DOMAIN}/${id}`);
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
      const response = await axios.delete(import.meta.env.VITE_DOMAIN);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
