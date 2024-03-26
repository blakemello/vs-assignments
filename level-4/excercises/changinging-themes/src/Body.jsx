import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Body(props) {

    const {color, toggleTheme, handleTheme} = useContext(ThemeContext)

    console.log(color)

    const options = [
        {label: "Default"},
        {label: "Light"},
        {label: "Dark"}
    ]

    return(
        <div className={`${color}-Body`}>
            <h1>You are now using {color} Theme</h1>
            <button onClick={toggleTheme}>Change Theme</button>
            <br></br>
            <label htmlFor=''>Choose Theme:
            <select id='themes' onChange={handleTheme}>
                {options.map(option => (<option>{option.label}</option>))}
            </select>
            </label>
        </div>
        
    )
}