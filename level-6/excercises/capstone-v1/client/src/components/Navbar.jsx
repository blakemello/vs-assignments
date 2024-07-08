import React from 'react';
import {Link} from "react-router-dom"

function Navbar(props) {

    const {logout} = props

    return ( 
        <div id = "navbar">
        <Link to = "/profile"><button>Profile</button></Link>
        <Link to = '/about'><button>About</button></Link>
        <Link to = "/"><button onClick={logout}>Logout</button></Link>
        </div>
     );
}

export default Navbar;