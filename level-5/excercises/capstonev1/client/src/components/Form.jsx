import React, { useState } from 'react'

export default function Form(props){


    const initInputs = {
        title: props.title || '',
        imgUrl: props.imgUrl || '',
        description: props.description || '',
        completed: props.completed || false,
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event){
        const { name, value, type, checked } = event.target
        console.log(type, checked)
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]:  type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        props.toggle && props.toggle()
    }

    console.log(inputs)

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
                name='imgUrl'
                value={inputs.imgUrl}
                onChange={handleChange}
                placeholder="imgUrl"
            />
            <input 
                type='text'
                name='description'
                value={inputs.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <label> Completed:
            <input 
                type='checkbox'
                name='completed'
                value={inputs.completed}
                onChange={handleChange}
            />
            </label>
            <button className='add-btn'>{ props.btnText }</button>
        </form>
    )
}