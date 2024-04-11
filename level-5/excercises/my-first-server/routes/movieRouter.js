const express = require("express")
const { v4: uuidv4 } = require('uuid')
const movieRouter = express.Router()

const movies = [
    {title: "die hard", genre: "action", _id: uuidv4()},
    {title: "star wars IV", genre: "fantasy", _id: uuidv4()},
    {title: "lion king", genre: "fantasy", _id: uuidv4()},
    {title: "friday the 13th", genre: "horror", _id: uuidv4()},
    
]

// Get All
movieRouter.get("/", (req, res) => {
    res.status(200).send(movies)
})

//Get One
movieRouter.get('/:movieId', (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`The movie with id:${movieId} was not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundMovie)
})

//Get By Genre
movieRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if(!genre){
        const error = new Error(`please select a valid genre`)
        res.status(500)
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.status(200).send(filteredMovies)
})

//Post One
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.status(201).send(newMovie)
})

// Delete One
movieRouter.delete('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Movie deleted :(")
})

// Update One
movieRouter.put('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.status(201).send(updatedMovie)
})


module.exports = movieRouter