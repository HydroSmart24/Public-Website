// src/App.jsx
import React from 'react';
import Navbar from './assets/Sections/Navbar';
import HeroSection from './assets/sections/HeroSection';
import LiteratureSection from './assets/sections/LiteratureSection';
import './assets/styles/Navbar.css';
import './assets/styles/HeroSection.css';
import './assets/styles/LiteratureSection.css';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LiteratureSection />
    </>
  );
};
export default App;
