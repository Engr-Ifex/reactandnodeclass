const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const connectToDB = require('./Database/database')
const router = require('./Routes/userRoutes')

//MVC -> MOdel -> DATABASE STRUTURE, Views -> EJS, STACTIC FILES, Controllers -> lOGIC

const port = process.env.PORT
// middleware

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// coonnect to db
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
connectToDB()


// http://localhost:5000/login
// http://localhost:5000/register