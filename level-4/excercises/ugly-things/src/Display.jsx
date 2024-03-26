import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Display(props) {

    const {thing, listedThings, thingsList} = useContext(ThemeContext)

    return [
        <div>{thingsList}</div>
    ]

}