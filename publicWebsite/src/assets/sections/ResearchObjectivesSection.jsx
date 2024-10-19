// src/sections/ResearchObjectivesSection.jsx
import React from 'react';
import '../styles/ResearchObjectivesSection.css'; // Import CSS for styling

const objectives = [
  {
    id: 1,
    title: 'Detecting Water Quality To Check The Consumability Of Water',
    description:
      'The system assesses the PH and turbidity levels in the water to determine if it is safe for consumption. An object detection algorithm identifies floating debris inside the tank, ensuring that users are notified if the water becomes unfit for drinking.',
  },
  {
    id: 2,
    title: 'Identify Water Consumption And Give The Availability Lasting Period',
    description:
      'Using real-time data from IoT sensors and predictive models, the system tracks household water usage and forecasts future consumption. It compares the forecasted consumption with the current water availability to estimate how many days the water will last.',
  },
  {
    id: 3,
    title: 'Manage The Distribution Of Water Among Households',
    description:
      'The proposed solution introduces a network of connected tanks, enabling efficient water sharing between households. Households can request water from neighboring tanks through the mobile app, and automated motorized valves facilitate seamless water transfer.',
  },
  {
    id: 4,
    title: 'Optimize The Days To Collect Rainwater And Manage Purified Water Distribution',
    description:
      'The system uses time series forecasting to predict rainfall patterns, helping households determine the best days to collect rainwater. It streamlines communication with distributors, enabling users to request purified water through the app. Deliveries are prioritized to ensure timely fulfillment.',
  },
];

const ResearchObjectivesSection = () => {
  return (
    <section className="research-objectives-section">
      <h2 className="rechOb-title">Research Objectives</h2>
      <p className="mainOb">
        Mobile Application To Enhance And Manage <br/> The Smart Rainwater Harvesting Tanks In Rural Areas
      </p>
      <div className="objectives-container">
        {objectives.map((objective) => (
          <div key={objective.id} className="objective-card">
            <span className="objective-badge">{objective.id}</span>
            <h3 className="objective-title">{objective.title}</h3>
            <p className="objective-description">{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchObjectivesSection;