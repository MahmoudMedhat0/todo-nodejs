const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minLength: 3, maxLength: 20 },
  lastName: { type: String, required: true, minLength: 3, maxLength: 20 },
  password: {type: String , required:true},
  email : {type: String , required:true , unique:true}

},
{
  // to manage what we would to return in response 
  toJSON:{
    transform: (doc, ret) =>{
      delete ret.password;
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  }
}
);


const User = mongoose.model('User',UserSchema)

module.exports = User;


