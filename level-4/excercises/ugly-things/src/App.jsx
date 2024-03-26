import { useState } from 'react'
import './App.css'
import Form from './Form'
import List from './List'
import Display from './Display'
import {ThemeContextProvider} from './ThemeContext'

function App() {

  return (
    <div>
      <ThemeContextProvider>
        <Form />
        <List />
        <Display />
      </ThemeContextProvider>
    </div>
  )
}

export default App
