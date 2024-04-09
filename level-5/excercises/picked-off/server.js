const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())

app.get("/", (req, res) => {
    res.send("AND HE'S PICKED OFF")
})

app.listen(9005, () => {
    console.log("The server is running on Port 9005, lets go")
})