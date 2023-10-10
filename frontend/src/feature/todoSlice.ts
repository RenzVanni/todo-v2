import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
      await axios.post("http://localhost:3000", {
        text,
        status,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export interface Todo {
  _id?: string | undefined;
  text: string;
  status: string;
}

interface TodoState {
  todo: Todo[];
  isLoading: boolean;
}

const initialState: TodoState = {
  todo: [],
  isLoading: true,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ id: string; text: string; status: string }>
    ) => {
      // state.todo.push({
      //   id: action.payload.id,
      //   text: action.payload.text,
      //   status: action.payload.status,
      // });
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todo = state.todo.filter((todo) => todo._id !== action.payload.id);
    },
    changeStatus: (state, action: PayloadAction<{ id: string }>) => {
      state.todo.forEach((todo) => {
        if (todo._id === action.payload.id) {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        console.log("pending state");
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log("fullfilled state");
        state.isLoading = false;
        state.todo = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        console.log("rejected");
      })
      .addCase(addTodoAsync.pending, (state) => {
        console.log("pending state");
        state.isLoading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log("fullfilled state");
        state.isLoading = false;
      })
      .addCase(addTodoAsync.rejected, (state) => {
        console.log("rejected");
      });
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
