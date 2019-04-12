import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
    return (
        <ul className="right">
           <li><NavLink to='/create'>New Projects</NavLink></li>
           <li><NavLink to='/'>Log Out</NavLink></li>
           <li><NavLink to='/' className="btn btn-floating blue lighten-1" >SS</NavLink></li>
        </ul>
    );
};

export default SignInLinks;