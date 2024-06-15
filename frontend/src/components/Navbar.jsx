// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAdmin }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nutrition">Nutrition Plans</Link></li>
        <li><Link to="/workout">Workout Plans</Link></li>
        {isAdmin && <li><Link to="/challenges">Challenges</Link></li>} {/* Only show Challenges link if isAdmin */}
        {/* Add more links here as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
