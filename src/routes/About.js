import React from 'react';
import {Link} from 'react-router-dom';

function About(){
    return(
        <>
            <p>You are on the About Page</p>
            <Link to='/'>Homepage</Link>
        </>
    )
}

export {About};