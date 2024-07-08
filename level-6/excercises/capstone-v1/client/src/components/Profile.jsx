import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';
import PostList from './PostList';
import PostForm from './PostForm';

export default function Profile() {

    const { user, getUserPosts, posts, addPost } = useContext(UserContext)

    useEffect(() => {
        getUserPosts()
    }, [])


    return ( 
        <>
        <h1>
            Profile: {user.username}
        </h1>
        <PostForm 
            btnText="Add Post"
            submit={addPost}
        />
        <h3> Posts: </h3>
        <PostList 
            posts = {posts}
        />
        <p></p>
        </>
     );
}