import React from 'react';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta">
      <h2 className="cta-title">Ready to Create Your Professional Resume?</h2>
      <p className="cta-subtitle">
        Join thousands of professionals who have landed their dream jobs with our intuitive builder.
      </p>
      <div className="cta-actions">
        <button className="btn-primary">Create Resume</button>
        <button className="btn-secondary">View Templates</button>
      </div>
    </section>
  );
}
