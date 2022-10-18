import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
        <p>You are on the Home Page</p>
        <Link to='/about'>About Page</Link>
        </>
    )
}

export {Home};