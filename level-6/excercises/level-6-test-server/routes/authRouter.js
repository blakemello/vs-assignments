const express = require("express")
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require("jsonwebtoken")


// Signup
authRouter.post('/signup', async (req, res, next) => {
    try {
        const checkUser = await User.findOne(
            { username: req.body.username.toLowerCase() }
        )
        if (checkUser) {
            res.status(403)
            return next(new Error (`username already exists`))
        }
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
        return res.status(201).send({ token, user: savedUser.toObject() })        

    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// Login
authRouter.post('/login', async (req, res, next) => {
    try {
        const checkedUser = await User.findOne({ username: req.body.username}
        )
        if (!checkedUser) {
            res.status(403)
            return next(new Error (`The Username or Password is incorrect`))
        }
        if(req.body.password !== checkedUser.password) {
            res.status(403)
            return next(new Error (`The Username or Password is incorrect`)) 
        }
        const token = jwt.sign(checkedUser.toObject(), process.env.SECRET)
        return res.status(201).send({ checkedUser, token })        

    } catch (err) {
        res.status(500)
        return next(err)
    }
})



module.exports = authRouter