const mongoose = require('mongoose')
const { Schema } = mongoose

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
  user: {
    type: String,
    required: true
  }
})

const Need = mongoose.model('needs', needSchema)

module.exports = Need
