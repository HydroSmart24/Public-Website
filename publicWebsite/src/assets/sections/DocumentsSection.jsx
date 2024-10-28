// src/sections/DocumentsSection.jsx
import React from 'react';
import '../styles/DocumentsSection.css'; // Import CSS for styling

const documents = [
  { title: 'Topic Assessment', submissionDate: 'Submitted On  23/02/2024', group: 'Group', link: 'https://drive.google.com/drive/folders/1ZIfS6drOZFZJQk_Dwgnp1k5kG7BQhvil?usp=sharing'},
  { title: 'Project Proposal', submissionDate: 'Submitted On  29/02/2024', group: 'Individual', link: 'https://drive.google.com/drive/folders/1z_u4gJT5KzHOYt7grGm2zzMp1RHjt4kW?usp=sharing' },
  { title: 'Status Document 1', submissionDate: 'Submitted On  06/05/2024', group: 'Individual', link: 'https://drive.google.com/drive/folders/1noa3yjnPDjh7zAPNDccHoafV-8Up8ODF?usp=sharing'},
  { title: 'Status Document 2', submissionDate: 'Submitted On  12/09/2024', group: 'Individual', link: 'https://drive.google.com/drive/folders/1ROcqnNlBu4_M4TJpkvAbvkuDVcY53DOQ?usp=sharing' },
  { title: 'Research Paper', submissionDate: 'Final Paper yet to be submitted', group: 'Group' },
  {
    title: 'Final Report',
    submissionDate: 'Yet to be submitted',
    categories: ['Individual', 'Group'],
  },
];

const DocumentsSection = () => {
  return (
    <section id="downloads" className="documents-section">
      <h2 className="section-title">Downloads</h2>
      <hr className="section-divider" />
      <h2 className="documents-title">Documents</h2>
      <p className="documents-subtitle">
        Please Find All Documents Related To This Project Below.
      </p>
      <div className="documents-grid">
        {documents.map((doc, index) => (
          <div key={index} className="document-card">
            <h3 className="document-title">{doc.title}</h3>
            <p className="document-date">
              {doc.submissionDate}
            </p>
            {doc.categories ? (
              doc.categories.map((category) => (
                <div key={category} className="category-row">
                  <span className="category-label">{category}</span>
                  <a href={doc.link} target="_blank" rel="noopener noreferrer">
                    <button className="download-button">
                      Download <span className="arrow">→</span>
                    </button>
                  </a>
                </div>
              ))
            ) : (
              <div className="category-row">
                <span className="category-label">{doc.group}</span>
                <a href={doc.link} target="_blank" rel="noopener noreferrer">
                  <button className="download-button">
                    Download <span className="arrow">→</span>
                  </button>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default DocumentsSection;
