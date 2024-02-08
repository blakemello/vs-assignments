import { useState } from 'react'
import FriendList from './FriendList'
import data from './data.jsx'
import Friend from './Friend.jsx'
import './App.css'

export default function Pet(props) {
    console.log('inside pet comp, props', props)
    return (
        <div className='pet--list'>
            <h4>Pet Name: {props.name}</h4>
            <h4>Pet Breed: {props.breed}</h4>
        </div>
    )
}