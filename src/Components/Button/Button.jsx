import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'; // 👈 Create this for styles

const Button = ({ children, onClick, to, type = 'button', variant = 'primary', className = '' }) => {
  const classes = `btn ${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
