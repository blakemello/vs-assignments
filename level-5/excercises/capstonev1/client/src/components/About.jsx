import { useState, useContext } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import aboutData from './AboutData'


export default function About(props) {
    

    const abouts = aboutData.map(about => (
        <h3 key={about._id}>
            <Link to={`/about/${about._id}`}>
                {about.name}
            </Link>
        </h3>
    ))

    return(
        <div className="App">
            <h1>
                About Us!
            </h1>
            {abouts}
            <br></br>
        </div>
    )
}