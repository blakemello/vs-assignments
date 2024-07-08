const express = require("express")
const Post = require('../models/post')
const postRouter = express.Router()

// Post New Post
postRouter.post('/', async (req, res, next) => {
    try {
        req.body.userId = req.auth._id
        const newPost = new Post(req.body)
        const savedPost = await newPost.save()
        return res.status(201).send(savedPost)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get Single User's Posts
postRouter.get('/user', async (req, res, next) => {
    try {
        const foundPost = await Post.find({ userId: req.auth._id })
        return res.status(200).send(foundPost)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Delete Single Post
postRouter.delete('/:postId', async (req, res, next) => {
    try {
        const deletedPost = await Post.findByIdAndDelete({
            _id: req.params.postId,
            userId: req.auth._id
        })
        return res.status(200).send(`${deletedPost.title} has been deleted`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Update Post
postRouter.put('/:postId', async (req, res, next) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            { _id: req.params.postId, userId: req.auth._id },
            req.body,
            { new: true }
        )
        return res.status(201).send(updatedPost)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Get All Posts
postRouter.get('/all', async (req, res, next) => {
    try {
        const allPosts = await Post.find()
        return res.status(200).send(allPosts)        
    } catch (err) {
        res.status(500)
        return next(err)
    }
})



module.exports = postRouter