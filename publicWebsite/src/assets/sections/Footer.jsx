// src/components/Footer.jsx
import React from 'react';
import logo from '../images/hydroLogo.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-16 text-[#464646]">
    {/* Horizontal Grey Line at the Top */}
    <hr className="border-t border-gray-300 mb-6" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <a href="#home" className="text-[#1089B8] hover:underline">
            Home
          </a>
          <a href="#scope" className="text-[#1089B8] hover:underline">
            Project Scope
          </a>
          <a href="#milestones" className="text-[#1089B8] hover:underline">
            Milestones
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#downloads" className="text-[#1089B8] hover:underline">
            Downloads
          </a>
          <a href="#aboutus" className="text-[#1089B8] hover:underline">
            About Us
          </a>
          <a href="#contactus" className="text-[#1089B8] hover:underline">
            Contact Us
          </a>
        </div>

        {/* Logo and Contact Section */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="HydroSmart Logo" className="h-10 w-10" />
            <span className="text-2xl font-semibold text-gray-500">
              HydroSmart
            </span>
          </div>
          <p>Contact Us Via Email: -</p>
          <a
            href="mailto:Hydrosmart2024@Ggmail.Com"
            className="text-[#1089B8] hover:underline"
          >
            Hydrosmart2024@Ggmail.Com
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 mt-6 pt-4 text-center text-sm text-gray-500">
        Copyright 2024 | Project HydroSmart
      </div>
    </footer>
  );
};

export default Footer;
