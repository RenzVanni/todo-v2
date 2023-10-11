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

const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error("Todo not found");
    return;
  }

  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedTodo);
};

const clearTodo = async (req, res) => {
  const clear = await Todo.deleteMany({});
  res.status(200).json(clear);
};

module.exports = { getTodos, postTodos, deleteTodo, clearTodo };
