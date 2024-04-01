import { useState, useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'



export default function DogFacts(props) {

    const {color, toggleTheme, toggleBackground} = useContext(ThemeContext)

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

    const navigate = useNavigate()

    const handleClick = (e) => {toggleTheme(); toggleBackground()}

    return(
        <div className={`${color}-dogfacts`}>
            <button onClick={handleClick}>Toggle Theme</button>
            <h1>
                Here's a Dog Fact!
            </h1>
            <img src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*' width={250}/>
            <br></br>
            {dogFact}
            <br></br>
            <button onClick={getDogFact}>Get New Dog Fact</button>
            <br></br>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
        </div>
    )
}