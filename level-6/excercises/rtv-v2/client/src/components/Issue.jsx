import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';

export default function Issue(props) {

    const { user, title, description, imgUrl } = props

    const { deleteIssue, editIssue } = useContext(UserContext)

    const [editToggle, setEditToggle] = useState(false)


    return(
        <div>
            <p>{user}</p>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={imgUrl} width={250}/>
            <br></br>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            <button onClick={() => deleteIssue(issue._id)}>Delete</button>
        </div>
    )
}