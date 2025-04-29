import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SOCIAL_TOP = [
  { href: '#', icon: <FaFacebookF /> },
  { href: '#', icon: <FaTwitter /> },
  { href: '#', icon: <FaInstagram /> },
  { href: '#', icon: <FaLinkedinIn /> },
];

const SOCIAL_BOTTOM = [
  { href: '#', icon: <FaFacebookF /> },
  { href: '#', icon: <FaTwitter /> },
  { href: '#', icon: <FaInstagram /> },
  { href: '#', icon: <FaLinkedinIn /> },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Row */}
      <div className="footer-main">
        <div className="footer-column brand">
          <h3 className="footer-logo">Snap Resume</h3>
          <p>
            Create an eye-catching resume in minutes  
            with our easy-to-use builder.
          </p>
          <div className="footer-social footer-social-top">
            {SOCIAL_TOP.map((s, i) => (
              <a key={i} href={s.href} aria-label={`social-${i}`}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Other columns unchanged */}
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#templates">Templates</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#cover-letters">Cover Letters</a></li>
            <li><a href="#linkedin">LinkedIn Profiles</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#resume-examples">Resume Examples</a></li>
            <li><a href="#cover-blog">Cover Blog</a></li>
            <li><a href="#job-search">Job Search Tips</a></li>
            <li><a href="#interview-prep">Interview Prep</a></li>
            <li><a href="#career-resources">Career Resources</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#help">Help Center</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Snap Resume. All rights reserved.</p>
        <div className="footer-social footer-social-bottom">
          {SOCIAL_BOTTOM.map((s, i) => (
            <a key={i} href={s.href} aria-label={`social-${i}`}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
