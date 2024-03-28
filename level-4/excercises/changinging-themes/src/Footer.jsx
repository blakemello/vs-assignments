import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Footer() {

    const {color } = useContext(ThemeContext)

    return(
        <div className={`${color}-Footer`}>
            <h1>Footer</h1>
        </div>
    )
}