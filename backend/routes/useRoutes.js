const express = require("express");
const route = express.Router();
const {
  getTodos,
  postTodos,
  putTodo,
  deleteTodo,
  clearTodo,
} = require("../controllers/useControllers");

route.get("/", getTodos);
route.post("/", postTodos);
route.put("/:id", putTodo);
route.delete("/:id", deleteTodo);
route.delete("/", clearTodo);

module.exports = route;
