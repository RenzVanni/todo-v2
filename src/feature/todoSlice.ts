import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  status: string;
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
    addTodo: (
      state,
      action: PayloadAction<{ id: number; text: string; status: string }>
    ) => {
      state.todo.push({
        id: action.payload.id,
        text: action.payload.text,
        status: action.payload.status,
      });
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload.id);
    },
    changeStatus: (state, action: PayloadAction<{ id: number }>) => {
      state.todo.map((todo) => {
        if (todo.id === action.payload.id) {
          if (todo.status === "active") {
            console.log("notActive");
            return (todo.status = "notActive");
          } else {
            console.log("active");
            return (todo.status = "active");
          }
        }
      });
    },
    clearTodo: (state) => {
      state.todo = [];
    },
    isActive: (state) => {
      state.todo = state.todo.filter((todo) => todo.status === "active");
    },
    isNotActive: (state) => {
      state.todo = state.todo.filter((todo) => todo.status !== "active");
    },
    showAll: (state) => {
      state.todo = state.todo;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  clearTodo,
  isActive,
  isNotActive,
  showAll,
  changeStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
