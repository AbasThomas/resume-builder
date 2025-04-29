import React from 'react';
import './Features.css';


const Features = () =>{ 
    const Feature = [
        {
          title: 'Drag-and-Drop Editor',
          description: 'Easily manage sections, add or remove content with our intuitive drag-and-drop interface.',
        },
        {
          title: 'Real-Time Preview',
          description: 'See changes instantly as you type, ensuring your resume looks perfect before downloading.',
        },
        {
          title: 'Multiple Themes',
          description: 'Choose from various professional themes and color schemes to match your personal style.',
        },
        {
          title: 'AI Content Suggestions',
          description: 'Get intelligent suggestions for skills, job descriptions, and achievements based on your input.',
        },
        {
          title: 'Multiple Export Formats',
          description: 'Download your resume in multiple formats: PDF, DOCX, TXT.',
        },
        {
          title: 'ATS-Friendly Templates',
          description: 'Create resumes that pass Applicant Tracking Systems used by hiring teams.',
        },
      ];
      
    return(
  <section className="features">
    <h2 className="features-title">
      Powerful Features to Build Your Perfect Resume
    </h2>
    <p className="features-subtitle">
      Our intuitive tool is here to make resume creation simple, fast, and effective.
    </p>
    <div className="features-grid">
      {Feature.map((item) => (
        <div key={item.title} className="feature-card">
          <div className="feature-icon" />
          <h3 className="feature-card-title">{item.title}</h3>
          <p className="feature-card-desc">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);
}
export default Features;
