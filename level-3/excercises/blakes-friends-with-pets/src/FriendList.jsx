import { useState } from 'react'
import Friend from './Friend'
import Pet from './Pet'
import data from './data.jsx'
import './App.css'

export default function FriendList() {
    const friendlist = data.map(item => {
        return (
            <Friend 
            {...item}
            
            />
        )
    })
    return (
        <div className='firendslist'>
            {friendlist}
        </div>
    )
}