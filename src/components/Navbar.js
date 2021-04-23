import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm border mb-3">
            <div className="container">
                <a className="navbar-brand" to="">News.kg</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/contacts">Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="#">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;