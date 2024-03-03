import { useState } from "react"

export const EditForm = (props) => {

    const [fields, setFields] = useState({
        title: props.title,
        description: props.description
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFields(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editItem(props._id, fields);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Edit Title
                <input type='text' name="title" onChange={handleChange} value={fields.title}/>
            </label>
            <label htmlFor="">
                Edit Description
                <input type='text' name="description" onChange={handleChange} value={fields.description}/>
            </label>
            <button type='submit'>Save</button>
        </form>
    )
} 