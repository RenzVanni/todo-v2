import React from "react";

const TodoLists = () => {
  return (
    <div className="todoLists-container">
      <div className="container-1">
        <div className="checkbox-container">
          <input type="checkbox" name="" id="forCheckbox" />
          <label htmlFor="forCheckbox"></label>
        </div>

        <p>Complete Programming</p>

        <div className="img-container">
          <img src="../../public/images/icon-cross.svg" alt="" />
        </div>
      </div>
      <div className="container-2">
        <p>5 items left</p>

        <div className="footer-1">
          <p>Clear</p>
          <p>Completed</p>
        </div>
      </div>
    </div>
  );
};

export default TodoLists;
