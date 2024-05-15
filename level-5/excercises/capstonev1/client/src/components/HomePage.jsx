import React, { useState, useContext } from 'react'
import Form from './Form'
import { Context, ContextProvider } from '../Context';

export default function HomePage(props) {
    
    const { title, imgUrl, description, completed, _id } = props

    const { all, getAll, addItem, editItem, deleteItem } = useContext(Context)

    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className='homepage'>
            { !editToggle ?
                <>
                    <h1>Title: {title}</h1>
                    <img src={imgUrl} width={250} />
                    <h3>Description: {description}</h3>
                    <p>Completed: {completed.toString()}</p>
                    <button
                        className='delete-btn'
                        onClick={() => deleteItem(_id)}
                    >
                        Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Edit
                    </button>
                </>
                :
                <>
                    <Form
                        title={title}
                        imgUrl={imgUrl}
                        description={description}
                        completed={completed}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={editItem}
                        toggle={() => setEditToggle(prevToggle => !prevToggle)}
                    />
                    <button
                        className='cancel-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Cancel
                    </button>
                </>
            }
        </div>
    )
}