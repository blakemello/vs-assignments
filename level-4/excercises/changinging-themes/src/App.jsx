import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import {ThemeContextProvider} from './ThemeContext'

function App() {
  

  return (
    <div>
      <ThemeContextProvider>
        <Header />
        <Body />
        <Footer />
      </ThemeContextProvider>
    </div>
  )
}

export default App
