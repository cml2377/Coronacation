// const db = require("../models");
// const axios = require("axios");

// Get users
// Get "needed posts"

// Post "needed post/tile?"

// Delete "postings"

// Update "postings" to complete/incomplete

// Get "Grocery API"

// Get "Google Images/serpapi to fill in images in tile"

module.exports = function (app) {

  app.get('/api/images/:search', async (req, res) => {
    const userQuery = req.params.search;

    const queryUrl = `https://serpapi.com/search?q=${userQuery}&tbm=isch&ijn=0`
    const getUserAsync = async (queryUrl) => {
      let response = await fetch(queryUrl);
      let data = await response.json()
      console.log(data)
      return data;

    }
    await getUserAsync(queryUrl)
    await res.send(request)
  });
}