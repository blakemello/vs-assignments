import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Footer() {

    const {color, toggleTheme} = useContext(ThemeContext)

    return(
        <div className={`${color}-Footer`}>
            <h1>Footer</h1>
        </div>
    )
}