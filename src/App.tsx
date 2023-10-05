import { useSelector } from "react-redux";
import { useAppDispatch } from "./dispatch.ts";
import { useAppSelector } from "./Selector.ts";
import { FormEvent, useEffect, useState } from "react";
import { createTodo } from "./slice/feature/todoSlice";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoLists from "./components/TodoLists";
const App = () => {
  return (
    <div className="todo-container">
      <Header />
      <CreateTodo />
      <TodoLists />
    </div>
  );
};

export default App;
