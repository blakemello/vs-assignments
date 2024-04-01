import { useState, useContext } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'
import aboutData from './AboutData'


export default function About(props) {
    
    const {color, toggleTheme, toggleBackground} = useContext(ThemeContext)

    const abouts = aboutData.map(about => (
        <h3 key={about._id}>
            <Link to={`/about/${about._id}`}>
                {about.name}
            </Link>
        </h3>
    ))

    const navigate = useNavigate()

    const handleClick = (e) => {toggleTheme(); toggleBackground()}

    return(
        <div className={`${color}-about`}>
            <button onClick={handleClick}>Toggle Theme</button>
            <h1>
                About Us!
            </h1>
            {abouts}
            <br></br>
            {/* <button onClick={() => navigate(-1)}>Back</button> */}
        </div>
    )
}