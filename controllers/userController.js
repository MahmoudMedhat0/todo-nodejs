const bcrypt = require("bcrypt");
const User = require("../models/user");
const CustomError = require("../models/customError");

const register = (req, res, next) => {
    console.log('body before')
    const registerData = req.body || {}
    if(!req.body) return next ( new CustomError(400, 'invalid registeration data'))
    // TODO: Validate incomming data before querying  the DB
    
    const {firstName, lastName, email, password} = registerData;

    User.findOne({email},(err,doc)=>{
        if(doc) return next(new CustomError(400,'email already exists'))

        if(err) return next(CustomError.internalServerError)
        const user = new User({email , firstName, lastName})
        bcrypt.genSalt(10,(err,salt)=>{
            if(err) return next(CustomError.internalServerError)
            bcrypt.hash(password,salt,(err,hash)=>{
                if (err) return next(CustomError.internalServerError)
                user.password = hash
                user.save();
                res.send(user)
            })
        })
    })
    console.log('object after')

}
const login = (req, res, next) => {res.send('login')};

const logout = (req, res, next) => {res.send("logout")};

const getCurrentUser = (req, res, next) => {res.send("hello")};

module.exports = {
  register,
  login,
  logout,
  getCurrentUser,
};
