import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  const [color, setColor] = useState("")

  //sets initial color when page is loaded
  useEffect(function() {
    //API request
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(data => setColor(data.new_color))

  },
  // empty array makes sure this function doesn't keep looping, if set to "color" it would loop infinitly
  [])

  // repeat of intial color setting as a seprate function so can be linked to a button
   const getColor = () => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(data => setColor(data.new_color))
   }


  // console.log(`Set Color: #${color}`)
  
  const newColor = `#${color}`
  
  console.log(`New Color: #${color}`)

  return (
    <div>
      <div>Current color is #{color}</div>
      <button style={{backgroundColor: `${newColor}`}} onClick={() => getColor()}>Change Color</button>
    </div>
  )
}
