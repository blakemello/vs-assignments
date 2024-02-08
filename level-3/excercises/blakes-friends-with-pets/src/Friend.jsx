import { useState } from 'react'
import FriendList from './FriendList'
import Pet from './Pet'
import data from './data.jsx'
import './App.css'

export default function Friend (props) {
    console.log('inside friend comp, props:', props)
    const Test = props.pets.map(item => {
        return (
            <Pet 
            {...item}
            />
        )
    })

    return (
        <div className='friends'>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2 className='Pets'>Pets</h2>
            {Test}
        </div>
    )
}