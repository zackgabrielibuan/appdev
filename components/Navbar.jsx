import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Link to the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/">Home</Link></li>
                <li className="navbar-item"><Link to="/blog">Blog</Link></li>
                <li className="navbar-item"><Link to="/about">About</Link></li>
                <li className="navbar-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li className="navbar-item"><Link to="/rental-history">Rental History</Link></li> 
            </ul>
        </nav>
    );
};

export default Navbar;
