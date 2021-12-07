const mongoose = require("mongoose");

const TaskListSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 20 },
  color: {
    type: String,
    enum: ["red", "lightblue", "white"]
  },
  userId: {type:mongoose.SchemaTypes.ObjectId , ref:'User'}
});

const TaskList = mongoose.model("TaskList", TaskListSchema);

module.exports = TaskList;
