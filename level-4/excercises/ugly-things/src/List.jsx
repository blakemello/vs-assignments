import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function List(props) {

    const {thing, listedThings, thingsList} = useContext(ThemeContext)


    return [
        <main>
            <div>
                {/* {listedThings.map(a => (
                `<h2>${a.title}</h2>`
            ))} */}

                <h2>{thing.title}</h2>
                <img src={thing.imgUrl} width={200} />
                <p>{thing.description}</p>
            </div>
            <div>
                
            </div>
        </main>
    ]
}