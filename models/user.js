const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minLength: 3, maxLength: 20 },
  lastName: { type: String, required: true, minLength: 3, maxLength: 20 },
  password: {type: String , required:true},
  email : {type: String , required:true , unique:true}
//   taskList : [
//       {  type: mongoose.SchemaTypes.ObjectId, ref: 'TaskList'   }
//   ]
});


const User = mongoose.model('User',UserSchema)

module.exports = User;


