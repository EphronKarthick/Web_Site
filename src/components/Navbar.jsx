import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <nav className="navbar">
      <div className="logo">MK LLP</div>

      {/* Right-aligned wrapper containing links and theme action */}
      <div className="nav-actions-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto' }}>
        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
          <li><a href="#values" onClick={() => setIsOpen(false)}>Values</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>

        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
} 