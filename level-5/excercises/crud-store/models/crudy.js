const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crudySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Crudy", crudySchema)