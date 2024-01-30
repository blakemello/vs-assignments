import { useState } from 'react'
import './App.css'

export default function DiceBox() {

  const [randomNumber, setRandomNumber] = useState([null, null, null, null, null])

  function newNumbers() { setRandomNumber(randomNumber.map(randomNumber => [Math.floor(Math.random()*6+1)])) }

  // function Test() {
  //   setRandomNumber(randomNumber => {
  //     return [[Math.floor(Math.random()*6+1)], [Math.floor(Math.random()*6+1)], [Math.floor(Math.random()*6+1)], [Math.floor(Math.random()*6+1)], [Math.floor(Math.random()*6+1)]]
  //   })
  // }

  // function Test2() {
  //   setRandomNumber.map(randomNumber => {
  //     return [[Math.floor(Math.random()*6+1)]]
  //   })
  // }

  return (
    <div>
      <div>
        <h1>React Dice Roll</h1>
      </div>
      <div>{randomNumber}</div>
      <div>
        <div>
          {setRandomNumber}
        </div>
        <div>
          <button onClick={newNumbers}>Re-roll</button>
        </div>
      </div>
    </div>
  )
}
