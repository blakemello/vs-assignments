import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('') || "",
        posts: [],
        errMsg: '',
    }
   
   
    const [ userState, setUserState ] = useState(initState)

    const [ allPosts, setAllPosts ] = useState([])

// Signup function
    async function signup(creds){
        try {
            const res = await axios.post('/api/auth/signup', creds)
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data)
        } catch (err) {
            handleAuthErr(err.response.data.errMsg)
        }
    }

// Login function 
    async function login(creds) {
        try {
            const res = await axios.post('/api/auth/login', creds)
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data)
        } catch (err) {
            handleAuthErr(err.response.data.errMsg)
        }
    }

// Logout function
    async function logout() {
        try {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    token: '',
                    user: {}
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

// Displays login / signup errors
    function handleAuthErr(errMsg) {
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg
            }
        })
    }

    function resetAuthErr() {
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg: ''
            }
        })
    }

// Get User Posts
    async function getUserPosts(){
        try {
            const res = await userAxios.get('/api/main/posts/user')
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    posts: res.data
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

// Get All Posts
     async function getAllPosts(){
         try {
             const res = await userAxios.get('/api/main/posts/all')
             setUserState(prevUserState => {
                 return {
                     ...prevUserState,
                     posts: res.data
                 }
             })
         } catch (err) {
             console.log(err)
         }
     }

    // async function getAllPosts(){
    //     try {
    //         const res = await userAxios.get('/api/main/posts/all')
    //         setAllPosts(prevAllPosts => {
    //             return {
    //                 ...prevAllPosts,
    //                 allPosts: res.data
    //             }
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

        // async function getAllPosts(){
    //     try {
    //         const res = await userAxios.get('/api/main/posts/all')
    //         setAllPosts(res.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

// Add Post
    async function addPost(newPost){
        try {
            const res = await userAxios.post('/api/main/posts', newPost)
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    posts: [...prevUserState.posts, res.data]
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

// Delete Post
    async function deletePost(id){
        try {
            const res = await userAxios.delete(`/api/main/posts/${id}`)
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    posts: prevUserState.posts.filter(userState => userState._id !== id)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

// Edit Post
    async function editPost(updates, id){
        try {
            const res = await userAxios.put( `/api/main/posts/${id}`, updates )
            console.log(updates)
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    posts: prevUserState.posts.map(post => post._id === id ? res.data : post)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

   
    return (
        <UserContext.Provider 
            value = {{
                ...userState,
                ...allPosts,
                handleAuthErr,
                resetAuthErr,
                signup,
                login,
                logout,
                getUserPosts,
                getAllPosts,
                addPost,
                deletePost,
                editPost,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}