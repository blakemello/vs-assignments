import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Form(props) {

     const {uglyThing, handleChange, handleSubmit} = useContext(ThemeContext)

    //  console.log(thing)

    return (
        <div className='form'>
            <input
                type="text"
                placeholder="Title"
                className="form--input"
                name="title"
                value={uglyThing.title}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Img URL"
                className="form--input"
                name="imgUrl"
                value={uglyThing.imgUrl}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Description"
                className="form--input"
                name="description"
                value={uglyThing.description}
                onChange={handleChange}
            />
            <br></br>
            <button 
                className="form--button"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}