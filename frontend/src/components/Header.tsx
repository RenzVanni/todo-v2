import { useAppDispatch } from "../Dispatch";
import { useAppSelector } from "../Selector";
import { onDark } from "../feature/themeSlice";

const Header = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  let modeValue: string = theme.darkMode ? "icon-moon.svg" : "icon-sun.svg";

  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <h1>TODO</h1>
      <div className="img-container">
        <img
          src={`../../public/static/images/${modeValue}`}
          alt=""
          onClick={() => {
            dispatch(onDark());
          }}
        />
      </div>
    </div>
  );
};

export default Header;
