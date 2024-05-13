const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book')

//Get all books
bookRouter.get('/',  async (req, res, next) => {
    try {
        const books = await Book.find()
        return res.status(200).send(books)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Get by Query
// bookRouter.get('/author', async (req, res, next) =>{
//     try {
//         const filteredBooks = await Book.find({author: req.query.author})
//         return res.status(200).send(filteredBooks)
//     } catch (err) {
//         res.status(500)
//         return next(err)
//     }
// })

bookRouter.get('/:author', async (req, res, next) =>{
    try {
        const filteredBooks = await Book.find({author: req.params.author})
        return res.status(200).send(filteredBooks)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Add new book
bookRouter.post('/:authorID', async (req, res, next) => {
    try {
        req.body.author = req.params.authorID
        const newBook = new Book(req.body)
        const savedBook = await newBook.save()
        res.status(201).send(savedBook)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = bookRouter