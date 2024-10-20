// src/sections/TeamSection.jsx
import React from 'react';

const teamMembers = [
  { name: 'Dr.Kalpani Manthunga', role: 'Supervisor', image: '/src/assets/images/members/kalpani.jpg' },
  { name: 'Mr.Thushithanjana Thilakarathna', role: 'Co-Supervisor', image: '/src/assets/images/members/thusith.jpg' },
  { name: 'Mr.Samitha Vidanarachchi', role: 'Co-Supervisor', image: '/src/assets/images/members/samitha.png' },
  { name: 'Dissanayake D.M.S.D.K', role: 'Group Leader', image: '/src/assets/images/members/sandali.png' },
  { name: 'Jayarathna M.K.G', role: 'Group Member', image: '' },
  { name: 'Sahabandu M.', role: 'Group Member', image: '' },
  { name: 'Bandara T.M.K.D', role: 'Group Member', image: '' },
];

const formatName = (name) => {
  const parts = name.split(' ');
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
};

const TeamSection = () => {
  return (
    <section className="py-20 px-36 bg-white text-gray-700">
      <h2 className="text-4xl font-medium mb-6 text-center">About Us</h2>
      <hr className="border-t-2 border-gray-300 w-1/5 mx-auto mb-10" />
      <h2 className="text-4xl font-medium mb-20 text-center">Meet Our Team</h2>

      {/* First row with 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {teamMembers.slice(0, 3).map((member, index) => {
          const { firstName, lastName } = formatName(member.name);
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-[500px] max-w-[300px] mx-auto">
              <div
                className="h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${member.image || ''})`,
                  backgroundColor: member.image ? 'transparent' : '#e0e0e0',
                }}
              ></div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#1089b8] mb-2">{firstName} <br /> {lastName}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">{member.role}</p>
                <p className="text-sm text-gray-500">
                  Sri Lanka Institute Of Information Technology <br />
                  <strong>Department:</strong> Information Systems Engineering
                </p>
                <div className="mt-4">
                  <a href="#" className="text-[#1089b8] text-sm mr-4 hover:underline">LinkedIn</a>
                  <a href="#" className="text-[#1089b8] text-sm hover:underline">Email</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Second row with 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {teamMembers.slice(3).map((member, index) => {
          const { firstName, lastName } = formatName(member.name);
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-[500px] max-w-[300px] mx-auto">
              <div
                className="h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${member.image || ''})`,
                  backgroundColor: member.image ? 'transparent' : '#e0e0e0',
                }}
              ></div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#1089b8] mb-2">{firstName} <br /> {lastName}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">{member.role}</p>
                <p className="text-sm text-gray-500">
                  Sri Lanka Institute Of Information Technology <br />
                  <strong>Department:</strong> Information Systems Engineering
                </p>
                <div className="mt-4">
                  <a href="#" className="text-[#1089b8] text-sm mr-4 hover:underline">LinkedIn</a>
                  <a href="#" className="text-[#1089b8] text-sm hover:underline">Email</a>
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
