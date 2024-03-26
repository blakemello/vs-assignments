import { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'


export default function About(props) {
    
    const {color, toggleTheme, handleTheme} = useContext(ThemeContext)

    return(
        <div>
            Test: About
        </div>
    )
}