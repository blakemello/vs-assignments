import React, { useState, useEffect } from 'react';

function Form(props) {

    const [dogFact, setDogFact] = useState('')

    useEffect(function() {
        fetch(`https://dogapi.dog/api/facts/`)
        .then(res => res.json())
        .then(data => setDogFact(data.facts))
    }, [])

    const getDogFact = () => {
        fetch(`https://dogapi.dog/api/facts/`)
            .then(res => res.json())
            .then(data => setDogFact(data.facts))
    }

    const initState = {
        username: '',
        password: ''
    }

    const [ formData, setFormData] = useState(initState)

    const {isMember, submit, errMsg} = props

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        submit(formData)
    }

    return (
        <>
            <div>
                <h2>Welcome to Blake's Level 6 Capstone!</h2>
                <h3>
                    This is a quick application you can use to store your notes in the cloud
                </h3>
                <h4 className='dog-header'>
                    In the meantime here's a cute dog fact to start your day off right:
                    <br></br>
                    {dogFact}
                    <br></br>
                    <button onClick={getDogFact} className='dog-btn'>Get A New Dog Fact</button>
                </h4>
            </div>

            <form name='auth-form' id='auth-form' onSubmit={handleSubmit}>
                <input
                    placeholder='username'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    placeholder='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <button>{isMember ? "Login" : "Signup"}</button>

                <p style={{ color: 'red' }}>{errMsg}</p>

            </form>
        </>
    );
}

export default Form;