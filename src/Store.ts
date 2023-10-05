import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/feature/todoSlice.ts";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
