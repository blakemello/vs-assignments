const mongoose = require('mongoose')
const Schema = mongoose.Schema

const capstoneSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
    },
    completed: {
        type: Boolean,
        required: true,
    },
})

module.exports = mongoose.model("Capstone", capstoneSchema)