import { useAppSelector } from "../Selector";

const TodoLists = () => {
  const todo = useAppSelector((state) => state.todo.todo);
  console.log(todo);
  return (
    <div className="todoLists-container">
      {todo.map((todoLists) => {
        return (
          <div className="container-1" key={todoLists.id}>
            <div className="checkbox-container">
              <input type="checkbox" name="" id="forCheckbox" />
              <label htmlFor="forCheckbox"></label>
            </div>

            <p>{todoLists.text}</p>

            <div className="img-container">
              <img src="../../public/images/icon-cross.svg" alt="" />
            </div>
          </div>
        );
      })}
      {todo.length > 0 ? (
        <div className="container-2">
          <p>5 items left</p>

          <div className="footer-1">
            <p>Clear</p>
            <p>Completed</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TodoLists;
