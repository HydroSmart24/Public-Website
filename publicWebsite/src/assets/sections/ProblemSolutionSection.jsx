// src/sections/ProblemSolutionSection.jsx
import React from 'react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-[5rem] px-[135px] bg-white text-[#464646]">
      <h2 className="font-poppins text-[2.5rem] font-medium mb-[3rem] text-[#464646]">
        Research Problem & Solution
      </h2>

      {/* Proposed Problem - Full Width */}
      <div className="w-full mb-[3rem]">
        <h3 className="font-poppins text-[1.6rem] font-medium mb-2 text-[#1089b8]">Proposed Problem</h3>
        <p className="font-poppins text-base leading-6 text-[#646464] text-justify mb-[1.5rem]">
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
      <div className="flex gap-[5rem] items-start mb-[3rem]">
      <div className="flex-1.4 flex flex-col items-center">
        <div className="w-[450px] h-[250px] bg-[#e8e8e8] flex items-center justify-center rounded-lg shadow-md">
          {/* YouTube video iframe */}
          <iframe 
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/sIsvOXDwUyM?si=V0-jHS7Wc6aJXQIf" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            className="w-full h-full rounded-lg">
          </iframe>
        </div>
        <p className="font-poppins text-sm text-[#A2A1A1] mt-2 text-center">
          Product Demonstration – Solution
        </p>
      </div>


        <div className="flex-2">
          <h3 className="font-poppins text-[1.6rem] font-medium mb-2 text-[#1089b8]">Proposed Solution</h3>
          <p className="font-poppins text-base leading-6 text-[#646464] mb-[1.5rem]">
            The Proposed Solution Offers An IoT-Integrated Mobile Application For Rainwater Harvesting Tanks, Ensuring Real-Time
            Monitoring And Management. It Allows Households To Monitor Water Availability, Consumption, PH Levels, Turbidity, And
            Even Detect Floating Debris Using The YOLOv8 Object Detection Model. The System Dynamically Predicts Water Consumption
            With Time Series Forecasting Models And Advises Users On Managing Rainfall Efficiently By Indicating When To Direct Water
            Through Gutters Or Into Tanks.
          </p>
        </div>
      </div>

      {/* Full Width Final Part of Proposed Solution */}
      <div className="w-full mb-[3rem]">
        <p className="font-poppins text-base leading-6 text-[#646464] mb-[1.5rem]">
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
