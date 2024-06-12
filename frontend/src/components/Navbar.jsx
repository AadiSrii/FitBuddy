import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div style={{ display: "flex", gap: "40px", borderBottom: "1px solid black", alignItems: "center", justifyContent: "center", backgroundColor: "black" }}>
            <h2 style={{ color: "white" }}>FitBuddy</h2>
            <Link to="/">Home</Link>
        </div>
    )
}