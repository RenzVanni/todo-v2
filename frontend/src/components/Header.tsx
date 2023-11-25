import { useAppDispatch } from "../Dispatch";
// import { useAppSelector } from "../Selector";
import { onDark } from "../feature/themeSlice";
import data from "../../public/static/images/icon-moon.svg";
const Header = () => {
  // const theme = useAppSelector((state) => state.theme.theme);
  // let modeValue: string = theme.darkMode ? "icon-moon.svg" : "icon-sun.svg";

  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <h1>TODO</h1>
      <div className="img-container">
        <img
          src={data}
          alt="icon"
          onClick={() => {
            dispatch(onDark());
          }}
        />
      </div>
    </div>
  );
};

export default Header;
