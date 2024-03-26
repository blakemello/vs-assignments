import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import serviceData from './serviceData'


export default function Services() {

    const services = serviceData.map(service => (
        <h3 key={service._id}>
            <Link to={`/services/${service._id}`}>
                {service.name}
            </Link> - ${service.price}
        </h3>
    ))

    return (
        <div>
            <h1>Services</h1>
            {services}
        </div>
    )
}