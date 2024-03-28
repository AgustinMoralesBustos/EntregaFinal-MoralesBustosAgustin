import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';

export default function Navbar({ cartItemCount }) {
    return (
        <header className="navbar">
            <NavLink to="/">
                <img src="/favicon-min.png" alt="Logo" width={100} />
            </NavLink>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/category/Nidos Rectangulares">Nidos</NavLink></li>
                    <li><NavLink to="/category/Blandys">Blandys</NavLink></li>
                    <li><NavLink to="/category/Bolsos">Bolsos</NavLink></li>
                    <li><NavLink to="/cart"><FaShoppingCart /> {cartItemCount}</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}