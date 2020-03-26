const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/needdb', { useNewUrlParser: true })

const app = express()

// This transfers body from frontend to backend
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes/apiRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`)
})
