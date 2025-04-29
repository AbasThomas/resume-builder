import React, { useState } from 'react';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    question: 'How do I choose the right template?',
    answer:
      'Browse through our curated categories and click “Use This Template” on any design you like. You can switch at any time before downloading.',
  },
  {
    question: 'Can I export in different formats?',
    answer:
      'Yes—download your resume as PDF, DOCX, or TXT. Pro and Premium plans unlock DOCX export and advanced formatting options.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use industry-standard encryption to keep your information private and never share it with third parties.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard), PayPal, and bank transfer for annual plans.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes—downgrade or cancel your subscription at any time from your account dashboard. You’ll retain access through your current billing period.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Have questions? We’ve got answers to the most common inquiries.
      </p>

      <div className="faq-list">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${openIndex === i ? 'open' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              {item.question}
              <span className="arrow">{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
