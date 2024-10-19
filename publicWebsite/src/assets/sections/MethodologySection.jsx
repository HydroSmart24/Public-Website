// src/sections/MethodologySection.jsx
import React from 'react';
import '../styles/MethodologySection.css'; // Import CSS for styling
import overview from '../images/overview.png'; // Import the image

const MethodologySection = () => {
  return (
    <section className="methodology-section">
      <div className="methodology-content">
        <h2 className="methodology-title">Methodology</h2>
        <p className="methodology-description">
          The proposed research provides an overall mobile application-based solution for 
          rainwater harvesting tanks as per the illustration in Fig 1. The users are able 
          to monitor the real-time availability and also the PH and turbidity levels of water 
          unique to their tank. By predicting the household consumption, the system shows how 
          long the current availability will last. The real-time video footage of the tank is 
          captured from a camera to notify users when debris is detected. To further improve 
          the water quality, the users are notified when PH and turbidity levels of water exceed 
          the suitable levels for consumption.
          Another feature provided by the system is that the users will be notified about the 
          number of days that they need to send water from the gutter into the tank by predicting 
          the rainfall pattern and analyzing it with the availability of the water. When households 
          run out of tank water, they can easily request water from the purified water distributor 
          through the mobile application. The distributor can manage all the requests through the 
          app and deliver water accordingly. This research also proposes a solution to transfer 
          water among a network of tanks. From the motors and valves connected through the internet, 
          automatic water distribution among these connected pipes can be done after giving the 
          commands from the app.
        </p>
      </div>

      <div className="methodology-image-container">
        <img src={overview} alt="System Architecture Diagram" className="methodology-image" />
        <p className="image-caption">Fig 1. High Level Architecture of The System</p>
      </div>
    </section>
  );
};

export default MethodologySection;
