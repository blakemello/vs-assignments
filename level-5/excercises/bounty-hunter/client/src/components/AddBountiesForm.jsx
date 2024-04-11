import React, { useState } from 'react'

export default function AddBountiesForm(props){

    const initInputs = { firstName: "", lastName: "", type: "", living: "", bounty: "" }
    
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
        console.log(inputs)
        props.addBounties(inputs)
        setInputs(initInputs)
    }

    const options = [
        {label: 'sith'},
        {label: 'jedi'}
    ]

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='firstName'
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                type='text'
                name='lastName'
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input 
                type='dropbox'
                name='type'
                value={inputs.type}
                onChange={handleChange}
                placeholder='sith or jedi'
            />
            <label htmlFor=''> Living:
            <input 
                type='checkbox'
                //checked={checked}
                name='living'
                value={inputs.living}
                onChange={handleChange}
                placeholder='true or false'
            />
            </label>
            <input 
                type='number'
                name='bounty'
                value={inputs.bounty.valueAsNumber}
                onChange={handleChange}
                placeholder='Bounty Amount'
            />            
            <button className='add-btn'>Add Bounty</button>
        </form>
    )
}