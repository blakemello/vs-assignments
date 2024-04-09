const express = require("express")
const { v4: uuidv4 } = require('uuid')
const itemsRouter = express.Router()

const items = {
    toys: [
        {
            name: "buzz",
            price: 5
        },
        {
            name: "woody",
            price: 5
        }
    ],
    food: [
        {
            name: "beans",
            price: 3
        },
        {
            name: "toast",
            price: 2
        }
    ]
}


itemsRouter.get('/', (req, res) => {
    res.send(items)
})

module.exports = itemsRouter