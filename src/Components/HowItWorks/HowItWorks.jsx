import React from 'react';
import './HowItWorks.css';

const STEPS = [
  {
    step: '1',
    title: 'Choose a Template',
    description: 'Select a professionally designed resume template that fits your industry and style.',
  },
  {
    step: '2',
    title: 'Fill in Your Details',
    description: 'Add your personal information, work experience, skills, and education with easy-to-use forms.',
  },
  {
    step: '3',
    title: 'Customize & Download',
    description: 'Adjust fonts, colors, and layout to your liking, then download your polished resume.',
  },
];

const HowItWorks = () => (
  <section className="how-it-works">
    <h2 className="how-title">How It Works</h2>
    <p className="how-subtitle">Follow these simple steps to create your perfect resume.</p>
    <div className="how-steps">
      {STEPS.map((item) => (
        <div key={item.step} className="how-step">
          <div className="step-number">{item.step}</div>
          <h3 className="step-title">{item.title}</h3>
          <p className="step-description">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
