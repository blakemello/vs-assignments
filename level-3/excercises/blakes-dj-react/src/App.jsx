import { useState } from 'react'
import Boxes from './Boxes'
import './App.css'

export default function App() {

  const [colors, setColors] = useState(["white", "white", "white", "white"])

  function changecolor() {
    
  }

  return (
    <div>
      <div className='squares'>
        <div><square color={colors[0]} /></div>
        <div><square color={colors[1]} /></div>
        <div><square color={colors[2]} /></div>
        <div><square color={colors[3]} /></div>
      </div>
      <div>
        <button onClick={changecolor}>Test</button>
      </div>
    </div>
  )
}