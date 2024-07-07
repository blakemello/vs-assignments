import React, { useState, useContext } from 'react'
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
        issues: [],
        errMsg: '',
    }
   
   
    const [ userState, setUserState ] = useState(initState)

    const [ allIssues, setAllIssues ] = useState([])

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

// Get User Issues
    async function getUserIssues(){
        try {
            const res = await userAxios.get('/api/main/issues/user')
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    issues: res.data
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

// Get All Issues
     async function getAllIssues(){
         try {
             const res = await userAxios.get('/api/main/issues/all')
             setUserState(prevUserState => {
                 return {
                     ...prevUserState,
                     issues: res.data
                 }
             })
         } catch (err) {
             console.log(err)
         }
     }

    // async function getAllIssues(){
    //     try {
    //         const res = await userAxios.get('/api/main/issues/all')
    //         setAllIssues(prevAllIssues => {
    //             return {
    //                 ...prevAllIssues,
    //                 allIssues: res.data
    //             }
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

        // async function getAllIssues(){
    //     try {
    //         const res = await userAxios.get('/api/main/issues/all')
    //         setAllIssues(res.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

// Add Issue
    async function addIssue(newIssue){
        try {
            const res = await userAxios.post('/api/main/issues', newIssue)
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    issues: [...prevUserState.issues, res.data]
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

// Delete Issue
    async function deleteIssue(id){
        try {
            const res = await userAxios.delete(`/api/main/issues/${id}`)
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    issues: prevUserState.issues.filter(userState => userState._id !== id)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

// Edit Issue
    async function editIssue(id, updates){
        try {
            const res = await userAxios.put( `/api/main/issues/${id}`, updates )
            console.log(updates)
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    issues: prevUserState.issues.map(issue => issue._id === id ? res.data : issue)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }


// Upvote functionality
    async function handleUpvote(issueId) {
        try {
            const res = await userAxios.put(`/api/main/issues/upvotes/${issueId}`)
            setAllIssues(prevAllIssues => prevAllIssues.map(issue => issue._id === issueId ? res.data : issue))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

// Downvote functionality
    async function handleDownvote(issueId) {
        try {
            const res = await userAxios.put(`/api/main/issues/downvotes/${issueId}`)
            setAllIssues(prevAllIssues => prevAllIssues.map(issue => issue._id === issueId ? res.data : issue))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
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
                ...allIssues,
                handleAuthErr,
                resetAuthErr,
                signup,
                login,
                logout,
                getUserIssues,
                getAllIssues,
                addIssue,
                deleteIssue,
                editIssue,
                handleUpvote,
                handleDownvote,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}