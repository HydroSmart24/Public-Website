// src/App.jsx
import React from 'react';
import Navbar from './assets/Sections/Navbar';
import HeroSection from './assets/sections/HeroSection';
import LiteratureSection from './assets/sections/LiteratureSection';
import ResearchGapSection from './assets/sections/ResearchGapSection';
import ProblemSolutionSection from './assets/sections/ProblemSolutionSection';
import ResearchObjectivesSection from './assets/sections/ResearchObjectivesSection';
import MethodologySection from './assets/sections/MethodologySection';
import TechnologiesSection from './assets/sections/TechnologiesSection';
import TimelineSection from './assets/sections/TimelineSection';
import './assets/styles/Navbar.css';
import './assets/styles/HeroSection.css';
import './assets/styles/LiteratureSection.css';
import './assets/styles/ResearchGapSection.css';
import './assets/styles/ProblemSolutionSection.css';
import './assets/styles/ResearchObjectivesSection.css';
import './assets/styles/MethodologySection.css';
import './assets/styles/TechnologiesSection.css';
import './assets/styles/TimelineSection.css';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LiteratureSection />
      <ResearchGapSection />
      <ProblemSolutionSection />
      <ResearchObjectivesSection />
      <MethodologySection />
      <TechnologiesSection />
      <TimelineSection />
    </>
  );
};
export default App;
