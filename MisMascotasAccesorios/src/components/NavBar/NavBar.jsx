import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

export default function Navbar() {
    return (
        <header className="navbar">
            <NavLink to="/">
                <img src="/favicon-min.png" alt="Logo" width={100} />
            </NavLink>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/categoria/Blandy">Blandys</NavLink></li>
                    <li><NavLink to="/categoria/Bolso">Bolsos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
