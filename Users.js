// Define a User model
const mongoose = require('./connection')

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  });
  
  // Create a User model based on the schema
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;