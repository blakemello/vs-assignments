const express = require("express")
const commentRouter = express.Router()
const User = require('../models/user')
const Issue = require('../models/issue')
const Comment = require('../models/comment')

// Post New Comment
commentRouter.post('/comment/:issueId', async (req, res, next) => {
    try {
        req.body.issue = req.params.issueId
        req.body.user = req.auth._id
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        return res.status(201).send(savedComment)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

module.exports = commentRouter