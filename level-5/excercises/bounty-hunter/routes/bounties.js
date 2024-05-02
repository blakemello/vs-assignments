const express = require("express")
//const { v4: uuidv4 } = require('uuid')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

// const bounties = [
//     {
//         firstName: "Luke",
//         lastName: "Skywalker",
//         living: true,
//         bountyAmount: 9001,
//         type: "jedi",
//         _id: uuidv4()
//     },
//     {
//         firstName: "Darth",
//         lastName: "Vader",
//         living: true,
//         bountyAmount: 9001,
//         type: "sith",
//         _id: uuidv4()
//     },
//     {
//         firstName: "Anakin",
//         lastName: "Skywalker",
//         living: false,
//         bountyAmount: 9001,
//         type: "jedi",
//         _id: uuidv4()
//     }
// ]

// Displays All data
bountyRouter.get("/", async (req, res, next) => {
    try {
        const bounties = await Bounty.find()
        return res.status(200).send(bounties)
    } catch (err) {
        res.status(500)
        return next(err)
    }
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
bountyRouter.get('/:bountyId', async (req, res, next) => {
    try {
        const foundBounties = await Bounty.findById(req.params.bountyId)
        return res.status(200).send(foundBounties)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// Adds New Data
bountyRouter.post('/', async (req, res, next) => {
    try {
        const newBounty = new Bounty(req.body)
        const savedBounty = await newBounty.save()
        res.status(201).send(savedBounty)
    } catch (error) {
        res.status(500)
        return next(err)
    }
})

// Updates A Single Data Object
bountyRouter.put('/:bountyId', async (req, res, next) => {
    try {
        const updatedBounty = await Bounty.findByIdAndUpdate(
            req.params.bountyId,
            req.body,
            { new: true }
        )
        res.status(201).send(updatedBounty)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Deletes A Single Data Object
bountyRouter.delete('/:bountyId', async (req, res, next) => {
    try {
        const deletedBounties = await Bounty.findByIdAndDelete(req.params.bountyId)
        return res.status(201).send(`You have elminated ${deletedBounties.firstName}, good hunting`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})



module.exports = bountyRouter

// {
//     "firstName": "Mace",
//     "lastName": "Windu",
//     "type": "jedi",
//     "living": false,
//     "bountyAmount": 9001
// }