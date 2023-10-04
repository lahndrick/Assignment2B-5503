const express = require('express')
const app = express()
const connectDB = require('./connectMongo')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser');
const articlesRouter = require('./api/article')
const User = require('./Models/userSchema');
const bcrypt = require('bcryptjs');

// require('dotenv').config()


//middleware
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

connectDB()

//api routes
app.get('/', (req, res) =>
    res.send(`Hello running on ${PORT}.`)
)
app.use('/article', articlesRouter)



app.post('/createAccount', async (req, res) => {
    const { username, email, password } = req.body
 
    //create new user
    const newUser = new User({
        username,
        email,
        password: await bcrypt.hash(password, 10)
    })
    try {
        newUser.save()
        res.status(201).json({message: 'Account created succesfully'});
    } catch (error) {
        res.status(409).json({ message: 'Account creation failed' });
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });


        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Authentication successful
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`)
)

module.exports = app;