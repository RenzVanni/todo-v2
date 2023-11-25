import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./todoTypes";
import {
  fetchTodos,
  addTodoAsync,
  putTodoAsync,
  deleteTodoAsync,
  clearTodoAsync,
} from "./todoThunks";

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTodo: (
    //   state,
    //   action: PayloadAction<{ id: string; text: string; status: string }>
    // ) => {
    //   // state.todo.push({
    //   //   id: action.payload.id,
    //   //   text: action.payload.text,
    //   //   status: action.payload.status,
    //   // });
    // },
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
      state.todo = state.todo.filter((todo) => todo.status === "completed");
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
      .addCase(fetchTodos.rejected, () => {
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
      .addCase(addTodoAsync.rejected, () => {
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
      .addCase(putTodoAsync.rejected, () => {
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
      .addCase(deleteTodoAsync.rejected, () => {
        console.log("delete todo rejected");
      })
      .addCase(clearTodoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearTodoAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.todo = [];
      })
      .addCase(clearTodoAsync.rejected, () => {
        console.log("delete todo rejected");
      });
  },
});

export const {
  // addTodo,
  deleteTodo,
  clearTodo,
  isActive,
  isNotActive,
  showAll,
  changeStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
