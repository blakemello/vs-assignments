import Issue from "./Issue"
import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';


export default function IssueList(props) {

    const {issues} = props

    const issueElements = issues.map(issue => {
        return (
            <div key={issue._id}>
            <Issue {...issue} />
            </div>
        )
    })

    return(
        <div>
            {issueElements}
            <br></br>
        </div>
    )
}