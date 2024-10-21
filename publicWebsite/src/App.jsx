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
import './assets/styles/Navbar.css';
import './assets/styles/HeroSection.css';
import './assets/styles/LiteratureSection.css';
import './assets/styles/ResearchGapSection.css';
import './assets/styles/ProblemSolutionSection.css';
import './assets/styles/ResearchObjectivesSection.css';
import './assets/styles/MethodologySection.css';
import './assets/styles/TechnologiesSection.css';
import './assets/styles/TimelineSection.css';
import './assets/styles/DocumentsSection.css';
import './assets/styles/TeamSection.css';

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
