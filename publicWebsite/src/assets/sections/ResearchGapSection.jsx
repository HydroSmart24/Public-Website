// src/sections/ResearchGapSection.jsx
import React from 'react';
import '../styles/ResearchGapSection.css';

// Import SVG paths
import IoTIcon from '../icons/iot.svg';
import ForecastingIcon from '../icons/graph.svg';
import DistributionIcon from '../icons/connect.svg';

const ResearchGapSection = () => {
  const gaps = [
    {
      icon: IoTIcon, 
      title: 'Absence Of IoT Enabled Solutions',
      description:
        'Although IoT is increasingly used in other domains, there is a lack of integrated, automated solutions for RWHTs that include features like object detection and water quality analysis, which are essential for efficient management.',
    },
    {
      icon: ForecastingIcon,
      title: 'Lack Of Real-Time Forecasting And Predictive Capabilities',
      description:
        'While existing water management solutions provide static monitoring, they do not offer real-time forecasting for water consumption or rainfall. This limits the ability to predict future water availability accurately and prevents proactive water management.',
    },
    {
      icon: DistributionIcon,
      title: 'Inefficiencies In Water Transfer And Distribution Networks',
      description:
        'Current systems lack frameworks for seamless water sharing among households with connected tanks, leading to inefficient use of available resources. Additionally, the absence of an optimized delivery system for water distributors creates delays and resource wastage.',
    },
  ];

  return (
    <section className="research-gap-section">
      <h2 className="research-title">Research Gap</h2>
      <p className="research-subtitle">
        These Are The Identified Research Gaps In Most Of The Researches
      </p>
      <div className="gap-cards-container">
        {gaps.map((gap, index) => (
          <div key={index} className="gap-card">
            <div className="gap-icon">
              <img src={gap.icon} alt={`${gap.title} Icon`} />
            </div>
            <h3 className="gap-title">{gap.title}</h3>
            <p className="gap-description">{gap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGapSection;
