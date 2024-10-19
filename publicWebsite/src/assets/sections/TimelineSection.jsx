// src/sections/TimelineSection.jsx
import React from 'react';
import '../styles/TimelineSection.css'; // Import CSS for styling

const milestones = [
  { title: 'Project Proposal', description: 'A project proposal is presented to potential sponsors or clients to receive funding or get your project approved.', date: 'Feb 2024' },
  { title: 'Research Paper', description: 'A research paper is submitted to document findings and methodologies for the project.', date: 'Feb 2024' },
  { title: 'Progress Presentation 1', description: 'Reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.', date: 'Feb 2024' },
  { title: 'Progress Presentation 2', description: 'Reviews the 90% completion status demonstration of the project which describes the project as a whole.', date: 'Feb 2024' },
  { title: 'Final Presentation And Viva', description: 'The final presentation and viva are conducted to present the entire project outcome.', date: 'Feb 2024' },
  { title: 'Final Report', description: 'Reviews the 90% completion status and demonstration of the project.', date: 'Feb 2024' },
];

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Project Timeline</h2>
      <div className="timeline-container">
        {milestones.map((milestone, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="text-content">
                <h3 className="milestone-title">{milestone.title}</h3>
                <p className="milestone-description">{milestone.description}</p>
              </div>
              <div className="date-content">
                <span className="month">{milestone.date.split(' ')[0]}</span>
                <span className="year">{milestone.date.split(' ')[1]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
