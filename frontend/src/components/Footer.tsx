import { useAppSelector } from "../Selector";
import { useAppDispatch } from "../Dispatch";
import { showAll, isActive, isNotActive } from "../feature/todoSlice";
const Footer = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const footerDark = theme.darkMode === false ? "footer-dark" : "";

  const todo = useAppSelector((state) => state.todo.todo);
  const dispatch = useAppDispatch();
  return (
    <>
      {todo.length > 0 ? (
        <div className={`footer ${footerDark}`}>
          <p onClick={() => dispatch(showAll())}>All</p>
          <p onClick={() => dispatch(isActive())}>Active</p>
          <p onClick={() => dispatch(isNotActive())}>Completed</p>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
