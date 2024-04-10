const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

app.get("/", (req, res) => {
    res.send("Todo baybee")
})


app.listen(9006, () => {
    console.log("The server is running on Port 9006, Hell yeah")
})

app.use(express.json())

app.use("/todo", require('./routes/todo.js'))