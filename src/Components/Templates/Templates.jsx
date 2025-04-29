import React from 'react';
import './Templates.css';

const TEMPLATES = [
  {
    title: 'Modern Resume',
    img: 'https://via.placeholder.com/300x400?text=Modern+Template',
  },
  {
    title: 'Creative Resume',
    img: 'https://via.placeholder.com/300x400?text=Creative+Template',
  },
  {
    title: 'Professional Resume',
    img: 'https://via.placeholder.com/300x400?text=Professional+Template',
  },
];

const Templates = () => (
  <section className="templates">
    <h2 className="templates-title">Choose from Stunning Templates</h2>
    <p className="templates-subtitle">
      Handcrafted designs tailored to make your resume stand out.
    </p>
    <div className="templates-buttons">
      <button className="btn-primary">Create Resume</button>
      <button className="btn-secondary">View Templates</button>
    </div>

    <div className="templates-grid">
      {TEMPLATES.map((template) => (
        <div key={template.title} className="template-card">
          <img src={template.img} alt={template.title} className="template-image" />
          <h3 className="template-name">{template.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Templates;
