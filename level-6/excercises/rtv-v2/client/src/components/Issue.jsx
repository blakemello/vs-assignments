import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';

export default function Issue(props) {

    const { _id, title, description, imgUrl, userId, username, upvotes, downvotes } = props

    const { user, deleteIssue, editIssue, handleUpvote, handleDownvote } = useContext(UserContext)

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
            <p style= {{color: 'blue'}}>{upvotes.length}</p>
            <button onClick={() => handleUpvote(_id)}>Upvote</button>
            <button onClick={() => handleDownvote(_id)}>Downvote</button>
            <p style= {{color: 'orange'}}>{downvotes.length}</p>
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