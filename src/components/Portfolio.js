import React from 'react';
import './Portfolio.css';
import camGroup from '../assets/Cam Group.svg';
import footerVector from '../assets/Footer Vector.png';
import logo from '../assets/v-films-logo.png';
import rectangle45 from '../assets/Rectangle 45.png';
import vector9 from '../assets/Vector 9.png';
import vector10 from '../assets/Vector 10.png';
import group11 from '../assets/Group 11.png';

const Portfolio = () => {
  return (
    <div className="section portfolio-section">
      <div className="section-content">
        <div className="portfolio-container">
          {/* Logo */}
          <div className="portfolio-logo">
            <img src={logo} alt="V Films" />
          </div>
          {/* Title Text */}
          <h2 className="portfolio-title">The Highlight Reel</h2>
          {/* Subtitle Text */}
          <p className="portfolio-subtitle">Watch the magic we've captured.</p>
          {/* Cam Group */}
          <img src={camGroup} alt="" className="cam-group" />
          {/* Rectangle 45 - Left */}
          <img src={rectangle45} alt="" className="rectangle-45-left" />
          {/* Rectangle 45 - Right */}
          <img src={rectangle45} alt="" className="rectangle-45-right" />
          {/* Group 11 */}
          <img src={group11} alt="" className="group-11" />
          {/* Vector 10 - Left */}
          <img src={vector10} alt="" className="vector-10" />
          {/* Vector 9 - Right */}
          <img src={vector9} alt="" className="vector-9" />
          {/* Footer Vector */}
          <img src={footerVector} alt="" className="footer-vector" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

