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
        state.todo.push(action.payload);
      })
      .addCase(addTodoAsync.rejected, (state) => {
        console.log("rejected");
      })
      .addCase(putTodoAsync.pending, (state) => {
        console.log("pending state");
        state.isLoading = true;
      })
      .addCase(putTodoAsync.fulfilled, (state, action) => {
        console.log("fullfilled state");
        state.isLoading = false;
        const newStatus = state.todo.find(
          (todo) => todo._id === action.payload._id
        );
        if (newStatus) {
          newStatus.status = action.payload.status;
        } else {
          throw new Error("Put Error");
        }
      })
      .addCase(putTodoAsync.rejected, (state) => {
        console.log("rejected");
      })
      .addCase(deleteTodoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const deleteId = action.payload;
        state.todo = state.todo.filter((todo) => todo._id !== deleteId);
      })
      .addCase(deleteTodoAsync.rejected, (state) => {
        console.log("delete todo rejected");
      })
      .addCase(clearTodoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearTodoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todo = [];
      })
      .addCase(clearTodoAsync.rejected, (state) => {
        console.log("delete todo rejected");
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
