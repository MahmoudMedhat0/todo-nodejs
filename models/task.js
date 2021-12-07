const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 20 },
//   color: {
//     type: String,
//     enum: ["red", "lightblue", "white"]
//   },
taskList:{type:mongoose.SchemaTypes.ObjectId , ref: 'TaskList'}
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
