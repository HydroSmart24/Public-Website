// src/sections/MethodologySection.jsx
import React from 'react';
import overview from '../images/overview.png'; // Import the image

const MethodologySection = () => {
  return (
    <section className="flex gap-[5rem] p-[5rem] px-[135px] bg-white text-[#464646] items-start">
      <div className="flex-1.8 max-w-[55%]">
        <h2 className="font-poppins text-[2.5rem] font-medium mb-[4rem] text-[#464646]">Methodology</h2>
        <p className="font-poppins text-base leading-6 text-[#646464] mb-[1.5rem] text-justify">
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

      <div className="flex-1.2 flex flex-col items-center relative mt-[5rem] w-[120%] left-[-3rem]">
        <img src={overview} alt="System Architecture Diagram" className="max-w-full h-auto" />
        <p className="font-poppins text-sm text-[#A2A1A1] mt-[0.9rem] text-center">Fig 1. High Level Architecture of The System</p>
      </div>
    </section>
  );
};

export default MethodologySection;
