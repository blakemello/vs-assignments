 import { useState } from 'react'
 import TestBoxes from './TestBoxes'
 import TestBox from './TestBox'
 import './Test.css'

 export default function Test() {

     const [squares, setSquares] = useState(TestBoxes)
    

    
     function handleCLick(id) {
         alert("broken")
     }
    
    
         const squareElements = squares.map(square => (
             <TestBox 
                 handleCLick={() => handleCLick(square.id)}
             />
         ))

     return (
         <main>
             <div>{squareElements}</div>
             <button onClick={handleCLick}>Test</button>
         </main>
     )
 }
