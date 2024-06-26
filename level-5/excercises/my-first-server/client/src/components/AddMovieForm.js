import React, { useState } from 'react'

export default function AddMovieForm(props){

    const initInputs = { title: props.title || "", genre: props.genre || "" }
    
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
        props.submit(inputs, props._id)
        setInputs(initInputs)
        props.toggle && props.toggle() 
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
            <button className='add-btn'>{ props.btnText }</button>
        </form>
    )
}