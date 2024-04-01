import { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'


export default function Home(props) {

    const { color, toggleTheme, toggleBackground } = useContext(ThemeContext)

    const handleClick = (e) => {toggleTheme(); toggleBackground()}

    return(
        <div className={`${color}-home`}>
            <button onClick={handleClick}>Toggle Theme</button>
            <h1>
                Welcome to Pet Facts!
            </h1>
            <p>
                Feel free to look around and discover a new random dog or cat fact today!
            </p>
            <br></br>
            <img src='https://www.readersdigest.com.au/wp-content/uploads/2021/02/05-puppy-and-kitten-GettyImages-71919537.jpg' width={250} />
        </div>
    )
}