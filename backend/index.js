require("dotenv").config();
const express = require('express');
const connectDB = require('./config/database');
const PORT = process.env.PORT || 3001;



const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
