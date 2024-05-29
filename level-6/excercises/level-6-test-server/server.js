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
    res.send("Test ToDo, Please Ignore")
})
app.use('/auth', require('./routes/authRouter.js'))
app.use("/todo", require('./routes/todoRouter.js'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9010, () => {
    console.log("The server is running on Port 9010, Hell yeah")
})
//test