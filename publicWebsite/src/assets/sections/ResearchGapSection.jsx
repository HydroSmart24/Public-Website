// src/sections/ResearchGapSection.jsx
import React from 'react';

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
    <section className="py-[4rem] px-[135px] bg-white text-[#464646]">
      <h2 className="font-poppins text-[2.5rem] font-medium text-[#464646] mb-2">Research Gap</h2>
      <p className="font-poppins text-base text-[#646464] mb-[6rem]">
        These Are The Identified Research Gaps In Most Of The Researches
      </p>
      <div className="flex justify-around gap-[2rem] flex-wrap">
        {gaps.map((gap, index) => (
          <div key={index} className="bg-white border-2 border-[#1089b8] rounded-[15px] w-[30%] p-[3rem] text-center shadow-md transition-transform duration-300 relative">
            <div className="absolute -top-[40px] left-1/2 transform -translate-x-1/2 bg-[#E8E8E8] rounded-full w-[80px] h-[80px] flex items-center justify-center shadow-md">
              <img src={gap.icon} alt={`${gap.title} Icon`} className="w-[40px] h-[40px]" />
            </div>
            <h3 className="font-poppins text-[1.2rem] font-semibold mt-[2rem] mb-1 text-[#464646]">{gap.title}</h3>
            <p className="font-poppins text-[0.9rem] text-[#646464] leading-6 text-center">
              {gap.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchGapSection;
