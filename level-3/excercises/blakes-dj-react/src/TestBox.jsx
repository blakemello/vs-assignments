 import { useState } from 'react'
 import TestBoxes from './TestBoxes'

 export default function TestBox(props) {

    console.log(props.on)

     const styles = {
         backgroundColor: props.on ? "#FF0000" : "#808080"
     }

     return (
         <div
         className='box'
         style={styles}
         >

         </div>
     )
 }