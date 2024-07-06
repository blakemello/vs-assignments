import React, {useContext, useEffect} from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';


export default function Public(props) {

    const { user, getAllIssues, issues, allIssues } = useContext(UserContext)

    useEffect(() => {
        getAllIssues()
    }, [])

    console.log(allIssues)
    

    return ( 
        <>
        <h2>Main Page</h2>
        <IssueList 
            issues = {issues}
            
        />
        <p></p>
        </>
     );
}