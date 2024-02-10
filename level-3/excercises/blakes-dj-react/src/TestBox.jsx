 import { useState } from 'react'
 import TestBoxes from './TestBoxes'

 export default function TestBox(props) {


     const styles = {
         backgroundColor: props.color
     }

     return (
         <div
         className='box'
         style={styles}
         >

         </div>
     )
 }