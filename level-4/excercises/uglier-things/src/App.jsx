import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Display from './Display'
import {ThemeContextProvider} from './ThemeContext'

function App() {


  return (
    <div>
      <ThemeContextProvider>
        <Form />
        <Display />
      </ThemeContextProvider>
    </div>
  )
}

export default App
