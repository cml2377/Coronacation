const mongoose = require('mongoose')
const { Schema } = mongoose

const needSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  day: {
    type: Date,
    default: Date.now
  },
  zipcode: Number,
  list: Array,
  completed: Boolean,
})

needSchema.index({ day: 1 }, { expires: "14 days" })

const Need = mongoose.model('needs', needSchema)


module.exports = Need
