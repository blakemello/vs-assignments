import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import Meme from "./components/Meme"
import Test from "./components/Test"
import './App.css'

export default function App() {
  return (
      <div>
          <Header />
          <Meme />
      </div>
  )
}