const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/needdb", { useNewUrlParser: true });

const app = express();

require('./routes/apiRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});