const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
