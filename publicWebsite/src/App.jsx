// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter and Routes
import Navbar from './assets/sections/Navbar';
import HeroSection from './assets/sections/HeroSection';
import LiteratureSection from './assets/sections/LiteratureSection';
import ResearchGapSection from './assets/sections/ResearchGapSection';
import ProblemSolutionSection from './assets/sections/ProblemSolutionSection';
import ResearchObjectivesSection from './assets/sections/ResearchObjectivesSection';
import MethodologySection from './assets/sections/MethodologySection';
import TechnologiesSection from './assets/sections/TechnologiesSection';
import TimelineSection from './assets/sections/TimelineSection';
import DocumentsSection from './assets/sections/DocumentsSection';
import PresentationsSection from './assets/sections/PresentationsSection';
import TeamSection from './assets/sections/TeamSection';
import AppStore from './assets/sections/AppStore';
import Contactus from './assets/sections/Contactus';

const App = () => {
  return (
    <Router>
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
        <DocumentsSection />
        <PresentationsSection />
        <TeamSection />
        <AppStore />
        <Contactus />
      </>
    </Router>
  );
};


export default App;
