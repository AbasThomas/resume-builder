import React, { useState } from 'react';
import './Templates.css';

// placeholder images – replace with your real screenshots
const TEMPLATES = [
  {
    title: 'Executive',
    description:
      'Perfect for senior professionals and executives looking to highlight leadership experience.',
    img: 'https://via.placeholder.com/300x400?text=Executive+Template',
    badge: 'Popular',
    categories: ['All Templates', 'Professional', 'Modern'],
  },
  {
    title: 'Creative Pro',
    description:
      'Designed for creative professionals who want to showcase their portfolio and skills.',
    img: 'https://via.placeholder.com/300x400?text=Creative+Pro',
    categories: ['All Templates', 'Creative', 'Modern'],
  },
  {
    title: 'Minimalist',
    description:
      'Clean and simple design that puts focus on your content and professional experience.',
    img: 'https://via.placeholder.com/300x400?text=Minimalist',
    badge: 'New',
    categories: ['All Templates', 'Simple'],
  },
];

const CATEGORIES = [
  'All Templates',
  'Creative',
  'Professional',
  'Simple',
  'Modern',
];

export default function Templates() {
  const [active, setActive] = useState('All Templates');

  const visible = TEMPLATES.filter((t) =>
    t.categories.includes(active)
  );

  return (
    <section className="templates">
      <div className="templates-header">
        <h2>Professional Resume Templates</h2>
        <p>Choose from our collection of ATS-friendly templates designed to impress employers</p>
      </div>

      <div className="templates-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={cat === active ? 'tab active' : 'tab'}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="templates-grid">
        {visible.map((t) => (
          <div key={t.title} className="template-card">
            {t.badge && <span className="badge">{t.badge}</span>}
            <img
              src={t.img}
              alt={t.title}
              className="template-image"
            />
            <div className="template-info">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <button className="use-btn">Use This Template</button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <a href="#all-templates">View all templates →</a>
      </div>
    </section>
  );
}
