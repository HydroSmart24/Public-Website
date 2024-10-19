// src/App.jsx
import React from 'react';
import Navbar from './assets/Sections/Navbar';
import HeroSection from './assets/sections/HeroSection';
import LiteratureSection from './assets/sections/LiteratureSection';
import ResearchGapSection from './assets/sections/ResearchGapSection';
import ProblemSolutionSection from './assets/sections/ProblemSolutionSection';
import './assets/styles/Navbar.css';
import './assets/styles/HeroSection.css';
import './assets/styles/LiteratureSection.css';
import './assets/styles/ResearchGapSection.css';
import './assets/styles/ProblemSolutionSection.css';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LiteratureSection />
      <ResearchGapSection />
      <ProblemSolutionSection />
    </>
  );
};
export default App;
