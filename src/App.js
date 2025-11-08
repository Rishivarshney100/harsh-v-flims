import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About_team from './components/About_team';
import Services from './components/Services';
import About_us from './components/About_us';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ScrollControl from './components/ScrollControl';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);
  const sections = ['hero', 'about', 'team', 'stats', 'portfolio', 'contact'];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const sectionWidth = window.innerWidth;
      container.scrollTo({
        left: currentSection * sectionWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSection]);

  const handleNavigation = (direction) => {
    // Handle direct section navigation (number)
    if (typeof direction === 'number') {
      if (direction >= 0 && direction < sections.length) {
        setCurrentSection(direction);
      }
    }
    // Handle prev/next navigation (string)
    else if (direction === 'next' && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (direction === 'prev' && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSectionClick = (index) => {
    setCurrentSection(index);
  };

  return (
    <div className="App">
      <Navbar 
        currentSection={currentSection} 
        onSectionClick={handleSectionClick}
        sections={sections}
      />
      <div className="horizontal-scroll-container" ref={containerRef}>
        <Hero />
        <About_team /> {/* eslint-disable-line react/jsx-pascal-case */}
        <About_us /> {/* eslint-disable-line react/jsx-pascal-case */}
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <ScrollControl 
        onNavigate={handleNavigation}
        currentSection={currentSection}
        totalSections={sections.length}
      />
    </div>
  );
}

export default App;

