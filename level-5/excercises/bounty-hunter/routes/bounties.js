const express = require("express")
const { v4: uuidv4 } = require('uuid')
const bountyRouter = express.Router()

const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 9001,
        type: "Jedi",
        _id: uuidv4()
    }
]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Thank you for submitting ${newBounty.lastName}, ${newBounty.firstName} - Price: $${newBounty.bountyAmount} to our system`)
})

module.exports = bountyRouter