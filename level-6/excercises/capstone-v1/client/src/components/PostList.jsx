import Post from "./Post"
import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';


export default function PostList(props) {

    const {posts} = props

    const postElements = posts.map(post => {
        return (
            <div key={post._id}>
            <Post {...post} />
            </div>
        )
    })

    return(
        <div>
            {postElements}
            <br></br>
        </div>
    )
}