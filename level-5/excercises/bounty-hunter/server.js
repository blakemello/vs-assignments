const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const morgan = require('morgan')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

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