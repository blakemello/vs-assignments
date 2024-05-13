import React, { useState } from 'react'

export default function Form(props){

    const initInputs = {
        title: props.title || ''
    }

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
            <button className='add-btn'>{ props.btnText }</button>
        </form>
    )
}