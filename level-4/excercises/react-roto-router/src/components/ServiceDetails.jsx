import React from 'react'
import { useParams } from 'react-router-dom'
import serviceData from './serviceData'

export default function ServiceDetails() {
    const { serviceId } = useParams()
    const foundService = serviceData.find(service => service._id === serviceId)

    // console.log(serviceData)
    // console.log(serviceId)
    // console.log(useParams())
    // console.log(foundService)
    //console.log(serviceId)

    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{foundService.name} - ${foundService.price}</h3>
            <p>{foundService.description}</p>
        </div>
    )
}