import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';

export default function Issue(props) {

    const { _id, title, description, imgUrl, userId, username } = props

    const { user, deleteIssue, editIssue } = useContext(UserContext)

    const [editToggle, setEditToggle] = useState(false)

    let isUser = userId === user._id

    // console.log('UserId: ', userId)
    // console.log("user._id: ", user._id)

    return(
        <div>
            <h4>User: {username}</h4>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={imgUrl} width={250}/>
            <br></br>
            { isUser && (
                <>                
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                <button onClick={() => deleteIssue(_id)}>Delete</button>
                </>
            )  }
        </div>
    )
}