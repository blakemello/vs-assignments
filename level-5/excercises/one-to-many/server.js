const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to Database
mongoose.connect('mongodb+srv://blakemello94:ForCluster23!!@cluster0.u0ghhl3.mongodb.net/one-to-manydb?retryWrites=true&w=majority&appName=Cluster0', {})

//Routes
app.get('/', (req, res) => {
    res.send("Test one-to-many Please Ignore")
})
app.use('/authors', require('./routes/authorRouter.js'))
app.use('/books', require('./routes/bookRouter.js'))

//Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Make sure the server is up
app.listen(9008, () => {
    console.log("The server is running on Port 9008, the needs of the many updated by the will of the one")
})