import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stat-item">
        <h2>5,000+</h2>
        <p>Resumes Created</p>
      </div>
      <div className="stat-item">
        <h2>98%</h2>
        <p>Interview Success Rate</p>
      </div>
      <div className="stat-item">
        <h2>50+</h2>
        <p>Professional Templates</p>
      </div>
      <div className="stat-item">
        <h2>4.9/5</h2>
        <p>Customer Satisfaction</p>
      </div>
    </section>
  );
};

export default Stats;
