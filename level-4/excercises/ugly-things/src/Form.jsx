import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Form(props) {

     const {thing, handleChange, handleSubmit, addItem} = useContext(ThemeContext)

    //  console.log(thing)

    return (
        <div className='form'>
            <input
                type="text"
                placeholder="Title"
                className="form--input"
                name="title"
                value={thing.title}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Img URL"
                className="form--input"
                name="imgUrl"
                value={thing.imgUrl}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Description"
                className="form--input"
                name="description"
                value={thing.description}
                onChange={handleChange}
            />
            <br></br>
            <button 
                className="form--button"
                onClick={addItem}
            >
                Submit
            </button>
        </div>
    )
}