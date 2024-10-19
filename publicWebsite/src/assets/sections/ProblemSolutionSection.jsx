// src/sections/ProblemSolutionSection.jsx
import React from 'react';
import '../styles/ProblemSolutionSection.css'; // Import the CSS file.

const ProblemSolutionSection = () => {
  return (
    <section className="problem-solution-section">
      <h2 className="probsolv-title">Research Problem & Solution</h2>

      {/* Proposed Problem - Full Width */}
      <div className="full-width">
        <h3 className="subsection-title">Proposed Problem</h3>
        <p className="description">
          Households In Rural Sri Lanka Rely On Rainwater Harvesting Tanks (RWHTs) Due To Limited Access To Purified Water. 
          However, These Tanks Lack Proper Monitoring For Water Levels And Quality, Leading To Inefficient Management And 
          Health Risks From Contaminated Water. Predicting How Long Stored Water Will Last Is Difficult, Especially With 
          Unpredictable Rainfall. Poor Communication With Water Distributors Causes Delays In Deliveries, And Manually 
          Transporting Water From Neighboring Tanks Is Challenging. This Research Proposes An IoT-Based Solution To Monitor 
          Water Availability, Forecast Consumption, Assess Water Quality, And Streamline Water Transfer And Delivery Systems 
          For Better Water Management.
        </p>
      </div>

      {/* Video and Solution in One Row */}
      <div className="solution-video-container">
        <div className="video-column">
          <div className="video-placeholder">
            <div className="play-button">▶</div>
          </div>
          <p className="video-caption">Product Demonstration – Solution</p>
        </div>

        <div className="solution-text">
          <h3 className="subsection-title">Proposed Solution</h3>
          <p className="description">
            The Proposed Solution Offers An IoT-Integrated Mobile Application For Rainwater Harvesting Tanks, Ensuring Real-Time 
            Monitoring And Management. It Allows Households To Monitor Water Availability, Consumption, PH Levels, Turbidity, And 
            Even Detect Floating Debris Using The YOLOv8 Object Detection Model. The System Dynamically Predicts Water Consumption 
            With Time Series Forecasting Models And Advises Users On Managing Rainfall Efficiently By Indicating When To Direct Water 
            Through Gutters Or Into Tanks.
          </p>
        </div>
      </div>

      {/* Full Width Final Part of Proposed Solution */}
      <div className="full-width">
        <p className="description">
          Households Can Make Water Requests From Distributors Through The App, With Requests Prioritized Using The Timsort 
          Algorithm. The Research Also Introduces A Network Of Connected Tanks That Enables Seamless Water Transfers Among 
          Households, Controlled Through Motorized Valves And Accessible Via The Mobile Interface. This Comprehensive Solution 
          Aims To Ensure Efficient Water Management, Improve Water Quality, And Streamline Communication Between Households And 
          Water Distributors.
        </p>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
