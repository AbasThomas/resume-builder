import React from 'react';
import './Pricing.css';

const plans = [
  {
    title: 'Free',
    price: '$0',
    period: 'Forever',
    features: [
      '1 Resume Template',
      'PDF download',
      'Limited suggestions',
      'Mostly free features'
    ],
    button: 'Get Started Free',
    highlighted: false
  },
  {
    title: 'Pro',
    price: '$12',
    period: '/month',
    features: [
      '5 Resume Templates',
      'Advanced editor features',
      'DOC, DOCX downloads',
      'Advanced suggestions',
      'Full access to tools'
    ],
    button: 'Get Pro Plan',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    title: 'Premium',
    price: '$29',
    period: '/month',
    features: [
      'All Pro features',
      'Cover letter creator',
      'Unlock professional styling',
      '1-on-1 resume review'
    ],
    button: 'Get Premium',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section className="pricing">
      <h2 className="pricing-title">Simple, Transparent Pricing</h2>
      <p className="pricing-subtitle">Choose the plan that works best for your career needs</p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
          >
            {plan.badge && <div className="badge">{plan.badge}</div>}
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">
              <span>{plan.price}</span><small>{plan.period}</small>
            </p>
            <ul className="feature-list">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-btn">{plan.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
