import Issue from "./Issue"
import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';


export default function IssueList(props) {

    const {issues} = props

    const { deleteIssue, editIssue } = useContext(UserContext)

    const [editToggle, setEditToggle] = useState(false)

    console.log(editToggle)

    const issueElements = issues.map(issue => {
        return (
            <div>
            <Issue {...issue} key={issue._id}/>
            <br></br>
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            <button onClick={() => deleteIssue(issue._id)}>Delete</button>
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