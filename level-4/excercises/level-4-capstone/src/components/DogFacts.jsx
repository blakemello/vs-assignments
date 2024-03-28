import { useState, useEffect, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'



export default function DogFacts(props) {

    const {color, toggleTheme, handleTheme} = useContext(ThemeContext)

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

    return(
        <div className={`${color}-dogfacts`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>
                Here's a Dog Fact!
            </h1>
            {dogFact}
            <br></br>
            <button onClick={getDogFact}>Get New Dog Fact</button>
            <br></br>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}