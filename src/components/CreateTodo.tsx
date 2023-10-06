import { addTodo } from "../feature/todoSlice";
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
    dispatch(addTodo({ id: todoLength, text: inputText }));
    todoLength += 1;
  };

  return (
    <div className="createTodo-container">
      <form action="" onSubmit={onAddTodo}>
        <input type="checkbox" name="" id="checkboxLabel" />
        <label htmlFor="checkboxLabel"></label>
        <input
          type="text"
          placeholder="Create a new task..."
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateTodo;
