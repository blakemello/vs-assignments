import React, { useState } from 'react'
import AddBountiesForm from './AddBountiesForm'

export default function Bounties(props) {

    const { firstName, lastName, type, living, bountyAmount, _id } = props

    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className='bounties'>
            {!editToggle ?
                <>
                    <h1>Name: {lastName}, {firstName}</h1>
                    <h2>{type}</h2>
                    <p>Alive: {living.toString()}</p>
                    <p>Bounty: {bountyAmount}</p>
                    <button
                        className='delete-btn'
                        onClick={() => props.deleteBounties(_id)}
                    >
                        Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Edit
                    </button>
                </>
                :
                <>
                    <AddBountiesForm
                        firstName={firstName}
                        lastName={lastName}
                        type={type}
                        living={living}
                        bountyAmount={bountyAmount}
                        _id={_id}
                        btnText="Submit Edited Bounty"
                        submit={props.editBounties}
                        toggle={() => setEditToggle(prevToggle => !prevToggle)}
                    />
                    <button
                        className='cancel-btn'
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Cancel
                    </button>
                </>
            }
        </div>
    )
}