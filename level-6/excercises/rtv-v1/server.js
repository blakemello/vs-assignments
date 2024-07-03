const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt: jwt } = require("express-jwt")

//gets env to work
process.env.SECRET

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// COnnect to Database
mongoose.set('strictQuery', true);
mongoose.connect(
  process.env.MONGO_URI,
  (err) => console.log('Connected to the DB', err)
)

// Routes
app.get('/', (req, res) => {
  res.send("I'm not somewhat good at this")
})
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/issue', require('./routes/issueRouter.js'))

//Error handler
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })

  // Server start
app.listen(9012, () => {
    console.log(`The server is running on Port 9012, Lets get it started`)
  })