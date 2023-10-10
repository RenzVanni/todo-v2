const express = require("express");
const route = express.Router();
const { getTodos, postTodos } = require("../controllers/useControllers");

route.get("/", getTodos);
route.post("/", postTodos);

module.exports = route;
