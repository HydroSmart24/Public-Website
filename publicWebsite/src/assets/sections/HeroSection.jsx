// src/sections/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css'; // Import the CSS file for the Hero section.
import heroImage from '../images/hero-image.jpg'; // Import image for the hero section.

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span className="grey-text">
            EMPOWERING <br />
            COMMUNITIES <br />
            WITH
          </span>
          <span className="blue-text"> SMART</span> <br />
          <span className="blue-text">WATER MANAGEMENT</span>
        </h1>
        <button className="explore-button">
          Explore More <span>→</span>
        </button>
      </div>
      <div className="hero-image-container">
        <img
          src={heroImage}
          alt="Water Tank Management"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
