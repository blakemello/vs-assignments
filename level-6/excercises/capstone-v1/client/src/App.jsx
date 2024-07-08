import react, { useContext }from "react"
import './App.css'
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import About from "./components/About"
import AboutDetails from './components/AboutDetails'
import Navbar from "./components/Navbar"
import { UserContext } from "./context/UserProvider"
import { Routes, Route, Navigate } from "react-router-dom"

export default function App() {

  const { token, logout } = useContext(UserContext)

  return (
    <>
      { token && <Navbar logout = {logout}/> }
      <div id="app">
        <Routes>
          <Route path="/" element={token ? <Navigate to ='/profile'/> : <Auth />} />
          <Route path='about' element={token ? <About /> : <Navigate to='/' />}/>
          <Route path='about/:aboutId' element={token ? <AboutDetails /> : <Navigate to='/' />} />
          <Route path="profile" element={token ? <Profile /> : <Navigate to='/' />} />
        </Routes>
      </div>

    </>
  )
}