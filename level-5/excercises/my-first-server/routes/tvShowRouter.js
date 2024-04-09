const express = require("express")
const { v4: uuidv4 } = require('uuid')
const tvShowRouter = express.Router()

const tvShows = [
    {title:"Rick and Morty", genre:"cartoon", _id: uuidv4()},
    {title:"Watchmen", genre:"liveaction", _id: uuidv4()},
    {title:"Westworld", genre:"liveaction", _id: uuidv4()},
    {title:"Friends", genre: "liveaction", _id: uuidv4()},
]

// Get All
tvShowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

//Get One
tvShowRouter.get('/:tvShowId', (req, res) => {
    const tvShowId = req.params.tvShowId
    const foundTvShow = tvShows.find(tvShows => tvShows._id === tvShowId)
    res.send(foundTvShow)
})

//Get By Genre
tvShowRouter.get('/search/genre', (req, res) => {
    const genre = req.query.genre
    const filteredTvShow = tvShows.filter(tvShows => tvShows.genre === genre)
    res.send(filteredTvShow)
})

// Post One
tvShowRouter.post("/", (req, res) => {
    const newTvShow = req.body
    newTvShow._id = uuidv4()
    tvShows.push(newTvShow)
    res.send(`${newTvShow.title} added, thank you for your submission :)`)
})

// Delete One
tvShowRouter.delete('/:tvShowId', (req, res) => {
    const tvShowId = req.params.tvShowId
    const tvShowIndex = tvShows.findIndex(tvShows => tvShows._id === tvShowId)
    tvShows.splice(tvShowIndex, 1)
    res.send("How could you do this.. TvShow deleted")
})

// Update One
tvShowRouter.delete('/:tvShowId', (req, res) => {
    const tvShowId = req.params.tvShowId
    const tvShowIndex = tvShows.findIndex(tvShows => tvShows._id === tvShowId)
    const updatedTvShow = Object.assign(tvShows[tvShowIndex], req.body)
    res.send(updatedTvShow)
})
module.exports = tvShowRouter