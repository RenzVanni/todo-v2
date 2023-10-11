import { useAppSelector } from "../Selector";
import { useAppDispatch } from "../Dispatch";
import {
  deleteTodo,
  clearTodo,
  isActive,
  isNotActive,
  showAll,
  changeStatus,
  fetchTodos,
  deleteTodoAsync,
  clearTodoAsync,
} from "../feature/todoSlice";
import { useEffect, useState } from "react";

const TodoLists = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todo = useAppSelector((state) => state.todo.todo) || [];
  const isLoading = useAppSelector((state) => state.todo.isLoading);

  const theme = useAppSelector((state) => state.theme.theme);
  const listDark = theme.status === false ? "list-dark" : "";

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={`todoLists-container ${listDark}`}>
      {todo.map((todoLists) => {
        return (
          <div className="container-1" key={todoLists._id}>
            <input
              type="checkbox"
              name=""
              id={todoLists._id}
              onClick={() => {
                dispatch(changeStatus({ id: String(todoLists._id) }));
              }}
            />
            <label htmlFor={todoLists._id}></label>

            <div className="text-container">
              <p>{todoLists.text}</p>
            </div>

            <div className="img-container">
              <img
                src="../../public/images/icon-cross.svg"
                alt=""
                onClick={() =>
                  dispatch(deleteTodoAsync({ id: String(todoLists._id) }))
                }
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
          <p onClick={() => dispatch(clearTodoAsync())}>Clear Completed</p>
        </div>
      ) : null}
    </div>
  );
};

export default TodoLists;
