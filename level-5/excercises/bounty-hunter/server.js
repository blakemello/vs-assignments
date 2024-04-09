const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

app.get("/", (req, res) => {
    res.send("We hunting bounties")
})


app.listen(9001, () => {
    console.log("The server is running on Port 9001, Hell yeah")
})

app.use(express.json())

app.use("/bounties", require('./routes/bounties.js'))