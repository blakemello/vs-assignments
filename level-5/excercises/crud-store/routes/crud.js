const express = require('express')
const crudRouter = express.Router()
const Crud = require('../models/crudy')

//Displays All data
crudRouter.get('/',  async (req, res, next) => {
    try {
        const crud = await Crud.find()
        return res.status(200).send(crud)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Get data by [sorted method] eg http://localhost:9007/crud/type?type=(whatever)
crudRouter.get('/type', async (req, res, next) => {
    try {
        const filteredCrud = await Crud.find({type: req.query.type})
        res.status(200).send(filteredCrud)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get one by Id
crudRouter.get('/:crudId', async (req, res, next) => {
    try {
        const foundCrud = await Crud.findById(req.params.crudId)
        res.status(200).send(foundCrud)        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Adds new Data
crudRouter.post('/', async (req, res, next) => {
    try {
        const newCrud = new Crud(req.body)
        const savedCrud = await newCrud.save()
        res.status(202).send(savedCrud)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Updates Data
crudRouter.put('/:crudId', async (req, res, next) => {
    try {
        const updatedCrud = await Crud.findByIdAndUpdate(
            req.params.crudId,
            req.body,
            { new: true }
        )
        res.status(201).send(updatedCrud)        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Deletes a single Data point 
crudRouter.delete('/:crudId', async (req, res, next) => {
    try {
        const deletedCrud = await Crud.findByIdAndDelete(req.params.crudId)
        res.status(201).send(`Succesfully Deleted ${deletedCrud.title}`)        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


module.exports = crudRouter