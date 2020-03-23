const mongoose = require('mongoose')
const db = require('../models/index')

mongoose.connect('mongodb://localhost/needdb', {
  useNewUrlParser: true,
  useFindAndModify: false
})

const needSeed = [
  {
    name: 'Toilet Paper',
    day: new Date().setDate(new Date().getDate() - 1),
    description: 'Please my butt is so dirty!',
    completed: false,
    user: 'Crystal Ly'
  },
  {
    name: 'Oranges',
    day: new Date().setDate(new Date().getDate() - 3),
    description: "I need Vit C or I'll get scurvy.",
    completed: false,
    user: 'Kurt LaVacque'
  },
  {
    name: 'Cheerios',
    day: new Date().setDate(new Date().getDate() - 2),
    description: 'Breakfast is important.',
    completed: false,
    user: 'Brianna McCray'
  },
  {
    name: 'Medicine',
    day: new Date().setDate(new Date().getDate() - 1),
    description: 'Message me for details.',
    completed: false,
    user: 'Mags Kiefer'
  }
]

db.Needs.deleteMany({})
  .then(() => db.Needs.insertMany(needSeed))
  .then(data => {
    console.log(data.length + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
