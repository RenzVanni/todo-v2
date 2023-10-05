import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todo: Todo[];
}

const initialState: TodoState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      state.todo.push({ id: action.payload.id, text: action.payload.text });
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.todo = state.todo.filter((todo) => todo.id === action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
