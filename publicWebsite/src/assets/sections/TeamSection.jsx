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
  { name: 'Dr.Kalpani Manathunga', role: 'Supervisor', image: kalpani, linkedin: 'https://www.linkedin.com/in/kalpani-manathunga-0046ba91/?originalSubdomain=lk'  },
  { name: 'Mr.Thusithanjana Thilakarathna', role: 'Co-Supervisor', image: thusith, linkedin: 'https://www.linkedin.com/in/thusithanjana-thilakarathna-18858677/'},
  { name: 'Mr.Samitha Vidhanaarachchi', role: 'Co-Supervisor', image: samitha, linkedin: 'https://www.linkedin.com/in/samitha-vidhana-arachchi/'},
  { name: 'Dissanayake D.M.S.D.K', role: 'Group Leader', image: sandali, linkedin: 'https://www.linkedin.com/in/sandali-dissanayake-61b602203/' },
  { name: 'Jayarathna M.K.G', role: 'Group Member', image: kanishka, linkedin: 'https://www.linkedin.com/in/kanishkagj/' },
  { name: 'Sahabandu M.', role: 'Group Member', image: mehara, linkedin: 'https://www.linkedin.com/in/mehara-sahabandu-95487b214/' },
  { name: 'Bandara T.M.K.D', role: 'Group Member', image: kulanaka, linkedin: 'https://www.linkedin.com/in/kulanaka-bandara/'},
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
                  <strong>Department:</strong> Software Engineering
                </p>
                <div className="mt-4">
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1089b8] text-sm mr-4 hover:underline"
                  >LinkedIn</a>
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
                  <strong>Department:</strong> Software Engineering
                </p>
                <div className="mt-4">
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1089b8] text-sm mr-4 hover:underline"
                  >LinkedIn</a>
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
