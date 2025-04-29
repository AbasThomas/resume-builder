import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import resumeImage from '../../assets/resume-sample.png'; // use your own image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Craft Your Future,<br />
            <span className="highlight">One Page at a Time</span>
          </h1>
          <p>
            Create professional, eye-catching resumes in minutes with our intuitive builder.
            Stand out from the crowd and land your dream job.
          </p>
          <div className="hero-buttons">
            <Link to="/get-started" className="btn primary">Create Resume →</Link>
            <Link to="/templates" className="btn secondary">View Templates</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={resumeImage} alt="Resume Preview" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
