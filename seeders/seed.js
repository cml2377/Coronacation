const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect('mongodb://localhost/need', {
  useNewUrlParser: true,
  useFindAndModify: false
})

const needSeed = [
  {
    email: 'crystal@example.com',
    day: new Date().setDate(new Date().getDate() - 1),
    zipcode: 78759,
    list: ["Eggs", "Bread"],
    completed: false,
  },
  {
    email: 'justin@mofos.com',
    day: new Date().setDate(new Date().getDate() - 2),
    zipcode: 78751,
    list: ["Fresh Vegetables", "Eggs"],
    completed: false,
  },
  {
    email: 'izzy@issadrunk.com',
    day: new Date().setDate(new Date().getDate() - 3),
    zipcode: 78705,
    list: ["Pedialyte", "Bread"],
    completed: false,
  },
  {
    email: 'joshk@beeating.com',
    day: new Date().setDate(new Date().getDate() - 6),
    zipcode: 78729,
    list: ["Corn", "Bread", "Rice", "Chicken", "Beans"],
    completed: false,
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
