const express = require("express")
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// Signup
authRouter.post('/signup', async (req, res, next) => {
    try {
        const savedUser = await User.findOne(
            { username: req.body.username.toLowerCase() }
        )
        const newUser = new User(req.body)
        newUser.save({

        })
        const token = jwt.sign(savedUser, process.env.SECRET)
        return res.status(201).send({ token, user: savedUser })        

    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// authRouter.post('/signup', (req, res, next) => {
//     User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         if (user) {
//             res.status(403)
//             return next(new Error(`Username is already in use`))
//         }
//         const newUser = new User(req.body)
//         newUser.save((err, savedUser) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
//             return res.status(201).send({ token, user: savedUser.withoutPassword() })
//         })
//     })
// })




module.exports = authRouter