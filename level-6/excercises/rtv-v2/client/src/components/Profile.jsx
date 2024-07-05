import React, {useContext} from 'react';
import { UserContext } from '../context/UserProvider';

export default function Profile() {

    const { user } = useContext(UserContext)

    return ( 
        <>
        <h1>
            Profile: {user.username}
        </h1>
        <h3> Issues </h3>
        <p></p>
        </>
     );
}