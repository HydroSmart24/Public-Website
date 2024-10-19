// src/sections/LiteratureSection.jsx
import React from 'react';
import '../styles/LiteratureSection.css'; // Import the CSS for styling.

const LiteratureSection = () => {
  return (
    <section className="literature-section">
      <h2 className="section-title">Project Scope</h2>
      <hr className="section-divider" />
      <h3 className="literature-title">Literature Survey</h3>

      <p className="literature-content">
        Rainwater Harvesting Tanks (RWHTs) are essential in rural Sri Lanka to address water scarcity, 
        but they lack efficient monitoring systems. IoT-based solutions have been explored to tackle 
        similar challenges. Gautam et al. proposed a system using ultrasonic sensors and Support Vector 
        Machines (SVM) for consumption forecasting <sup>[1]</sup> but did not address water quality monitoring. 
        Berardi et al. focused on network reliability in water distribution <sup>[2]</sup> but overlooked quality 
        assessments of stored water. Advanced tools like the YOLOv8 algorithm offer high precision in detecting 
        debris, ensuring water quality inside tanks. Pleños et al. utilized the Holt-Winters method for time series 
        forecasting <sup>[3]</sup>, though it lacked the flexibility of modern ensemble-based models. Building on these studies, 
        this research offers a comprehensive IoT-based solution that combines real-time monitoring, predictive analytics, 
        and water quality assessments to improve water management in rural areas.
      </p>

      <div className="references">
        <p><em>References</em></p>
        <ul>
          <li>
            [1] Gautam, A., Chakrabarti, D., Agarwal, S., et al. Monitoring and Forecasting Water 
            Consumption Using IoT Systems.
          </li>
          <li>
            [2] Berardi, L., Laucelli, D., et al. Reliability Analysis of Complex Water Distribution Systems.
          </li>
          <li>
            [3] Pleños, M. C. F. Time Series Forecasting Using Holt-Winters Exponential Smoothing.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LiteratureSection;
