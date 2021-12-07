const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
userId:{type:mongoose.SchemaTypes.ObjectId , ref: 'User'}
});

const Token = mongoose.model("Token", TokenSchema);

module.exports = Token;
