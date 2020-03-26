const db = require('../models/index')
const axios = require('axios')
const mongojs = require('mongojs')

module.exports = function (app) {
  // ==================================================================================================
  // Create "need" in array
  // ==================================================================================================
  app.post('/api/need', async (req, res) => {
    // Save Need to Database
    console.log({"apiRoutes.js":  req.body})
    const request = await db.Needs.create({
      email: req.body.email,
      day: new Date().setDate(new Date().getDate()),
      zipcode: req.body.zipcode,
      list: ["Cheese"],
      completed: req.body.completed,
    })
    // Send the request back to the front end
    res.send(request)
  })

  // ==================================================================================================
  // Get all "needs" from local database based location - Working
  // ==================================================================================================
  app.get('/api/needs', async (req, res) => {
    const request = await db.Needs.find({})
    // Send the request back to the front end
    // res.send(request)
    res.send({ "Get All": request })
  })

  // ==================================================================================================
  // Get single "need" from local database based on the user - Working
  // ==================================================================================================
  app.get('/api/need/:id', async (req, res) => {
    const request = await db.Needs.findOne({ _id: req.params.id })
    // Send the request back to the front end
    // res.json(request)
    res.send({ "Get Single": request })

  })

  // ==================================================================================================
  // Update "need" to COMPLETE - Working
  // ==================================================================================================
  app.put('/api/need/:id', async (req, res) => {
    // Create an empty workout object ready for exercises to get put into it
    const request = await db.Needs.findOneAndUpdate({ _id: req.params.id },
      {
        email: req.body.email,
        day: Date().setDate(new Date().getDate()),
        zipcode: req.body.zipcode,
        list: ["Pedialyte", "Ibuprofen"],
        completed: req.body.completed,
      })
    // Send the request back to the front end
    res.send({ "Updated": request })
  })

  // ==================================================================================================
  // Delete "need" from database/Mark complete - Working
  // ==================================================================================================
  app.delete('/api/need/:id', async (req, res) => {
    // Create an empty workout object ready for exercises to get put into it
    const request = await db.Needs.remove({ _id: req.params.id })
    // Send the request back to the front end
    // res.send('Deleted')
    res.send({ "Deleted": request })
  })


  // ==================================================================================================
  // Images search/serpapi to fill in images in tiles (Separate from the Needs) - Working ***This is now Icebox***
  // ==================================================================================================
  app.get('/api/images/:search', async (req, res) => {
    const userQuery = req.params.search // good job
    const query_url = `https://serpapi.com/search?q=${userQuery}&tbm=isch&ijn=0`
    axios.get(query_url).then(function (response) {
      const info = response.data
      res.json(info)
    })
  })
}
