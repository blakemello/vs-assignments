const express = require("express")
const { v4: uuidv4 } = require('uuid')
const bountyRouter = express.Router()

const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 9001,
        type: "jedi",
        _id: uuidv4()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bountyAmount: 9001,
        type: "sith",
        _id: uuidv4()
    },
    {
        firstName: "Anakin",
        lastName: "Skywalker",
        living: false,
        bountyAmount: 9001,
        type: "jedi",
        _id: uuidv4()
    }
]

// Displays All data
bountyRouter.get("/", (req, res) => {
    res.status(200).send(bounties)
})

// Get By Type (Jedi or Sith) eg http://localhost:9001/bounties/type?type=(jedi or sith)
bountyRouter.get('/type', (req, res, next) => {
    const type = req.query.type
    if(!type){
        const error = new Error(`please input a valid type`)
        res.status(500)
        return next(error)
    }
    const filteredType = bounties.filter(bounties => bounties.type === type)
    res.status(200).send(filteredType)
})

// Get One Data Point
bountyRouter.get('/:bountyId', (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounties => bounties._id === bountyId)
    if(!foundBounty){
        const error = new Error(`Bounty id:${bountyId} was not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

// Adds New Data
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.status(201).send(newBounty)
})

// Updates A Single Data Object
bountyRouter.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.status(201).send(updatedBounty)
})

// Deletes A Single Data Object
bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounties => bounties._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty Eliminated, Good Hunting")
})



module.exports = bountyRouter