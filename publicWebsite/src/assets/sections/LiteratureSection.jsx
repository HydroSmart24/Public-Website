// src/sections/LiteratureSection.jsx
import React from 'react';

const LiteratureSection = () => {
  return (
    <section id="scope" className="py-16 px-4 md:px-10 lg:px-20 mx-auto bg-white text-gray-700 z-50">
      <h2 className="font-poppins text-lg font-medium text-[#1089B8]">Project Scope</h2>
      <hr className="w-36 h-0.5 bg-[#1089B8] my-2 border-none" />
      <h3 className="font-poppins text-4xl font-medium mb-16">Literature Survey</h3>

      <p className="font-poppins text-base leading-7 mb-16">
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

      <div className="font-poppins text-sm text-gray-700 font-medium">
        <p className="italic text-sm mb-2">References</p>
        <ul className="list-none p-0">
          <li className="mb-2">
            [1] Gautam, A., Chakrabarti, D., Agarwal, S., et al. Monitoring and Forecasting Water 
            Consumption Using IoT Systems.
          </li>
          <li className="mb-2">
            [2] Berardi, L., Laucelli, D., et al. Reliability Analysis of Complex Water Distribution Systems.
          </li>
          <li className="mb-2">
            [3] Pleños, M. C. F. Time Series Forecasting Using Holt-Winters Exponential Smoothing.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LiteratureSection;
