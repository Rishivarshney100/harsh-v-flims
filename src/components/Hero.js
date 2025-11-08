import React from 'react';
import './Hero.css';
import vFilmsLogo from '../assets/v-films-logo.png';

const Hero = () => {
  return (
    <div className="section hero-section">
      <div className="section-content">
        <div className="hero-container">
          <div className="hero-left">
            <div className="mandala-background"></div>
            <div className="logo-container">
              <img src={vFilmsLogo} alt="V Films" className="v-films-logo" />
            </div>
          </div>
          <div className="hero-right">
            <h2 className="hero-tagline">
              Varnan is where stories find<br />
              their voice and form
            </h2>
            <p className="hero-categories">
              Films . Brands . Art
            </p>
            <div className="hero-description-box">
              <p>
                Since 2009, V've been telling stories - stories of people,<br />
                their journeys, and the places that shape them.<br />
                Some begin in polished boardrooms, others in humble<br />
                village squares. But every story starts the same way - by<br />
                listening with intention. V believes it takes trust, patience,<br />
                and an eye for the unseen to capture what truly matters.<br />
                V doesn't just tell stories - V honors them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

