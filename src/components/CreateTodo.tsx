import { addTodo, Todo } from "../feature/todoSlice";
import { useAppDispatch } from "../Dispatch";
import { useAppSelector } from "../Selector";
import { FormEvent, useState } from "react";

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todo.todo);
  const [inputText, setInputText] = useState<string>("");
  const [todoValue, setTodoValue] = useState<Todo>({
    id: 0,
    text: "",
  });

  const onAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoValue((prev) => {
      return { ...prev, id: todoList.length + 1, text: inputText };
    });
    dispatch(addTodo(todoValue));
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
