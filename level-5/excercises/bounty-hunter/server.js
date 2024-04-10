const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))
app.use("/bounties", require('./routes/bounties.js'))


app.get("/", (req, res) => {
    res.send("We hunting bounties")
})


app.listen(9001, () => {
    console.log("The server is running on Port 9001, Hell yeah")
})