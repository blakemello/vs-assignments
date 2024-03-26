import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails'


function App() {

  return (
    <Router>
      <nav>
        <Link to="/" style={{padding: 5}}> 
          Home
        </Link>
        <Link to="/about" style={{padding: 5}}>
          About
        </Link>
        <Link to="/services" style={{padding: 5}}>
          Services
        </Link>
      </nav>

      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/services" element={<Services />} />
        <Route path ="/services/:serviceId" element={<ServiceDetails />} />
      </Routes>

    </Router>
  )
}

export default App
