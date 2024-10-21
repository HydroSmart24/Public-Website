// src/sections/HeroSection.jsx
import React from 'react';
import heroImage from '../images/hero-image.jpg'; // Import image for the hero section.

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-cyan-100 to-white w-full min-h-screen mt-0 md:mt-10 px-6 md:px-16 lg:px-36 mx-auto">
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-4 sm: mt-40">
        <h1 className="font-medium text-gray-600 text-3xl md:text-4xl lg:text-5xl leading-tight">
          <span className="block">EMPOWERING <br /> COMMUNITIES <br /> WITH</span>
          <span className="text-customBlue"> SMART</span> <br />
          <span className="text-customBlue">WATER MANAGEMENT</span>
        </h1>
        <button className="bg-customBlue text-white py-2 px-4 rounded-full hover:bg-customBlueHover transition-all flex items-center justify-center mt-2">
          Explore More <span className="ml-2 text-lg">→</span>
        </button>
      </div>
      
      {/* Adjusted image section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImage}
          alt="Water Tank Management"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg object-cover sm: mb-40"
        />
      </div>
    </section>
  );
};

export default HeroSection;
