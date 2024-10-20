// src/sections/DocumentsSection.jsx
import React from 'react';

const documents = [
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
];

const PresenationsSection = () => {
  return (
    <section className="py-[5rem] px-[135px] bg-[#eaf7fc] text-[#464646]">
      <h2 className="font-poppins text-[2.5rem] font-medium mb-2">Presentations</h2>
      <p className="font-poppins text-base text-[#646464] mb-[5rem]">
        Please Find All Presentations Related To This Project Below.
      </p>
      <div className="grid grid-cols-3 gap-[2rem]">
        {documents.map((doc, index) => (
          <div key={index} className="bg-white rounded-[15px] p-[1.5rem] shadow-md flex flex-col justify-between min-h-[200px]">
            <h3 className="font-poppins text-[1.2rem] font-semibold text-[#1089B8] mb-2">{doc.title}</h3>
            <p className="font-poppins text-sm text-[#646464] mb-2">
              Submitted On {doc.submissionDate}
            </p>
            {doc.categories ? (
              doc.categories.map((category) => (
                <div key={category} className="flex justify-between items-center mb-2">
                  <span className="font-poppins text-sm text-[#464646]">{category}</span>
                  <button className="bg-[#1089B8] text-white font-poppins text-xs rounded-md py-1 px-2 flex items-center justify-center transition-colors duration-300 hover:bg-[#0a6c90]">
                    Download <span className="ml-1 text-xl">→</span>
                  </button>
                </div>
              ))
            ) : (
              <div className="flex justify-between items-center mb-2">
                <span className="font-poppins text-sm text-[#464646]">{doc.group}</span>
                <button className="bg-[#1089B8] text-white font-poppins text-xs rounded-md py-1 px-2 flex items-center justify-center transition-colors duration-300 hover:bg-[#0a6c90]">
                  Download <span className="ml-1 text-xl">→</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PresenationsSection;
