require("node:dns").setServers(["8.8.8.8","1.1.1.1"])
require('dotenv').config()

const mongoose = require('mongoose');
function connectDB() {
  mongoose.connect(process.env.MONGO_URI) 
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
}

module.exports = { connectDB };