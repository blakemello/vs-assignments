import { useState, useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'


export default function CatFacts(props) {

    const { color, toggleTheme, toggleBackground } = useContext(ThemeContext)

    const [catFact, setCatFact] = useState('')

    //const [catFact2, setCatFact2] = useState([])

    useEffect(function() {
        fetch(`https://catfact.ninja/fact?max_length=140`)
        .then(res => res.json())
        .then(data => setCatFact(data.fact))
    }, [])

    const getCatFact = () => {
        fetch(`https://catfact.ninja/fact?max_length=140`)
            .then(res => res.json())
            .then(data => setCatFact(data.fact))
    }

    const navigate = useNavigate()

    const handleClick = (e) => {toggleTheme(); toggleBackground()}
    
    // useEffect(function() {
    //     fetch(`https://cat-fact.herokuapp.com/facts/`)
    //     .then(res => res.json())
    //     .then(data => setCatFact2(data))
    // }, [])

    // console.log(catFact2.map(a => a.text))

    // function getRandomInt() {
    //     return Math.floor(Math.random() * 5);
    //   }

    // const catFactTest = catFact2[getRandomInt()].text

    return(
        <div className={`${color}-catfacts`}>
            <button onClick={handleClick}>Toggle Theme</button>
            <h1>
                Here's a Cat Fact!
            </h1>
            <img src='https://t4.ftcdn.net/jpg/03/03/62/45/360_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg' width={250} />
            <br></br>
            {catFact}
            <br></br>
            {/* {catFactTest} */}
            <br></br>
            <button onClick={getCatFact}>Get New Cat Fact</button>
            <br></br>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
        </div>
    )
}