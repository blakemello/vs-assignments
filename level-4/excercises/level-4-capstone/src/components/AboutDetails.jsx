import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import aboutData from './AboutData'
import { ThemeContext } from '../ThemeContext'

export default function ServiceDetails() {

    const {color, toggleTheme, handleTheme} = useContext(ThemeContext)

    const { aboutId } = useParams()
    const foundAbout = aboutData.find(about => about._id === aboutId)

    const navigate = useNavigate()

    // console.log(aboutData)
    // console.log(serviceId)
    // console.log(useParams())
    // console.log(foundService)
    //console.log(serviceId)

    return (
        <div className={`${color}-about`}>
            <h1>{foundAbout.name} </h1>
            <img src={foundAbout.imgUrl} width={500}/>
            <p>{foundAbout.description}</p>
            <br></br>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}