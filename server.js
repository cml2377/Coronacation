const express = require('express');
const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/colabdb");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/colabdb", { useNewUrlParser: true });
// mongoose.connect(keys.mongoURI);

const app = express();


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log("STARTED"); });