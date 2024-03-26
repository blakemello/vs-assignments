import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const EditForm = (props) => {

    const {uglyThing, handleChange, handleEditSubmit, handleSubmit, editItem, setShowForm} = useContext(ThemeContext)


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
                onClick={handleEditSubmit}
            >
                Submit
            </button>
        </div>
    )

}