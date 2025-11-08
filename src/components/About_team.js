import React from 'react';
import './About_team.css';
import logo from '../assets/v-films-logo.png';
import safetyPin from '../assets/safety-pin.png';
import gateIcon from '../assets/gate.svg';
import arrow1 from '../assets/arrow_1.svg';
import arrow2 from '../assets/arrow_2.svg';
import arrow3 from '../assets/arrow_3.svg';
import teamSvg from '../assets/team.svg';

const About_team = ({ onNavigate }) => {
  const handleViewPortfolio = () => {
    // Navigate to Portfolio page (section index 4)
    if (onNavigate) {
      onNavigate(4);
    }
  };

  return (
    <div className="section about-section">
      <div className="section-content">
        <div className="about-container">
          {/* Logo */}
          <div className="about-logo">
            <img src={logo} alt="V Films" />
          </div>

          {/* Safety Pin / Paperclip */}
          <div className="safety-pin">
            <img src={safetyPin} alt="" />
          </div>

          {/* Arrow 1 */}
          <img src={arrow1} alt="" className="arrow arrow-1" />

          {/* Gate Illustration */}
          <div className="gate-container">
            <img src={gateIcon} alt="Branding Experts" className="gate-icon" />
          </div>

          {/* Branding Experts Label */}
          <span className="gate-label">Branding Experts</span>

          {/* Arrow 2 (loop) */}
          <img src={arrow2} alt="" className="arrow arrow-2" />

          {/* Arrow 3 (custom curved arrow) */}
          <img src={arrow3} alt="" className="arrow arrow-3" />

          {/* Team SVG */}
          <div className="team-svg-container">
            <img src={teamSvg} alt="Team" className="team-svg" />
          </div>

          {/* Team Labels */}
          <span className="team-label team-label-left">Film Makers</span>
          <span className="team-label team-label-right">Art Curators</span>

          {/* Bottom Text */}
          <p className="about-footer-text">
            Take a closer look at the stories V bring to life.
          </p>
          
          {/* View Portfolio Button */}
          <button className="view-portfolio-btn" onClick={handleViewPortfolio}>View Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default About_team;

