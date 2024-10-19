// src/sections/TeamSection.jsx
import React from 'react';
import '../styles/TeamSection.css';

const teamMembers = [
  { name: 'Dr. Kalpani Manthunga', role: 'Supervisor', image: 'path/to/image1.jpg' },
  { name: 'Mr. Thushithanjana Thilakarathna', role: 'Co-Supervisor', image: 'path/to/image2.jpg' },
  { name: 'Mr. Samitha Vidanarachchi', role: 'Co-Supervisor', image: 'path/to/image3.jpg' },
  { name: 'Dissanayake D.M.S.D.K', role: 'Group Leader', image: 'path/to/image4.jpg' },
  { name: 'Jayarathna M.K.G', role: 'Group Member', image: '' },
  { name: 'Sahabandu M.', role: 'Group Member', image: '' },
  { name: 'Bandara T.M.K.D', role: 'Group Member', image: '' },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>

      {/* First row with 3 cards */}
      <div className="team-grid">
        {teamMembers.slice(0, 3).map((member, index) => (
          <div key={index} className="team-card">
            <div
              className="team-image"
              style={{ backgroundImage: `url(${member.image || ''})` }}
            ></div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
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
        ))}
      </div>

      {/* Second row with 4 cards */}
      <div className="second-row">
        {teamMembers.slice(3).map((member, index) => (
          <div key={index} className="team-card">
            <div
              className="team-image"
              style={{ backgroundImage: `url(${member.image || ''})` }}
            ></div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
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
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
