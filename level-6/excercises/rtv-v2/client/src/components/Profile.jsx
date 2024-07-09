import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';
import IssueForm from './IssueForm';

export default function Profile() {

    const { user, getUserIssues, issues, addIssue, getAllComments } = useContext(UserContext)

    useEffect(() => {
        getUserIssues()
        getAllComments()
    }, [])

    //console.log(issues)


    return ( 
        <>
        <h1>
            Profile: {user.username}
        </h1>
        <IssueForm 
            btnText="Add Issue"
            submit={addIssue}
        />
        <h3> Issues: </h3>
        <IssueList 
            issues = {issues}
        />
        <p></p>
        </>
     );
}