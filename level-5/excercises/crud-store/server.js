const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to Database
mongoose.connect('mongodb+srv://blakemello94:ForCluster23!!@cluster0.u0ghhl3.mongodb.net/cruddb?retryWrites=true&w=majority&appName=Cluster0', {})

//Routes
app.get('/', (req, res) => {
    res.send("Test Crud Please Ignore")
})
app.use("/crud", require('./routes/crud.js'))

//Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Make sure the server is up
app.listen(9007, () => {
    console.log("The server is running on Port 9007, CRUD yeah")
})