import React from 'react';
import '../style/navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar({isAuthenticated, handleLogout}){
    return(
        <nav className='navbar'>
            <div className='navbar-title'>
                <Link to="/">MedTrail</Link>
            </div>
            <ul className='navbar-link'>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {isAuthenticated ? (
                    <li><Link to="/login" onClick={handleLogout} className='login'>Logout</Link></li>
                ) : (
                    <>
                        <li><Link to="/login" className='login'>Login</Link></li>
                        <li><Link to="/signup" className='signup'>Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}