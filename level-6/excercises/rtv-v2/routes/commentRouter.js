const express = require("express")
const commentRouter = express.Router()
const User = require('../models/user')
const Issue = require('../models/issue')
const jwt = require("jsonwebtoken")

// Post New Comment
commentRouter.post('/:issueId', async (req, res, next) => {
    try {
        req.body.userId = req.auth._id
        req.body.issue = req.params.issueId
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        return res.status(201).send(savedComment)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = commentRouter