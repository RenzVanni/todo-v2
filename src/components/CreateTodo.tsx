import React from "react";

const CreateTodo = () => {
  return (
    <div className="createTodo-container">
      <form action="">
        <input type="checkbox" name="" id="checkboxLabel" />
        <label htmlFor="checkboxLabel"></label>
        <input type="text" placeholder="Create a new task..." />
      </form>
    </div>
  );
};

export default CreateTodo;
