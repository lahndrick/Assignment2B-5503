const express = require('express')
const app = express()
const connectDB = require('./connectMongo')
const PORT = process.env.PORT || 5000
const cors = require('cors')


// require('dotenv').config()

app.use(express.json())


connectDB()

app.get('/', (req, res) =>
    res.send(`Hello running on ${PORT}. Testing auto deploy`)

)

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)

module.exports = app;