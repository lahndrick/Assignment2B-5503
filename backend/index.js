const express = require('express')

const app = express()

require('dotenv').config()

app.use(express.json())
app.use(cors());
app.use(router);

const connectDB = require('./connectMongo')

connectDB()

export default app;
