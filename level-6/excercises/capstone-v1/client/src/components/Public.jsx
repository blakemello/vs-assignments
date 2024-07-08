import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import PostList from './PostList';


export default function Public(props) {

    const { user, getAllPosts, posts, allPosts } = useContext(UserContext)

    useEffect(() => {
        getAllPosts()
    }, [])

    console.log(allPosts)
    

    return ( 
        <>
        <h2>Main Page</h2>
        <PostList 
            posts = {posts}
            
        />
        <p></p>
        </>
     );
}