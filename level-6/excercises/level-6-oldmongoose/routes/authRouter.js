const express = require("express")
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// Signup

authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (user) {
            res.status(403)
            return next(new Error(`Username is already in use`))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser })
        })
    })
})

// Login

authRouter.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error('The Username or Password is incorrect'))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return next(new Error('The Username or Password is incorrect'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(201).send({ token, user })
    })
})




module.exports = authRouter