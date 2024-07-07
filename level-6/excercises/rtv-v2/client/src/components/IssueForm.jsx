import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function IssueForm(props) {

    const { addIssue, editIssue } = useContext(UserContext)

    const initInputs = {
        title: props.title || '',
        description: props.description || '',
        imgUrl: props.imgUrl || '',
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
        addIssue(inputs) || editIssue(inputs)
        setInputs(initInputs)
        props.toggle && props.toggle()
    }

    console.log(inputs)

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                value={inputs.title}
                onChange={handleChange}
                placeholder="Title"            
            >
            </input>
            <input
                type='text'
                name='description'
                value={inputs.description}
                onChange={handleChange}
                placeholder="Description"            
            >
            </input>
            <input
                type='text'
                name='imgUrl'
                value={inputs.imgUrl}
                onChange={handleChange}
                placeholder="imgUrl"            
            >
            </input>
            <br></br>
            <button>{ props.btnText }</button>
        </form>
    )
}