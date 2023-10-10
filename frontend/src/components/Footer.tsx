import React from "react";
import { useAppSelector } from "../Selector";
const Footer = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const footerDark = theme.status === false ? "footer-dark" : "";
  return (
    <div className={`footer ${footerDark}`}>
      <p>All</p>
      <p>Active</p>
      <p>Completed</p>
    </div>
  );
};

export default Footer;
