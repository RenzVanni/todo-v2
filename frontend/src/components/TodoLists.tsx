import { useAppSelector } from "../Selector";
import { useAppDispatch } from "../Dispatch";
import { isActive, isNotActive } from "../feature/todoSlice";
import {
  fetchTodos,
  putTodoAsync,
  deleteTodoAsync,
  clearTodoAsync,
} from "../feature/todoThunks";
import { useEffect } from "react";

const TodoLists = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todo = useAppSelector((state) => state.todo.todo) || [];
  const isLoading = useAppSelector((state) => state.todo.isLoading);

  const theme = useAppSelector((state) => state.theme.theme);
  const listDark = theme.darkMode === false ? "list-dark" : "";

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className={`todoLists-container ${listDark}`}>
      <div className="todolist-main-container">
        {todo.map((todoLists) => {
          return (
            <div className="container-1" key={todoLists._id}>
              <input
                type="checkbox"
                name=""
                id={todoLists._id}
                checked={todoLists.status === "completed"}
                onChange={() => {
                  dispatch(putTodoAsync({ id: String(todoLists._id) }));
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
      </div>
      {todo.length > 1 ? (
        <div className="container-2">
          <p>{todo.length} items left</p>

          <div className="middle">
            <p onClick={() => dispatch(fetchTodos())}>All</p>
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
