const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author')

//Get all authors
authorRouter.get('/',  async (req, res, next) => {
    try {
        const authors = await Author.find()
        return res.status(200).send(authors)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//Add new author
authorRouter.post('/', async (req, res, next) => {
    try {
        const newAuthor = new Author(req.body)
        const savedAuthor = await newAuthor.save()
        res.status(201).send(savedAuthor)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


module.exports = authorRouter