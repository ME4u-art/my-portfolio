import { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="logo" aria-label="Hicham Gnouni">
          <img src="/profile.jpg" alt="Hicham Gnouni" className="logo-image" />
        </div>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          type="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} role="menubar">
          <li role="none"><a href="#hero" onClick={closeMenu} role="menuitem">Home</a></li>
          <li role="none"><a href="#about" onClick={closeMenu} role="menuitem">About</a></li>
          <li role="none"><a href="#projects" onClick={closeMenu} role="menuitem">Projects</a></li>
          <li role="none"><a href="#skills" onClick={closeMenu} role="menuitem">Skills</a></li>
          <li role="none"><a href="#resume" onClick={closeMenu} role="menuitem">Resume</a></li>
          <li role="none"><a href="#contact" onClick={closeMenu} role="menuitem">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}