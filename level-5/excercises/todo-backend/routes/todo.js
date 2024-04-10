const express = require("express")
const { v4: uuidv4 } = require('uuid')
const todoRouter = express.Router()

const todos = [
    {
        name: "Beans",
        description: "thinking bout em",
        imageUrl: "https://i.kym-cdn.com/entries/icons/facebook/000/019/104/6bf.jpg",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Beansv2",
        description: "can't stop thinking bout em",
        imageUrl: "https://i.kym-cdn.com/entries/icons/facebook/000/019/104/6bf.jpg",
        completed: false,
        _id: uuidv4()
    }
]

// Displays All data
todoRouter.get("/", (req, res) => {
    console.log("test")
    res.send(todos)
})

// Get By Type (completion) http://localhost:9006/todo/completed?completed=false
// being sent as a string instead of a boolean, needs parsing
// todoRouter.get("/completed", (req, res) => {
//     const completed = req.query.completed
//     console.log(completed)
//     const filteredCompleted = todos.filter(todos => todos.completed === completed)
//     res.send(filteredCompleted)
// })



todoRouter.get('/test', (req, res) => {
    console.log("is this working")
})

// Get One Data Point
todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todos => todos._id === todoId)
    res.send(foundTodo)
})

todoRouter.get("/tr", (req, res) => {
    res.send(todos)
})

// Adds New Data
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Thank you for submitting ${newTodo.name} to the ToDo list`)
})


// Updates A Single Data Object
todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todos => todos._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

// Deletes A Single Data Object
todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todos => todos._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Item Deleted")
})



module.exports = todoRouter