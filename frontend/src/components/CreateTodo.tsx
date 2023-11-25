import { addTodoAsync } from "../feature/todoThunks";
import { useAppDispatch } from "../Dispatch";
import { useAppSelector } from "../Selector";
import { FormEvent, useState } from "react";

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todo.todo);
  const [inputText, setInputText] = useState<string>("");

  const onAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let todoLength = todoList.length;
    // dispatch(
    //   addTodo({ id: todoLength.toString(), text: inputText, status: "active" })
    // );
    todoLength += 1;
    dispatch(addTodoAsync({ text: inputText, status: "active" }));
    setInputText("");
  };

  const theme = useAppSelector((state) => state.theme.theme);
  const createDark = theme.darkMode === false ? "create-dark" : "";

  return (
    <div className={`createTodo-container ${createDark}`}>
      <form action="" onSubmit={onAddTodo}>
        <input type="checkbox" name="" id="checkboxLabel" />
        <label htmlFor="checkboxLabel"></label>
        <input
          type="text"
          placeholder="Create a new task..."
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default CreateTodo;
