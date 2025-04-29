import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css'; // 👈 Import CSS
import Button from '../Button/Button'; // Adjust the path if needed
import logo from '../../assets/resumebuilder.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
  <img src={logo} alt="Snap Resume logo" className="logoimg" />
</Link>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <Link to="/templates">Templates</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
         
        </nav>
        <div>
        <Link to="/signin"><Button className="Signin">Sign In</Button> </Link>
          <Link to="/get-started">
            <Button className="get-started-btn">Get Started</Button>
          </Link>
          </div>
        {/* Hamburger Menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/templates" onClick={() => setMenuOpen(false)}>Templates</Link>
          <Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link to="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link to="/get-started" onClick={() => setMenuOpen(false)}>
            <Button className="get-started-btn">Get Started</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
