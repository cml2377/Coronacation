const db = require('../models/index')
const axios = require('axios')

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
      image: 'image',
      user: 'Kurt'
    })
    // Send the request back to the front end
    res.send(request)
  })

  // ==================================================================================================
  // Get all "needs" from local database based location
  // ==================================================================================================
  app.get('/api/needs', async (req, res) => {
    const request = await db.Needs.find({})
    // Send the request back to the front end
    res.send(request)
  })

  // ==================================================================================================
  // Get single "need" from local database based on the user
  // ==================================================================================================
  app.get('/api/need/:id', async (req, res) => {
    const request = await db.Needs.find({ users: { _id: req.params.id } })
    // Send the request back to the front end
    res.send(request)
  })

  // ==================================================================================================
  // Update "need" to COMPLETE
  // ==================================================================================================
  app.put('/api/need/:id', async (req, res) => {
    // Create an empty workout object ready for exercises to get put into it
    const request = await db.Needs.findOneAndUpdate({ _id: req.params.id }, req.body)
    // Send the request back to the front end
    res.send(request)
  })

  // ==================================================================================================
  // Delete "need" from database/Mark complete
  // ==================================================================================================
  // app.delete('/api/need/:id', async (req, res) => {
  //   // Create an empty workout object ready for exercises to get put into it
  //   const request = await db.Needs.remove({ _id: mongojs.ObjectID(req.params.id) })
  //   // Send the request back to the front end
  //   res.send('Deleted')
  //   console.log(request)
  // })

  // ==================================================================================================
  // =========================         Grocery API Routes        =====================================
  // ==================================================================================================

  // Grocery API will populate the items list that we offer users to add to their Needs. These are set
  // grocery items.

  // ==================================================================================================
  // Images search/serpapi to fill in images in tiles (Separate from the Needs)
  // ==================================================================================================
  app.get('/api/images/:search', async (req, res) => {
    const userQuery = req.params.search // good job
    const queryUrl = `https://serpapi.com/search?q=${userQuery}&tbm=isch&ijn=0`
    axios.get(queryUrl).then(function (response) {
      const info = response.data
      res.json(info)
    })
  })

  // ==================================================================================================
  // A GET route for Grocery API-- https://rapidapi.com/apidojo/api/tasty
  // ==================================================================================================

  //   app.get('/api')

  //   fetch('https://tasty.p.rapidapi.com/tags/list', {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-host': 'tasty.p.rapidapi.com',
  //       'x-rapidapi-key': 'b0b3cd23a8msh9b5f67f9329c84fp15d39djsna60cc23aa720'
  //     }
  //   })
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
}
