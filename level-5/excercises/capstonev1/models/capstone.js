const mongoose = require('mongoose')
const Schema = mongoose.Schema

const capstoneSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Capstone", capstoneSchema)