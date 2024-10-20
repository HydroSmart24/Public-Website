// src/sections/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">HydroSmart</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/scope">Project Scope</a></li>
        <li><a href="/milestones">Milestones</a></li>
        <li><a href="/downloads">Downloads</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
