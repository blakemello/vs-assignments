const express = require("express")
const Issue = require('../models/issue')
const issueRouter = express.Router()

// Post New Issue
issueRouter.post('/', async (req, res, next) => {
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id
        const newIssue = new Issue(req.body)
        const savedIssue = await newIssue.save()
        return res.status(201).send(savedIssue)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get Single User's Issues
issueRouter.get('/user', async (req, res, next) => {
    try {
        const foundIssue = await Issue.find({ userId: req.auth._id })
        return res.status(200).send(foundIssue)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Delete Single Issue (works)
issueRouter.delete('/:issueId', async (req, res, next) => {
    try {
        const deletedIssue = await Issue.findByIdAndDelete({
            _id: req.params.issueId,
            userId: req.auth._id
        })
        return res.status(200).send(`${deletedIssue.title} has been deleted`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Update Issue
issueRouter.put('/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            { _id: req.params.issueId, userId: req.auth._id },
            req.body,
            { new: true }
        )
        return res.status(201).send(updatedIssue)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get All Issues
issueRouter.get('/all', async (req, res, next) => {
    try {
        const allIssues = await Issue.find()
        return res.status(200).send(allIssues)        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


// Upvote/Downvote Routes
issueRouter.put('/upvotes/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: { upvotes: req.auth._id},
                $pull: { downvotes: req.auth._id }
            },
            { new: true }
        )
        return res.status(201).send(updatedIssue)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

issueRouter.put('/downvotes/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: { downvotes: req.auth._id},
                $pull: { upvotes: req.auth._id }
            },
            { new: true }
        )
        return res.status(201).send(updatedIssue)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})



module.exports = issueRouter