import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import List from './components/List'
import SplashPage from './components/SplashPage';
import About from './components/About'
import './App.css';
import { Context, ContextProvider } from './Context';

function App(props) {

  const { all, getAll, addItem, editItem, deleteItem } = useContext(Context)

  return (
    <Router>
      <nav>
        <Link to="/" style={{padding: 5}}>
          Home
        </Link>
        <Link to="/list" style={{padding: 5}}>
          List
        </Link>
        <Link to="/about" style={{padding: 5}}>
          About
        </Link>
      </nav>

      <Routes>
        <Route path ="/" element={<SplashPage />}/>
        <Route path ="/list" element={<List />} />
        <Route path ="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
