const express = require('express');
const connectDB = require('./config/db');
const app = express();

const port = process.env.PORT || 5000;

// Connect Database
app.use(express.json())

connectDB();

app.get('/', (req, res) => res.send(`Hello running on ${port}.`));


app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;