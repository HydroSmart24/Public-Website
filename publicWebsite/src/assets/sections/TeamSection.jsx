// src/sections/TeamSection.jsx
import React from 'react';
import kalpani from '../images/members/kalpani.jpg';
import thusith from '../images/members/thusith.jpg';
import samitha from '../images/members/samitha.png';
import sandali from '../images/members/sandali.png';
import kanishka from '../images/members/kanishka.jpg';
import mehara from '../images/members/mehara.jpg';
import kulanaka from '../images/members/kulanaka.jpg';

const teamMembers = [
  { name: 'Dr.Kalpani Manthunga', role: 'Supervisor', image: kalpani },
  { name: 'Mr.Thushithanjana Thilakarathna', role: 'Co-Supervisor', image: thusith },
  { name: 'Mr.Samitha Vidanarachchi', role: 'Co-Supervisor', image: samitha },
  { name: 'Dissanayake D.M.S.D.K', role: 'Group Leader', image: sandali },
  { name: 'Jayarathna M.K.G', role: 'Group Member', image: kanishka },
  { name: 'Sahabandu M.', role: 'Group Member', image: mehara },
  { name: 'Bandara T.M.K.D', role: 'Group Member', image: kulanaka },
];

const formatName = (name) => {
  const parts = name.split(' ');
  const firstName = parts[0];
  const lastName = parts.slice(1).join(' ');
  return { firstName, lastName };
};

const TeamSection = () => {
  return (
    <section id="aboutus" className="py-32 px-36 bg-white text-gray-700">
      <h2 className="font-poppins text-lg font-medium text-[#1089B8]">About Us</h2>
      <hr className="w-36 h-0.5 bg-[#1089B8] my-2 border-none" />
      <h2 className="font-poppins text-4xl font-medium mb-16">Meet Our Team</h2>

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
