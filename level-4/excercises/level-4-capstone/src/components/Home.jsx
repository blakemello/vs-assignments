import { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'


export default function Home(props) {

    const { color, toggleTheme } = useContext(ThemeContext)

    return(
        <div className={`${color}-home`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>
                Welcome to Pet Facts!
            </h1>
            <p>
                Feel free to look around and dicover a new random dog or cat fact today!
            </p>
        </div>
    )
}