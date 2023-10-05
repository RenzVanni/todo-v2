import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  todos: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ todos: action.payload });
    },
  },
});

export const { createTodo } = todoSlice.actions;

export default todoSlice.reducer;
