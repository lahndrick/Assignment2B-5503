const express = require('express')
const app = express()
const connectDB = require('./connectMongo')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser');
// const { hashPassword } = require('./utils');
const User = require('./Models/userSchema');

// require('dotenv').config()

app.use(express.json())
app.use(cors())

connectDB()

app.get('/', (req, res) =>
    res.send(`Hello running on ${PORT}.`)
)



app.post('/createAccount', async (req, res) => {
    const { username, email, password } = req.body
 
    //create new user
    const newUser = new User({
        username,
        email,
        password,
        // password: hashPassword(password)
    })
    try {
        newUser.save()
        res.status(201).json({message: 'Account created succesfully'});
    } catch (error) {
        res.status(409).json({ message: 'Account creation failed' });

    }

})


app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)

module.exports = app;