import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div style={{ display: "flex", gap: "40px", borderBottom: "1px solid black", alignItems: "center", justifyContent:"flex-start", backgroundColor: "black", height: "70px",paddingLeft:"100px" }}>
            <Link to="/"><img src="../images/logo.jpeg" alt="FitBuddy-Logo" style={{ height: "50px" }}/></Link>
            <Link to="/workout" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"400px"}}>Workouts</Link>
            <Link to="/AllRoutes" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Routes</Link>
            <Link to="/Community" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Community</Link>
            <Link to="/Shop" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"10px"}}>Shop</Link>
            <Link to="/Login" style={{textDecoration:"none", color:"white", fontSize:"16px", marginLeft:"200px"}}><button style={{width:"80px",height:"42px",fontWeight:"800", fontSize:"14px"}}>LOG IN</button></Link>
            <Link to="/Signup" style={{textDecoration:"none", color:"white", fontSize:"16px"}}><button style={{width:"100px",height:"42px",fontWeight:"800", fontSize:"14px"}}>SIGN UP</button></Link>
            
        </div>
    );
};
