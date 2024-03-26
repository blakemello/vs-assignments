import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import DogFacts from './components/DogFacts'
import CatFacts from './components/CatFacts'
import { ThemeContextProvider } from './ThemeContext'

function App() {

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
      </nav>

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/dogfacts" element={<DogFacts />} />
        <Route path ="/catfacts" element={<CatFacts />} />
        <Route path ="/about" element={<About />} />
      </Routes>

    </Router>
    </ThemeContextProvider>
  )
}

export default App
