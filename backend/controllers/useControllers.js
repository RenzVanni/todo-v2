const Todo = require("../model/todoModel");

const getTodos = async (req, res) => {
  const todos = await Todo.find();
  if (!todos) {
    res.status(404);
    throw new Error("No Todo found");
    return;
  }

  res.json(todos);
};

const postTodos = async (req, res) => {
  const { text, status } = req.body;
  const addTodo = await Todo.create({
    text: text,
    status: status,
  });

  res.json(addTodo);
};

module.exports = { getTodos, postTodos };
