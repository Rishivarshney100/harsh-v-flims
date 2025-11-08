import React from 'react';
import './About_us.css';
import logo from '../assets/v-films-logo.png';
import frame9 from '../assets/Frame 9.png';
import frame22 from '../assets/Frame 22.png';
import frame23 from '../assets/Frame 23.png';
import group10 from '../assets/Group 10.png';
import objects from '../assets/OBJECTS.png';

const About_us = () => {
  return (
    <div className="section about-us-section">
      <div className="section-content">
        <div className="about-us-container">
          {/* Logo */}
          <div className="about-us-logo">
            <img src={logo} alt="V Films" />
          </div>
          
          {/* Title Text */}
          <p className="about-us-title">
            Every project is more than just a brief - it's a new chapter waiting to be written.
            <br />
            Together, we've crafted tales that inspire, connect, and endure.
          </p>
          
          {/* Montage Text */}
          <p className="about-us-montage">
            A montage of familiar faces and names.
          </p>
          
          {/* Text Content */}
          <p className="about-us-text">
            Some stories come from the biggest names. Others begin with bold, rising voices.
            <br />
            We've been fortunate to walk alongside both - listening, creating, and building stories that matter.
          </p>
          
          {/* Frame 9 */}
          <img src={frame9} alt="" className="frame-9" />
          
          {/* Frame 22 */}
          <img src={frame22} alt="" className="frame-22" />
          
          {/* Frame 23 */}
          <img src={frame23} alt="" className="frame-23" />
          
          {/* Group 10 */}
          <img src={group10} alt="" className="group-10" />
          
          {/* Objects */}
          <img src={objects} alt="" className="objects" />
        </div>
      </div>
    </div>
  );
};

export default About_us;

