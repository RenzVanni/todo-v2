import { useState } from "react";
import { useAppDispatch } from "../Dispatch";
import { useAppSelector } from "../Selector";
import { onDark } from "../feature/themeSlice";

const Header = () => {
  const [newTheme, setNewTheme] = useState<boolean>(true);
  let modeValue: string = newTheme ? "icon-moon.svg" : "icon-sun.svg";
  const theme = useAppSelector((state) => state.theme.theme);

  const dispatch = useAppDispatch();

  const onNewTheme = () => {
    setNewTheme((prev) => {
      return !prev;
    });
    dispatch(onDark({ dark: newTheme }));
    console.log(newTheme);
    console.log(theme.status);
  };

  return (
    <div className="header">
      <h1>TODO</h1>
      <div className="img-container">
        <img
          src={`../../public/images/${modeValue}`}
          alt=""
          onClick={() => {
            onNewTheme();
          }}
        />
      </div>
    </div>
  );
};

export default Header;
