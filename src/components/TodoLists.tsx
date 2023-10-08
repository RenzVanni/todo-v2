import { useAppSelector } from "../Selector";
import { useAppDispatch } from "../Dispatch";
import {
  deleteTodo,
  clearTodo,
  isActive,
  isNotActive,
  showAll,
  changeStatus,
} from "../feature/todoSlice";
import { useState } from "react";

const TodoLists = () => {
  const todo = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.theme.theme);
  const listDark = theme.status === false ? "list-dark" : "";

  return (
    <div className={`todoLists-container ${listDark}`}>
      {todo.map((todoLists) => {
        return (
          <div className="container-1" key={todoLists.id}>
            <input
              type="checkbox"
              name=""
              id={todoLists.id.toString()}
              onClick={() => {
                dispatch(changeStatus({ id: todoLists.id }));
              }}
            />
            <label htmlFor={todoLists.id.toString()}></label>

            <div className="text-container">
              <p>{todoLists.text}</p>
            </div>

            <div className="img-container">
              <img
                src="../../public/images/icon-cross.svg"
                alt=""
                onClick={() => dispatch(deleteTodo({ id: todoLists.id }))}
              />
            </div>
          </div>
        );
      })}
      {todo.length > 1 ? (
        <div className="container-2">
          <p>{todo.length} items left</p>

          <div className="middle">
            <p onClick={() => dispatch(showAll())}>All</p>
            <p onClick={() => dispatch(isActive())}>Active</p>
            <p onClick={() => dispatch(isNotActive())}>Completed</p>
          </div>
          <p onClick={() => dispatch(clearTodo())}>Clear Completed</p>
        </div>
      ) : null}
    </div>
  );
};

export default TodoLists;
