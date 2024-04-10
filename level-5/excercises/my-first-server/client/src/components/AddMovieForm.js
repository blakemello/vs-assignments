import React, { useState } from 'react'

export default function AddMovieForm(props){

    const initInputs = { title: " ", genre: " " }
    
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event){
        const { name, value } = event.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        //console.log(inputs)
        props.addMovie(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='title'
                value={inputs.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input 
                type='text'
                name='genre'
                value={inputs.genre}
                onChange={handleChange}
                placeholder='Genre'
            />
            <button>Add Movie</button>
        </form>
    )
}