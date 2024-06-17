
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav">
            <Link to="/"><img src="../images/logo.jpeg" alt="FitBuddy-Logo" className="logo"/></Link>
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <Link to="/workout" className="nav-link">Workouts</Link>
                <Link to="/AllRoutes" className="nav-link">Routes</Link>
                <Link to="/Community" className="nav-link">Community</Link>
                <Link to="/Shop" className="nav-link">Shop</Link>
                <Link to="/Login" className="nav-link"><button className="nav-button">LOG IN</button></Link>
                <Link to="/Signup" className="nav-link"><button className="nav-button signup-button">SIGN UP</button></Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    );
};
