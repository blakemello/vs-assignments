import { useState } from "react"
import { EditForm } from "./EditForm";

export const Item = (props) => {

    const [showForm, setShowForm] = useState(false);

    const handleClickDelete = () => {
        props.deleteItem(props._id)
    }

    const handleEditSubmit = (id, fields) => {
        props.editItem(id, fields);
        setShowForm(false)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>

            <div>
                <button onClick={handleClickDelete}>X</button>
                <button onClick={() => setShowForm(show => !show)}>{showForm ? 'Hide Form' : 'Edit'}</button>
            </div>

            {showForm && <EditForm
                _id={props._id}
                title={props.title}
                description={props.description}
                editItem={handleEditSubmit}
            />}
        </div>
    )
}