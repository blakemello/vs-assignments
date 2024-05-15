import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Context, ContextProvider } from '../Context';

export default function SplashPage(props) {

    const [dogFact, setDogFact] = useState('')

    useEffect(function() {
        fetch(`https://dogapi.dog/api/facts/`)
        .then(res => res.json())
        .then(data => setDogFact(data.facts))
    }, [])

    const getDogFact = () => {
        fetch(`https://dogapi.dog/api/facts/`)
            .then(res => res.json())
            .then(data => setDogFact(data.facts))
    }

    return(
        <div className='splash-page'>
            <h1>Hello World!</h1>
        <h1>
            Here's a Dog Fact!
        </h1>
        <img src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*' width={250}/>
        <br></br>
        {dogFact}
        <br></br>
        <button onClick={getDogFact} className='dog-btn'>Get A New Dog Fact</button>
    </div>
    )
}