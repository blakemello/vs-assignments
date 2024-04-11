import React from 'react'

export default function Bounties(props) {

    const { firstName, lastName, type, living, bountyAmount, _id } = props

    return (
        <div className='bounties'>
            <h1>Name: {lastName}, {firstName}</h1>
            <h2>{type}</h2>
            <p>Alive: {living.toString()}</p>
            <p>Bounty: {bountyAmount}</p>
            <button className='delete-btn' onClick={() => props.deleteBounties(_id)}>Delete</button>
        </div>
    )
}