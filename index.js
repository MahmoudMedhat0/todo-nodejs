const express = require("express");
const cookieParser = require("cookie-parser");
const path = require('path');
const apiRouter = require("./routers/apirouter");
require ('dotenv').config(); 
const initMongoose = require('./initMongoose')
const { PORT } = process.env;

initMongoose()

const app = express();
// to serve static files
app.use(express.static(path.join(__dirname, "public")));
// to parse request to json
app.use(express.json());
//to serve cookies
app.use(cookieParser());

//routers
app.use('/api',apiRouter)

// error handelres
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode;
  res.send(err);
});

app.listen(PORT, () => {
    console.log('listening on port:', PORT);
  })
