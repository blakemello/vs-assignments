const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())

app.get("/", (req, res) => {
    res.send("We learning middleware outchea")
})

app.use('/items', (req, res, next) => {
    console.log("the items middleware was executed")
    next()
})

app.use('/items', (req, res, next) => {
    req.body = { name: "Blake" }
    next()
})

app.use('/items', (req, res, next) => {
    console.log("get request recived")
    res.send(req.body)
})
// app.use('/items', require('./routes/items.js'))

app.listen(9004, () => {
    console.log("The server is running on Port 9004, lets go")
})