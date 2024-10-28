// src/sections/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../images/hydroLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home'); // Track active section

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Observe sections and update active section in state
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 } // 40% of the section should be visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const getLinkClasses = (hash) =>
    activeSection === hash
      ? 'text-customBlue font-semibold'
      : 'text-gray-500 hover:text-customBlue';

  return (
    <nav className="fixed top-0 left-0 w-full h-[110px] bg-white flex justify-between items-center px-[135px] z-50 shadow">
      {/* Logo and Title Section */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="HydroSmart Logo" className="h-10 w-10 object-contain" />
        <div className="text-2xl font-semibold text-customBlue">HydroSmart</div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className={getLinkClasses('#home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#scope" className={getLinkClasses('#scope')}>
              Project Scope
            </a>
          </li>
          <li>
            <a href="#milestones" className={getLinkClasses('#milestones')}>
              Milestones
            </a>
          </li>
          <li>
            <a href="#downloads" className={getLinkClasses('#downloads')}>
              Downloads
            </a>
          </li>
          <li>
            <a href="#aboutus" className={getLinkClasses('#aboutus')}>
              About Us
            </a>
          </li>
          <li>
            <a href="#contactus" className={getLinkClasses('#contactus')}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="bg-customBlue text-white focus:outline-none py-2 px-4 rounded"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[110px] left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a href="#home" className={getLinkClasses('#home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#scope" className={getLinkClasses('#scope')}>
                Project Scope
              </a>
            </li>
            <li>
              <a href="#milestones" className={getLinkClasses('#milestones')}>
                Milestones
              </a>
            </li>
            <li>
              <a href="#downloads" className={getLinkClasses('#downloads')}>
                Downloads
              </a>
            </li>
            <li>
              <a href="#aboutus" className={getLinkClasses('#aboutus')}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contactus" className={getLinkClasses('#contactus')}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
