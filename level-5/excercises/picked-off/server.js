const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())

app.use('/pickedData', require('./pickedData'))

 app.get('/pickedData', (req, res, next) => {
     res.send(req.body)
 })

app.listen(9005, () => {
    console.log("The server is running on Port 9005, lets go")
})