import React, { useCallback, useEffect, useId, useState } from 'react';
import './Navbar.css';
import HamburgerIcon from './icons/HamburgerIcon';
import BrushCloseIcon from './icons/BrushCloseIcon';

const Navbar = ({ currentSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleNavigate = useCallback((index) => {
    if (typeof onSectionClick === 'function') {
      onSectionClick(index);
    }
    closeMenu();
  }, [closeMenu, onSectionClick]);

  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu, isOpen]);


  return (
    <nav className={`navbar ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className={`navbar-toggle ${isOpen ? 'is-active' : ''}`}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggleMenu}
      >
        {isOpen ? (
          <BrushCloseIcon className="navbar-toggle-icon is-close" />
        ) : (
          <HamburgerIcon className="navbar-toggle-icon" />
        )}
      </button>

      <div id={panelId} className={`navbar-rail ${isOpen ? 'is-visible' : ''}`} role="navigation">
      <div className="navbar-content">
        <div className="navbar-menu">
          <button
            className={`navbar-item ${currentSection === 3 ? 'active' : ''}`}
              onClick={() => handleNavigate(3)}
          >
            Services
          </button>
          <button
            className={`navbar-item ${currentSection === 2 ? 'active' : ''}`}
              onClick={() => handleNavigate(2)}
          >
            Their Stories
          </button>
          <button
            className={`navbar-item ${currentSection === 1 ? 'active' : ''}`}
              onClick={() => handleNavigate(1)}
          >
            Our Story
          </button>
          <button
            className={`navbar-item ${currentSection === 4 ? 'active' : ''}`}
              onClick={() => handleNavigate(4)}
          >
            Varnan
          </button>
            <button className="navbar-cta" onClick={() => handleNavigate(5)}>
            Let's Talk <span className="email-icon">✉</span>
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

