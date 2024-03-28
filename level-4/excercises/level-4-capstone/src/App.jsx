import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import AboutDetails from './components/AboutDetails'
import DogFacts from './components/DogFacts'
import CatFacts from './components/CatFacts'
import { ThemeContext, ThemeContextProvider } from './ThemeContext'

function App(props) {

  //const { toggleTheme } = useContext(ThemeContext)

  //console.log(Test)

  return (
    <ThemeContextProvider>
    <Router>
      <nav>
        <Link to="/" style={{padding: 5}}> 
          Home
        </Link>
        <Link to="/dogfacts" style={{padding: 5}}>
          Dog Facts
        </Link>
        <Link to="/catfacts" style={{padding: 5}}>
          Cat Facts
        </Link>
        <Link to="/about" style={{padding: 5}}>
          About
        </Link>
        <br></br>
        {/* <button>Change Theme</button> */}
      </nav>

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/dogfacts" element={<DogFacts />} />
        <Route path ="/catfacts" element={<CatFacts />} />
        <Route path ="/about" element={<About />} />
        <Route path='about/:aboutId' element={<AboutDetails />} />
      </Routes>

    </Router>
    </ThemeContextProvider>
  )
}

export default App
