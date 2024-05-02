const express = require("express")
//const { v4: uuidv4 } = require('uuid')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

// const movies = [
//     {title: "die hard", genre: "action", _id: uuidv4()},
//     {title: "star wars IV", genre: "fantasy", _id: uuidv4()},
//     {title: "lion king", genre: "fantasy", _id: uuidv4()},
//     {title: "friday the 13th", genre: "horror", _id: uuidv4()},
    
// ]

// Get All

movieRouter.get("/", async (req, res, next) => {
    try {
        const allMovies = await Movie.find()
        return res.status(200).send(allMovies)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})
// movieRouter.get("/", (req, res, next) => {
//     //res.status(200).send(movies)
//     Movie.find((err, movies) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//     return res.status(200).send(movies)
//     })
// })

//Get One
// movieRouter.get('/:movieId', (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId)
//     if(!foundMovie){
//         const error = new Error(`The movie with id:${movieId} was not found`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundMovie)
// })

movieRouter.get("/:movieId", async (req, res, next) => {
    try {
        const foundMovies = await Movie.findById(req.params.movieId)
        return res.status(200).send(foundMovies)
    } catch (err) {
        res.status(500)
        return next(err)
    }
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
movieRouter.post('/', async (req, res, next) => {
    try {
        const newMovie = new Movie(req.body)
        const savedMovie = await newMovie.save()
        res.status(201).send(savedMovie)
    } catch (error) {
        res.status(500)
        return next(err)
    }
})

// movieRouter.post("/", (req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.status(201).send(newMovie)
// })

// Delete One
movieRouter.delete("/:movieId", async (req, res, next) => {
    try {
        const deleteMovies = await Movie.findByIdAndDelete(req.params.movieId)
        return res.status(201).send(`Deleted ${deleteMovies.title}`)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

// movieRouter.delete('/:movieId', (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     movies.splice(movieIndex, 1)
//     res.send("Movie deleted :(")
// })

// Update One

movieRouter.put("/:movieId", async (req, res, next) => {
    try {
        const updatedMovie = await  Movie.findByIdAndUpdate(
            req.params.movieId,
            req.body,
            {new: true}
        )
        return res.status(201).send(updatedMovie)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})


// movieRouter.put('/:movieId', (req, res) => {
//     const movieId = req.params.movieId
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     const updatedMovie = Object.assign(movies[movieIndex], req.body)
//     res.status(201).send(updatedMovie)
// })


module.exports = movieRouter