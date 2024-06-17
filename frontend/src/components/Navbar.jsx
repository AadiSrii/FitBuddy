// import React from "react";
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
    
//     return (
//         <div className="nav" >
//             <Link to="/"><img src="../images/logo.jpeg" alt="FitBuddy-Logo" style={{ height: "50px" }}/></Link>
//             <Link to="/workout" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"400px"}}>Workouts</Link>
//             <Link to="/AllRoutes" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Routes</Link>
//             <Link to="/Community" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Community</Link>
//             <Link to="/Shop" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Shop</Link>
//             <Link to="/Login" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"200px" }}><button style={{width:"80px",height:"40px",fontWeight:"800", borderRadius:"6px", fontSize:"14px", border:'none'}}>LOG IN</button></Link>
//             <Link to="/Signup" style={{textDecoration:"none", color:"white", fontSize:"16px"}}><button style={{width:"100px",height:"40px",fontWeight:"800" , borderRadius:"6px", fontSize:"14px",border:'none' , marginLeft:"-20px"}}>SIGN UP</button></Link>
            
//         </div>
//     );
// };



import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Install react-icons if you haven't: npm install react-icons

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
