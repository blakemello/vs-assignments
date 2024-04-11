import React from 'react'
import axios from 'axios'

export default function Movie(props){

    const { title, genre, _id } = props
    return(
        <div className='movie'>
            <h1>Title: {title}</h1>
            <p>Genre: {genre}</p>
            <button className='delete-btn' onClick={() => props.deleteMovie(_id)}>Delete</button>
        </div>
    )
}