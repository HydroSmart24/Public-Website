// src/sections/TimelineSection.jsx
import React from 'react';

const milestones = [
  { title: 'Project Proposal', description: 'A project proposal is presented to get your project approved.', date: 'Feb 2024' },
  { title: 'Progress Presentation 1', description: 'Reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.', date: 'May 2024' },
  { title: 'Research Paper', description: 'A research paper is submitted to document findings and methodologies for the project.', date: 'May 2024' },
  { title: 'Final Report', description: 'A report containing the overall project ion in-detail explanation.', date: 'Aug 2024' },
  { title: 'Progress Presentation 2', description: 'Reviews the 90% completion status and demonstration of the project.', date: 'Sep 2024' },
  { title: 'Final Presentation And Viva', description: 'The final presentation and viva are conducted to present the entire project outcome.', date: 'Oct 2024' },
];

const TimelineSection = () => {
  return (
    <section id="milestones" className="py-20 px-[135px] bg-white text-gray-700">
    <h2 className="font-poppins text-lg font-medium text-[#1089B8]">Milestones</h2>
    <hr className="w-36 h-0.5 bg-[#1089B8] my-2 border-none" />
      <h2 className="font-poppins text-4xl font-medium mb-16">Project Timeline</h2>
      <div className="relative flex flex-col items-center gap-12 md:gap-16">
        {/* Center vertical timeline line */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-transparent border-r-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>
        
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`relative w-full md:w-1/2 flex justify-center ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}
          >
            {/* Milestone Card */}
            <div className="relative flex items-center bg-gray-50 rounded-lg shadow-lg p-8 justify-between w-[85%] md:mx-12">
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-[#1089b8] mb-2">{milestone.title}</h3>
                <p className="text-sm text-gray-600 mr-6">{milestone.description}</p>
              </div>
              <div className="flex flex-col items-center border-l-2 border-gray-200 pl-6">
                <span className="text-lg font-semibold text-gray-700">{milestone.date.split(' ')[0]}</span>
                <span className="text-gray-500">{milestone.date.split(' ')[1]}</span>
              </div>
            </div>

            {/* Blue connecting lines, starting from the dotted timeline */}
            <div className={`hidden md:block absolute top-1/2 h-px bg-blue-500 ${index % 2 === 0 ? 'right-[0rem] w-[calc(4rem)]' : 'left-[0rem] w-[calc(4rem)]'}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
