const express = require("express")
const { v4: uuidv4 } = require('uuid')
const pickedDataRouter = express.Router()

const pickedData = {
    description: "HE COULD GO ALL. THE. WAYYYYY"
}

pickedDataRouter.get('/', (req, res, next) => {
    req.body = pickedData
    next()
})

module.exports = pickedDataRouter