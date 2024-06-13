// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nutrition">Nutrition Plans</Link></li>
        <li><Link to="/workout">Workout Plans</Link></li>
        {/* Add more links here as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
