// src/sections/TeamSection.jsx
import React from 'react';
import '../styles/TeamSection.css';

// Team members data with name and role
const teamMembers = [
  { name: 'Dr.Kalpani Manthunga', role: 'Supervisor', image: '/src/assets/images/members/kalpani.jpg' },
  { name: 'Mr.Thushithanjana Thilakarathna', role: 'Co-Supervisor', image: '/src/assets/images/members/thusith.jpg' },
  { name: 'Mr.Samitha Vidanarachchi', role: 'Co-Supervisor', image: '/src/assets/images/members/samitha.png' },
  { name: 'Dissanayake D.M.S.D.K', role: 'Group Leader', image: '/src/assets/images/members/sandali.png' },
  { name: 'Jayarathna M.K.G', role: 'Group Member', image: '' },
  { name: 'Sahabandu M.', role: 'Group Member', image: '' },
  { name: 'Bandara T.M.K.D', role: 'Group Member', image: '' },
];

// Helper function to split name into two lines
const formatName = (name) => {
  const parts = name.split(' ');
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
};

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="section-title">About Us</h2>
      <hr className="section-divider" />
      <h2 className="team-title">Meet Our Team</h2>

      {/* First row with 3 cards */}
      <div className="team-grid">
        {teamMembers.slice(0, 3).map((member, index) => {
          const { firstName, lastName } = formatName(member.name);
          return (
            <div key={index} className="team-card">
              <div
                className="team-image"
                style={{
                  backgroundImage: `url(${member.image || ''})`,
                  backgroundColor: member.image ? 'transparent' : '#e0e0e0',
                }}
              ></div>
              <div className="team-info">
                <h3 className="team-name">
                  <span>{firstName}</span> <br />
                  <span>{lastName}</span>
                </h3>
                <p className="team-role">{member.role}</p>
                <p className="team-department">
                  Sri Lanka Institute Of Information Technology <br />
                  <strong>Department:</strong> Information Systems Engineering
                </p>
                <div className="team-links">
                  <a href="#">LinkedIn</a>
                  <a href="#">Email</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Second row with 4 cards */}
      <div className="second-row">
        {teamMembers.slice(3).map((member, index) => {
          const { firstName, lastName } = formatName(member.name);
          return (
            <div key={index} className="team-card">
              <div
                className="team-image"
                style={{
                  backgroundImage: `url(${member.image || ''})`,
                  backgroundColor: member.image ? 'transparent' : '#e0e0e0',
                }}
              ></div>
              <div className="team-info">
                <h3 className="team-name">
                  <span>{firstName}</span> <br />
                  <span>{lastName}</span>
                </h3>
                <p className="team-role">{member.role}</p>
                <p className="team-department">
                  Sri Lanka Institute Of Information Technology <br />
                  <strong>Department:</strong> Information Systems Engineering
                </p>
                <div className="team-links">
                  <a href="#">LinkedIn</a>
                  <a href="#">Email</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
