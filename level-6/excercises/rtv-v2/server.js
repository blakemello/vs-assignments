const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require("express-jwt")



//gets env to work
process.env.SECRET

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to Database
async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log('Connected to DataBase')
    } catch (err) {
        console.log(err)
    }
}

connectToDb()

//Routes
app.get("/", (req, res) => {
    res.send("Test RTV, Please Ignore")
})
app.use('/api/auth', require('./routes/authRouter.js'))
app.use('/api/main', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/main/issues', require('./routes/issueRouter.js'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


app.listen(process.env.PORT, () => {
    console.log(`The server is running on Port ${process.env.PORT}, Hell yeah`)
}) 