import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./feature/todoSlice";
import themeSlice from "./feature/themeSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    theme: themeSlice,
  },
});
