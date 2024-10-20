// src/sections/ResearchObjectivesSection.jsx
import React from 'react';

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
    <section className="py-16 px-36 bg-white text-[#464646]">
      <h2 className="font-poppins text-4xl font-medium mb-16">Research Objectives</h2>
      <p className="font-poppins text-lg text-[#1089b8] mb-16 text-center font-semibold">
        Mobile Application To Enhance And Manage <br /> The Smart Rainwater Harvesting Tanks In Rural Areas
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {objectives.map((objective) => (
          <div key={objective.id} className="relative bg-white border-2 border-[#1089b8] rounded-lg p-8 shadow-md">
            <span className="absolute top-[-15px] right-[-15px] bg-[#1089b8] text-white w-10 h-10 flex items-center justify-center rounded-full font-poppins text-lg font-semibold shadow-md">
              {objective.id}
            </span>
            <h3 className="font-poppins text-xl font-semibold mb-2 text-[#464646]">{objective.title}</h3>
            <p className="font-poppins text-base leading-6 text-[#646464] text-justify">{objective.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchObjectivesSection;
