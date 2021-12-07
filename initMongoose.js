const mongoose = require('mongoose');
const {MONGO_URL} = process.env
module.exports = () => {
  mongoose.connect(MONGO_URL,
    {
      useNewUrlParser: true, useUnifiedTopology: true
    }
  );
  
  const db = mongoose.connection;
  
  db.on('open', () => {
    console.log('connection started');
  });
  
  db.on('error', (err) => {
    console.log('connection error', err);
  })
};