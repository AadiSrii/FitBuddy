import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="nav" >
            <Link to="/"><img src="../images/logo.jpeg" alt="FitBuddy-Logo" style={{ height: "50px" }}/></Link>
            <Link to="/workout" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"400px"}}>Workouts</Link>
            <Link to="/AllRoutes" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Routes</Link>
            <Link to="/Community" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Community</Link>
            <Link to="/Shop" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Shop</Link>
            <Link to="/Login" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"200px" }}><button style={{width:"80px",height:"40px",fontWeight:"800", borderRadius:"6px", fontSize:"14px", border:'none'}}>LOG IN</button></Link>
            <Link to="/Signup" style={{textDecoration:"none", color:"white", fontSize:"16px"}}><button style={{width:"100px",height:"40px",fontWeight:"800" , borderRadius:"6px", fontSize:"14px",border:'none' , marginLeft:"-20px"}}>SIGN UP</button></Link>
            
        </div>
    );
};
