import './Navbar.css';
import React from 'react';
import img from './akk.svg';
import { useEffect } from 'react';

function Navbar() {
  const [menuActive, setMenuActive] = React.useState(false);

  const handleHamburgerClick = () => {
    setMenuActive((prev) => !prev);
  };
  
  // Add this to your entry file (e.g., App.jsx)
useEffect(() => {
  document.body.classList.add('loaded');
}, []);

  

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#Home"> <img src={img} alt="Logo" className="logo-image" /></a>
      </div>

      {/* Desktop Nav Links */}
      <div className={`nav-links${menuActive ? ' active' : ''}`}>
        <a href="#Work" className="nav-link">Work</a>
        <a href="#About" className="nav-link">About</a>
        <a href="#Contact" className="nav-link">Contact</a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuActive}
        aria-controls="nav-menu"
        onClick={handleHamburgerClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}

export default Navbar;