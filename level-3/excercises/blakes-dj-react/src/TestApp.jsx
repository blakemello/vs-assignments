 import { useState } from 'react'
 import TestBoxes from './TestBoxes'
 import TestBox from './TestBox'
 import './Test.css'

 export default function Test() {

     const [squares, setSquares] = useState(TestBoxes)
    

    
     function smallTimeClick(id) {
         setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.color === "white" ? {...square, color: "black"} : {...square, color: "white"}
            })
         })
     }
    
     function partyClick(id) {
         setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === 1 ? {...square, color: "purple"} : square
            })
         })
    }
    function partyClick2(id) {
         setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === 2 ? {...square, color: "purple"} : square
            })
         })
    }

    function partyClick3() {
        partyClick();
        partyClick2();
    }

    function bottomLeftClick(id) {
        setSquares(prevSquares => {
           return prevSquares.map((square) => {
               return square.id === 3 ? {...square, color: "blue"} : square
           })
        })
    }
   
    function bottomRightClick(id) {
        setSquares(prevSquares => {
           return prevSquares.map((square) => {
               return square.id === 4 ? {...square, color: "blue"} : square
           })
        })
    }
   
    function resetClick(id) {
        setSquares(prevSquares => {
           return prevSquares.map((square) => {
               return square.color === "white" ? square : {...square, color: "white"}
           })
        })
    }
   
    
         const squareElements = squares.map(square => (
             <TestBox 
                 key={square.id}
                 on={square.on}
                 color={square.color}
                 
             />
         ))

     return (
         <main>
             <div className='gridbox'>{squareElements}</div>
             <button onClick={smallTimeClick}>Small time DJ</button>
             <button onClick={partyClick3}>Party DJ</button>
             <br></br>
             <button onClick={bottomLeftClick}>Left DJ</button>
             <button onClick={bottomRightClick}>Right DJ</button>
             <br></br>
             <button onClick={resetClick}>Reset</button>             
         </main>
     )
 }
