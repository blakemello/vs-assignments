import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import aboutData from './AboutData'

export default function AboutDetails() {

    const { aboutId } = useParams()
    const foundAbout = aboutData.find(about => about._id === aboutId)

    const navigate = useNavigate()

    return (
        <div className="App">
            <h1>{foundAbout.name} </h1>
            <img src={foundAbout.imgUrl} width={500}/>
            <p>{foundAbout.description}</p>
            <br></br>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}