import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';
import IssueForm from './IssueForm';
import CommentContainer from './CommentContainer'
import moment from 'moment';

export default function Issue(props) {

    const { _id, title, description, imgUrl, userId, username, upvotes, downvotes, createdAt } = props

    const { user, deleteIssue, editIssue, handleUpvote, handleDownvote } = useContext(UserContext)

    const [editToggle, setEditToggle] = useState(false)

    let isUser = userId === user._id

    const timeStamp = moment(createdAt).fromNow()


    return(
        <div>
        { !editToggle ?
        <>
            <h3>User: {username}</h3>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={imgUrl} width={250}/>
            <p>{timeStamp}</p>
            <br></br>
            <p style= {{color: 'blue'}}>Upvotes: {upvotes.length}</p>
            <button onClick={() => handleUpvote(_id)}>Upvote</button>
            <button onClick={() => handleDownvote(_id)}>Downvote</button>
            <p style= {{color: 'orange'}}>Downvotes: {downvotes.length}</p>
            <br></br>
            <CommentContainer issueId={_id} />
            { isUser && (
                <>                
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                <button onClick={() => deleteIssue(_id)}>Delete</button>
                </>
            )  }
        </>
        :
        <>
            <IssueForm 
                title={title}
                description={description}
                imgUrl={imgUrl}
                _id={_id}
                btnText="Submit Edit"
                submit={editIssue}
                toggle={() => setEditToggle(prevToggle => !prevToggle)}            
            />
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >Cancel
            </button>
        </>
        }
        </div>
    )
}