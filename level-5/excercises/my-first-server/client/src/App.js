import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie.js'
import AddMovieForm from './components/AddMovieForm.js';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

  function getMovies(){
    axios.get("/movies")
    .then(res => setMovies(res.data))
    .catch(err => console.log(err))
  }

  function addMovie(newMovie) {
    axios.post('/movies', newMovie)
      .then(res => {
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (
    <div>
      <div className='movie-container'>
        <h1>Movies Available:</h1>
        {movies.map(movie => <Movie {...movie} key={movie._id} />)}
        <h1>Add New Movie</h1>
        <AddMovieForm 
          addMovie={addMovie}
        />
      </div>
    </div>
  );
}

export default App;
