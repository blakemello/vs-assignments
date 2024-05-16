const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo')

// Displays All data
todoRouter.get("/", async (req, res, next) => {
    try {
        const todos = await Todo.find()
        return res.status(200).send(todos)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get By Type 
todoRouter.get('/type', async (req, res, next) => {
    try {
        const filteredTodos = await Todo.find({type: req.query.type})
        return res.status(200).send(filteredTodos)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Better way to handle get by type eg http://localhost:9010/todo/(query)
// todoRouter.get('/:type', async (req, res, next) => {
//     try {
//         const filteredTodos = await Todo.find({type: req.params.type})
//         return res.status(200).send(filteredTodos)
//     } catch (err) {
//         res.status(500)
//         return next(err)
//     }
// })

// Get One Data Point
todoRouter.get('/:todoId', async (req, res, next) => {
    try {
        const foundTodos = await Todo.findById(req.params.todoId)
        return res.status(200).send(foundTodos)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Adds New Data
todoRouter.post('/', async (req, res, next) => {
    try {
        const newTodo = new Todo(req.body)
        const savedTodo = await newTodo.save()
        res.status(201).send(savedTodo)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Updates A Single Data Object
todoRouter.put('/:todoId', async (req, res, next) => {
    try {
        const updatedTodos = await Todo.findByIdAndUpdate(
            req.params.todoId,
            req.body,
            { new: true }
        )
        res.status(201).send(updatedTodos)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Deletes A Single Data Object
todoRouter.delete('/:todoId', async (req, res, next) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.todoId)
        return res.status(201).send(`You have deleted ${deletedTodo.title}`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = todoRouter