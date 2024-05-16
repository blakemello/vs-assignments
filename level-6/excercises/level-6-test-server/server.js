const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to Database
mongoose.connect('mongodb+srv://blakemello94:ForCluster23!!@cluster0.u0ghhl3.mongodb.net/test-serverdb?retryWrites=true&w=majority&appName=Cluster0', {})

//Routes
app.get("/", (req, res) => {
    res.send("Test ToDo, Please Ignore")
})
app.use("/todo", require('./routes/todoRouter.js'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9010, () => {
    console.log("The server is running on Port 9010, Hell yeah")
})