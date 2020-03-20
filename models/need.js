const mongoose = require('mongoose');
const { Schema } = mongoose;

const needSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  day: {
    type: Date,
    default: Date.now
  },
  description: String,
  completed: Boolean,
  image: String,
  user: {
    type: String,
    required: true
  }  // required
})

const Need = mongoose.model('needs', needSchema);

module.exports = Need;