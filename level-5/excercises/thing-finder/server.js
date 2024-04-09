const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const foodRouter = express.Router()

// Data

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

app.get("/", (req, res) => {
    console.log(res)
    res.send(inventoryItems)
})


app.listen(9002, () => {
    console.log("The server is running on Port 9002, Fruit yeah")
})

app.use(express.json())

app.use('/food', require('./routes/food'))

app.use('/clothing', require('./routes/clothing'))

app.use('/toys', require('./routes/toys'))

app.get('/:value', (req, res) => {
    const maxValue = req.params.value
    const foundValue = inventoryItems.filter(value => value.price <= maxValue)
    res.send(foundValue)
})
// app.get('/food', (req, res) => {
//     const food = inventoryItems.filter(inventoryItems => inventoryItems.type === "food")
//     res.send(food)
// })

// app.get('/food/name', (req, res) => {
//     const name = req.query.name
//     const filteredFood = inventoryItems.filter(inventoryItems => inventoryItems.name === name)
//     res.send(filteredFood)
// })

// app.get('/clothing', (req, res) => {
//     const clothing = inventoryItems.filter(inventoryItems => inventoryItems.type === "clothing")
//     res.send(clothing)
// })

// app.get('/clothing/name', (req, res) => {
//     const name = req.query.name
//     const filteredClothing = inventoryItems.filter(inventoryItems => inventoryItems.name === name)
//     res.send(filteredClothing)
// })


// app.get('/toy', (req, res) => {
//     const toy = inventoryItems.filter(inventoryItems => inventoryItems.type === "toy")
//     res.send(toy)
// })

// app.get('/toy/name', (req, res) => {
//     const name = req.query.name
//     const filteredToy = inventoryItems.filter(inventoryItems => inventoryItems.name === name)
//     res.send(filteredToy)
// })

