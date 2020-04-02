const db = require("../models/index");
const axios = require("axios");
const mongojs = require("mongojs");

module.exports = function (app) {
  // ==================================================================================================
  // Create "need" in array
  // ==================================================================================================
  app.post("/api/need", async (req, res) => {
    // Save Need to Database
    console.log({ "apiRoutes.js": req.body });
    const request = await db.Needs.create({
      email: req.body.email,
      day: new Date().setDate(new Date().getDate()),
      zipcode: req.body.zipcode,
      list: req.body.list,
      completed: req.body.completed
    });
    // Send the request back to the front end
    res.send(request);
  });

  // ==================================================================================================
  // Get all "needs" from local database based location - Working
  // ==================================================================================================


  app.get("/api/needs", async (req, res) => {
    // Query is either empty to return all
    // Or query will filter by zipcode
    let query = {}
    if (req.query.zipcode) {
      query.zipcode = req.query.zipcode
    }
    const request = await db.Needs.find(query);
    res.send(request);
  });

  // ==================================================================================================
  // Get single "need" from local database based on the user - Working
  // ==================================================================================================
  app.get("/api/need/:id", async (req, res) => {
    const request = await db.Needs.findOne({ _id: req.params.id });
    // Send the request back to the front end
    // res.json(request)
    res.send({ "Get Single": request });
  });

  // ==================================================================================================
  // Find "needs" with search bar
  // ==================================================================================================
  app.get("/api/need/search_need", async (req, res) => {
    const request = await db.Needs.find({ $text: { $search: req.body.search } })
    res.send({ "Search For": request });
  });

  // ==================================================================================================
  // Update "need" to COMPLETE - Working
  // ==================================================================================================
  app.put("/api/need/:id", async (req, res) => {
    // Create an empty workout object ready for exercises to get put into it
    const request = await db.Needs.findOneAndUpdate(
      { _id: req.params.id },
      {
        email: req.body.email,
        day: Date().setDate(new Date().getDate()),
        zipcode: req.body.zipcode,
        list: req.body.list,
        completed: req.body.completed
      },
      console.log(request)
    );
    // Send the request back to the front end
    res.send({ Updated: request }).catch(err => {
      console.log(err);
    });
  });


  // ==================================================================================================
  // Delete "need" from database/Mark complete - Working
  // ==================================================================================================
  app.delete("/api/need/:id", async (req, res) => {
    // Create an empty workout object ready for exercises to get put into it
    const request = await db.Needs.remove({ _id: req.params.id });
    // Send the request back to the front end
    // res.send('Deleted')
    res.send({ Deleted: request });
  });
};

// ===========================================================
// Auto delete documents (Needs) from database after 2 weeks.
// ===========================================================

// app.delete("/api/need/", async (req, res) => {
//   const oldNeeds = await db.Needs.remove({ date: { $lte: new Date().getDate() - 14 } });
//   res.send({ Deleted: oldNeeds })
// })