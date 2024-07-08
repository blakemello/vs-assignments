import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';
import PostForm from './PostForm';

export default function Post(props) {

    const { _id, title, description, imgUrl, userId } = props

    const { user, deletePost, editPost } = useContext(UserContext)

    const [editToggle, setEditToggle] = useState(false)

    let isUser = userId === user._id


    return(
        <div>
        { !editToggle ?
        <>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={imgUrl} width={250}/>
            <br></br>
            { isUser && (
                <>                
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                <button onClick={() => deletePost(_id)}>Delete</button>
                </>
            )  }
        </>
        :
        <>
            <PostForm 
                title={title}
                description={description}
                imgUrl={imgUrl}
                _id={_id}
                btnText="Submit Edit"
                submit={editPost}
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