const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to Database
mongoose.connect('mongodb+srv://blakemello94:ForCluster23!!@cluster0.u0ghhl3.mongodb.net/bountiesdb?retryWrites=true&w=majority&appName=Cluster0', {})

//Routes
app.get("/", (req, res) => {
    res.send("We hunting bounties")
})
app.use("/bounties", require('./routes/bounties.js'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9001, () => {
    console.log("The server is running on Port 9001, Hell yeah")
})