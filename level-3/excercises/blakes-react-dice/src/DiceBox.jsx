import { useState } from 'react'
import './App.css'

export default function DiceBox() {

  const [randomNumber, setRandomNumber] = useState([null, null, null, null, null])

  function newNumbers() { setRandomNumber(randomNumber.map([Math.floor(Math.random()*6+1)])) }

  function Test() {
    setRandomNumber(randomNumber => {
      return [[Math.floor(Math.random()*6+1)], [Math.floor(Math.random()*6+1)], [Math.floor(Math.random()*6+1)], [Math.floor(Math.random()*6+1)], [Math.floor(Math.random()*6+1)]]
    })
  }

  function Test2() {
    setRandomNumber(randomNumber => {
      return [randomNumber.map(6)]
    })
  }

  return (
    <div>
    <div>{randomNumber}</div>
    <div>
      <div>
        {setRandomNumber}
      </div>
    <button onClick={Test}>Re-roll</button>
    </div>
    </div>
  )
}
