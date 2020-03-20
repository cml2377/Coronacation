const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  stars: {
    type: Number,
    default: 0
  },
  firstName: String,
  lastName: String,
  email: String,
  photo: String,
  phone: Number,
  location: String,
  numberOfStars: Number,
  postings: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;