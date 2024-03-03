import { useState } from "react";

export const NewForm = (props) => {

    const [fields, setFields] = useState({
        title: '',
        description: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFields(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addItem(fields);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Title
                <input type="text" name="title" onChange={handleChange} value={fields.title} />
            </label>
            <label htmlFor="">
                Description
                <input type="text" name="description" onChange={handleChange} value={fields.description} />
            </label>
            <button type='submit'>Add Todo</button>
        </form>
    )
}