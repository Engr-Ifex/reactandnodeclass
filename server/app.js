const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')


const port = process.env.PORT
// middleware


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// coonnect to db
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}))


mongoose.connect(process.env.MONGODB_CONNECT)
.then(result => {
    console.log('Database Connected Successfully')
})
.catch(err => console.error(err))

const userSchema = mongoose.Schema({
   username: {
    type: String,
    required: true
   }, 
   email: {
    type: String,
    required: true
   },
   password: {
    type: String,
    required: true
   }
})

const userModel = mongoose.model('usermodel', userSchema)

// Routes 
// Register
// Username, email, password
app.post('/register', async (req, res) => {
    const {username, email, password} = req.body
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = userModel({
        username,
        email,
        password: hashPassword
    })
    newUser.save()
    res.status(201).json({message: 'User Created Successfully'})
})


// Login
// email , password
app.post('/login', async (req, res) => {
   try{
    const {email, password} = req.body
    const user = await userModel.findOne({email})
    // plain password -> password req.body
    const isPassword = await bcrypt.compare(password, user.password)
    if(!isPassword){
        res.json({message: 'Incorrect Password'})
    }
    if (!user){
        res.json({message: 'User not found!'})
    }
    const token = jwt.sign({user: user._id}, process.env.SECRET, {
        expiresIn: '1hr'
    })
    res.status(200).json({message : 'Login Successful', token})

   }
   catch(err){
      console.error(err)
   }
    

})


// http://localhost:5000/login
// http://localhost:5000/register