import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { EditForm } from "./EditForm"

export default function Display(props) {

    const {uglyThingsList, showForm, handleSubmit} = useContext(ThemeContext)

    return [
        <main>
        <div>{uglyThingsList}</div>
        {showForm && <EditForm
                _id={props._id}
                title={props.title}
                description={props.description}
            />}
        </main>
    ]

}