const express = require("express")
const { v4: uuidv4 } = require('uuid')
const clothingRouter = express.Router()

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4(),
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4(),
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4(),
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4(),
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4(),
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4(),
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4(),
    }
]


clothingRouter.get('/', (req, res) => {
    const clothing = inventoryItems.filter(inventoryItems => inventoryItems.type === "clothing")
    res.send(clothing)
})

clothingRouter.get('/name', (req, res) => {
    const name = req.query.name
    const filteredClothing = inventoryItems.filter(inventoryItems => inventoryItems.name === name)
    res.send(filteredClothing)
})


module.exports = clothingRouter