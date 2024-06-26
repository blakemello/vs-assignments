const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Connect to Database
async function connectToDb() {
    try {
       await mongoose.connect('mongodb+srv://blakemello94:ForCluster23!!@cluster0.u0ghhl3.mongodb.net/capstonedb?retryWrites=true&w=majority&appName=Cluster0')
       console.log('Connected to DB') 
    } catch (err) {
        console.log(err)
    }
}

connectToDb()

//Routes
app.get("/", (req, res) => {
    res.send("Test Capstone, Please Ignore")
})
app.use("/capstone", require('./routes/capstoneRouter.js'))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9009, () => {
    console.log("The server is running on Port 9009, Hell yeah")
})