const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bounty')

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
bountyRouter.get('/type', async (req, res, next) => {
    try {
        const filteredBounties = await Bounty.find({type: req.query.type})
        return res.status(200).send(filteredBounties)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Better way to handle get by type eg http://localhost:9001/bounties/(jedi or sith)
bountyRouter.get('/:type', async (req, res, next) => {
    try {
        const filteredBounties = await Bounty.find({type: req.params.type})
        return res.status(200).send(filteredBounties)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get One Data Point
bountyRouter.get('/:bountyId', async (req, res, next) => {
    try {
        const foundBounties = await Bounty.findById(req.params.bountyId)
        return res.status(200).send(foundBounties)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Adds New Data
bountyRouter.post('/', async (req, res, next) => {
    try {
        const newBounty = new Bounty(req.body)
        const savedBounty = await newBounty.save()
        res.status(201).send(savedBounty)
    } catch (err) {
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
    } catch (err) {
        res.status(500)
        return next(err)
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