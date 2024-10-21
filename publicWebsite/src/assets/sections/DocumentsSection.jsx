// src/sections/DocumentsSection.jsx
import React from 'react';
import '../styles/DocumentsSection.css'; // Import CSS for styling

const documents = [
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
  {
    title: 'Final Report',
    submissionDate: '23/02/2024',
    categories: ['Individual', 'Group'],
  },
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
  { title: 'Topic Assessment', submissionDate: '23/02/2024', group: 'Group' },
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
              Submitted On {doc.submissionDate}
            </p>
            {doc.categories ? (
              doc.categories.map((category) => (
                <div key={category} className="category-row">
                  <span className="category-label">{category}</span>
                  <button className="download-button">
                    Download <span className="arrow">→</span>
                  </button>
                </div>
              ))
            ) : (
              <div className="category-row">
                <span className="category-label">{doc.group}</span>
                <button className="download-button">
                  Download <span className="arrow">→</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsSection;
