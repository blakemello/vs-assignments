import React, { useState, useContext } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export default function UserProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('') || "",
        issues: []
    }
   
   
    const [ userState, setUserState ] = useState(initState)

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
            console.log(err)
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
            console.log(err)
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
   
    return (
        <UserContext.Provider 
            value = {{
                ...userState,
                signup,
                login,
                logout,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}