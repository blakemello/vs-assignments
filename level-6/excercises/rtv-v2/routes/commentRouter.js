const express = require("express")
const commentRouter = express.Router()
const User = require('../models/user')
const Issue = require('../models/issue')
const Comment = require('../models/comment')

// Post New Comment
commentRouter.post('/:issueId', async (req, res, next) => {
    try {
        req.body.issue = req.params.issueId
        req.body.user = req.auth._id
        req.body.username = req.auth.username
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        return res.status(201).send(savedComment)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get Comments
commentRouter.get('/', async (req, res, next) => {
    try {
        const allComments = await Comment.find()
        return res.status(200).send(allComments)        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get one Issues Comments



module.exports = commentRouter