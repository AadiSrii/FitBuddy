import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Assuming you have a CSS file for styling

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fitbuddy = localStorage.getItem('fitbuddy');
    setIsLoggedIn(!!fitbuddy);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <NavLink to="/" className="nav-link">
        <img src="/images/logo.jpeg" alt="FitBuddy-Logo" className="logo" />
      </NavLink>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/nutrition"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Nutrition Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/workout"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Workout Plans
            </NavLink>
          </li>
              <li>
                <NavLink
                  to="/track"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Track
                </NavLink>
              </li>
          <li>
            <NavLink
              to="/challenges"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Challenges
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  to="/Login"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <button className="nav-button">LOG IN</button>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Signup"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <button className="nav-button signup-button">SIGN UP</button>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};
