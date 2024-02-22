import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Test() {

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

  // repeat of intial color setting as s septrate function so can be linked to a button
   const getColor = () => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(data => setColor(data.new_color))
   }


  // console.log(`Set Color: #${color}`)
  
  //adds the hashtag for the hexcode background value
  const newColor = `#${color}`
  
  //double checking to make sure it's being set correctly
  console.log(`New Color: #${color}`)

  return (
    <div>
      <div>Current color is #{color}</div>
      <button style={{backgroundColor: `${newColor}`}} onClick={() => getColor()}>Change Color</button>
    </div>
  )
}
