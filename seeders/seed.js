let mongoose = require('mongoose');
let db = require('../models');

mongoose.connect("mongodb://localhost/need", {

});

let needSeed = [
  {
    name: "Toilet Paper",
    day: new Date().setDate(new Date().getDate() - 1),
    description: "Please my butt is so dirty!",
    completed: false,
    user: "Crystal Ly"
  },
  {
    name: "Oranges",
    day: new Date().setDate(new Date().getDate() - 3),
    description: "I need Vit C or I'll get scurvy.",
    completed: false,
    user: "Kurt LaVacque"
  },
  {
    name: "Cheerios",
    day: new Date().setDate(new Date().getDate() - 2),
    description: "Breakfast is important.",
    completed: false,
    user: "Brianna McCray"
  },
  {
    name: "Medicine",
    day: new Date().setDate(new Date().getDate() - 1),
    description: "Message me for details.",
    completed: false,
    user: "Mags Kiefer"
  }
]