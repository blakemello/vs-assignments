import React from 'react'

export default function Bounties(props) {

    const { firstName, lastName, type, living, bountyAmount, _id } = props

    return (
        <div>
            <h1>Name: {lastName}, {firstName}</h1>
            <h2>{type}</h2>
            <p>Alive: {living}</p>
            <p>Bounty: {bountyAmount}</p>
        </div>
    )
}