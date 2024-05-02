import React, { useState } from 'react'

export default function AddBountiesForm(props){

    const initInputs = {
        firstName: props.firstName || '', 
        lastName: props.lastName || '', 
        type: props.type || '', 
        living: props.living || true, 
        bountyAmount: props.bountyAmount || 0
    }
    
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(event){
        const { name, value } = event.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    console.log(inputs)

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        props.toggle && props.toggle()
    }

    const options = [
        {label: 'sith'},
        {label: 'jedi'}
    ]

    const [checked, setChecked] = useState(true)

    function handleChecked() {
        setChecked(prevChecked => prevChecked === true ? false : true)
        console.log(checked)
    }



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
                checked={checked}
                name='living'
                value={inputs.living}
                onChange={handleChecked}
            />
            </label>
            <input 
                type='number'
                name='bountyAmount'
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder='Bounty Amount'
            />            
            <button className='add-btn'>{ props.btnText }</button>
        </form>
    )
}