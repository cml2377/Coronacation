const db = require('../models/index')
const axios = require('axios')
const mongojs = require('mongojs')

module.exports = function (app) {
  // ==================================================================================================
  // Create "need" via TILE(images of preset groceries) or INPUT BOX(custom need, like medicine)
  // ==================================================================================================
  app.post('/api/need', async (req, res) => {
    // Save Need to Database
    const request = await db.Needs.create({
      // name: req.body.name,
      // description: req.body.description,
      // completed: req.body.completed,
      // image: req.body.image,
      // user: req.body.user
      name: 'Tuna Fish',
      description: 'Description',
      completed: false,
      user: 'Kurt'
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
        // name: req.body.name,
        // description: req.body.description,
        // completed: req.body.completed,
        // image: req.body.image,
        // user: req.body.user
        name: 'Tuna',
        description: 'Description',
        completed: false,
        user: 'Kurt'
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
  // =========================         Grocery API Routes        =====================================
  // ==================================================================================================

  // Grocery API will populate the items list that we offer users to add to their Needs. These are set
  // grocery items.

  // ==================================================================================================
  // Images search/serpapi to fill in images in tiles (Separate from the Needs) - Working
  // ==================================================================================================
  app.get('/api/images/:search', async (req, res) => {
    const userQuery = req.params.search // good job
    const query_url = `https://serpapi.com/search?q=${userQuery}&tbm=isch&ijn=0`
    axios.get(query_url).then(function (response) {
      const info = response.data
      res.json(info)
    })
  })

  // ==================================================================================================
  // A GET route for Grocery API-- https://rapidapi.com/apidojo/api/tasty
  // ==================================================================================================

  // app.get('/api')

  // fetch('https://tasty.p.rapidapi.com/tags/list', {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-host': 'tasty.p.rapidapi.com',
  //     'x-rapidapi-key': 'b0b3cd23a8msh9b5f67f9329c84fp15d39djsna60cc23aa720'
  //   }
  // })
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
}
