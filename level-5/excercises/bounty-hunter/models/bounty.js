const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Bounty BluePrint

const bountiesSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["sith", "jedi"],
        required: true
    },
    living: {
        type: Boolean
    },
    bountyAmount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountiesSchema)