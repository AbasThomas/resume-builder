import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Emma Johnson',
    title: 'HR Executive',
    text: 'I landed my dream job within 2 weeks of using Snap Resume. The templates are stunning and so easy to fill out.',
    image: 'https://via.placeholder.com/60x60.png?text=EJ',
  },
  {
    name: 'Michael Rodriguez',
    title: 'Software Developer',
    text: 'Building a resume was never this easy. I made a standout resume in under 10 minutes and started getting callbacks right away.',
    image: 'https://via.placeholder.com/60x60.png?text=MR',
  },
  {
    name: 'Saanvi Thompson',
    title: 'Project Manager',
    text: 'It was so professional and highlighted my achievements clearly. I recommend it to anyone job hunting!',
    image: 'https://via.placeholder.com/60x60.png?text=ST',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <p className="testimonials-subtitle">
        Join thousands of professionals who have landed their dream jobs with Snap Resume
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="quote">"{t.text}"</p>
            <div className="user-info">
              <img src={t.image} alt={t.name} className="user-image" />
              <div className="user-details">
                <div className="user-name">{t.name}</div>
                <div className="user-title">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
