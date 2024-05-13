const express = require('express')
const capstoneRouter = express.Router()
const Capstone = require('../models/capstone')

// Get All
capstoneRouter.get('/', async (req, res, next) => {
    try {
        const capstones = await Capstone.find()
        return res.status(200).send(capstones)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get One
capstoneRouter.get('/:capstoneId', async (req, res, next) => {
    try {
        const capstones = await Capstone.findById(req.params.capstoneId)
        return res.status(200).send(capstones)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Add Item
capstoneRouter.post('/', async (req, res, next) => {
    try {
        const newCapstone = new Capstone(req.body)
        const savedCapstone = await newCapstone.save()
        return res.status(200).send(savedCapstone)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Update Item
capstoneRouter.put('/:capstoneId', async (req, res, next) => {
    try {
        const updatedCapstone = await Capstone.findByIdAndUpdate(
            req.params.capstoneId,
            req.body,
            { new: true }
        )
        return res.status(200).send(updatedCapstone)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Delete Item
capstoneRouter.delete('/:capstoneId', async (req, res, next) => {
    try {
        const deletedCapstone = await Capstone.findByIdAndDelete(req.params.capstoneId)
        return res.status(201).send(`${deletedCapstone.title} has been deleted`)
    } catch (err) {
        res.status(500)
        return next(err) 
    }
})

module.exports = capstoneRouter