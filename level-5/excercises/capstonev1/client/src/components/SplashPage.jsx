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
            <h1>Hello World! Welcome to my Level 5 Captsone(it's another todo)</h1>
        <h1>
            This is a quick application you can use to store your notes in the cloud, expect design upgrades in the near future
        </h1>
        <h3 className='dog-header'>
            In the meantime here's a cute dog fact to start your day off right
        </h3>
        <img src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*' width={250}/>
        <br></br>
        <div className='dog-header'>
        {dogFact}
        </div>
        <br></br>
        <button onClick={getDogFact} className='dog-btn'>Get A New Dog Fact</button>
    </div>
    )
}