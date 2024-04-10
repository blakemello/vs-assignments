// Step 1) npm init -y

// Step 2) npm install express



// First Express server

const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid')
const morgan = require('morgan')

// Middleware - a function that fires on the inbetween
app.use(express.json()) // Looks for a request body, and turns it into a 'req.body'
app.use(morgan('dev'))

//console.log(uuidv4())

// server variable 


    // 1) Endpoint (mount path)
    // 2) Callback function
app.get("/", (req, res) => {
    res.send("Test post, please ignore")
})

const users = [
    {
        name: "Blake",
        age: 29
    },
    {
        name: "Sarah",
        age: 25
    },
    {
        name: "Mom",
        age: 53
    },
    {
        name: "Blaire",
        age: 24
    
    }
]

app.get("/users", (req, res) => {
    res.send(users)
})



// tell the server to always be listening
    // 1. Port
    // 2. Callback function
app.listen(9000, () => {
    console.log("The server is running on Port 9000, Hell yeah")
})

// Step 3) node server.js

//Stop servers with control C

//  Request lesson

// fake data
// const movies = [
//     { title: "die hard", genre: "action", _id: uuidv4() },
//     { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
//     { title: "lion king", genre: "fantasy" },
//     { title: "friday the 13th", genre: "horror", _id: uuidv4() }
// ]

// const tvShows = [
//     {title:"Rick and Morty", _id: uuidv4()},
//     {title:"Watchmen", _id: uuidv4()},
//     {title:"Westworld", _id: uuidv4()},
//     {title:"Friends", _id: uuidv4()},
// ]

// Routes //
// app.get("/movies", (req, res) => {
//     res.send(movies)
// })

// app.get("/tvshows", (req, res) => {
//     res.send(tvShows)
// })


app.use("/movies", require('./routes/movieRouter.js'))

app.use("/tvshows", require('./routes/tvShowRouter.js'))

// app.post("/movies", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`${newMovie.title} added, thank you for your submission :)`)
// })

// app.post("/tvshows", (req, res) => {
//     const newTvShow = req.body
//     newTvShow._id = uuidv4()
//     tvShows.push(newTvShow)
//     res.send(`${newTvShow.title} added, thank you for your submission :)`)
// })

// Express router lesson

