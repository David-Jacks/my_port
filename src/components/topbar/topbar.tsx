import { useState, useEffect } from 'react';
import './topbar.css';

const Topbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <nav>
      <div className="nav__container">
        <h2>David Jackson</h2>
        <ul className={`nav__menu ${menuOpen ? 'show' : ''}`}>
          <li><a href="#about__page">Lifestyle</a></li>
          <li><a href="#projects__page">Showroom</a></li>
          <li><a href="#contact__page">Contact</a></li>
          <li><a href="#" target="_blank">MyBlog</a></li>
        </ul>
        <div className="bg__change">
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox"
            checked={!isDark}
            onChange={handleThemeToggle}
          />
          <label htmlFor="checkbox" className="checkbox__label">
            <i className="fa-solid fa-sun"></i>
            <i className="fa-solid fa-moon"></i>
            <span className="check__ball"></span>
          </label>
        </div>
        <button id="open-menu-btn" onClick={() => setMenuOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <button id="close-menu-btn" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
