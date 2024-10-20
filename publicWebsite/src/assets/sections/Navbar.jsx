// src/sections/Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[110px] bg-white flex justify-between items-center px-[135px] z-50 shadow">
      <div className="text-2xl font-semibold text-customBlue">HydroSmart</div>
      <div className="hidden md:flex space-x-8">
        <ul className="flex space-x-8">
          <li><a href="#home" className="text-gray-500 hover:text-customBlue">Home</a></li>
          <li><a href="#scope" className="text-gray-500 hover:text-customBlue">Project Scope</a></li>
          <li><a href="#milestones" className="text-gray-500 hover:text-customBlue">Milestones</a></li>
          <li><a href="#downloads" className="text-gray-500 hover:text-customBlue">Downloads</a></li>
          <li><a href="#aboutus" className="text-gray-500 hover:text-customBlue">About Us</a></li>
          <li><a href="#contactus" className="text-gray-500 hover:text-customBlue">Contact Us</a></li>
        </ul>
      </div>
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className="bg-customBlue text-white focus:outline-none py-2 px-4 rounded"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[110px] left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#home" className="text-gray-500 hover:text-customBlue">Home</a></li>
            <li><a href="#scope" className="text-gray-500 hover:text-customBlue">Project Scope</a></li>
            <li><a href="#milestones" className="text-gray-500 hover:text-customBlue">Milestones</a></li>
            <li><a href="#downloads" className="text-gray-500 hover:text-customBlue">Downloads</a></li>
            <li><a href="#aboutus" className="text-gray-500 hover:text-customBlue">About Us</a></li>
            <li><a href="#contactus" className="text-gray-500 hover:text-customBlue">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
