import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import vector5 from '../assets/Vector 5.svg';
import frame31 from '../assets/Frame 31.png';
import frame32 from '../assets/Frame_32.png';
import frame33 from '../assets/Frame_33.png';
import tape from '../assets/image_2.png';
import tape3 from '../assets/image 7.png';
import frame34 from '../assets/Frame 34.svg';
import backButton from '../assets/back-button.png';
import logo from '../assets/v-films-logo.png';
import arrow from '../assets/Arrow.svg';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import camera1 from '../assets/Camera 01.svg';
import camera2 from '../assets/Camera 02.svg';
import camera3 from '../assets/Camera 03.svg';
import camera4 from '../assets/Camera 04.svg';
import brandingVector1 from '../assets/Branding Vector 01.svg';
import brandingVector2 from '../assets/Branding Vector 02.svg';
import brandingVector3 from '../assets/Branding Vector 03.svg';
import brandingVector4 from '../assets/Branding Vector 04.svg';
import artCurationIcon1 from '../assets/Art Curation Icons 01.svg';
import artCurationIcon2 from '../assets/Art Curation Icons 02.svg';
import artCurationIcon3 from '../assets/Art Curation Icons 03.svg';
import artCurationIcon4 from '../assets/Art Curation Icons 04.svg';

const Services = () => {
  const [isZooming, setIsZooming] = useState(false);
  const [currentPage, setCurrentPage] = useState('main'); // 'main', 'film-production', 'branding', 'art-curation'
  const sectionRef = useRef(null);

  // Reset to main Services page when component becomes visible
  useEffect(() => {
    const currentSection = sectionRef.current; // Copy ref to variable
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When Services page comes into view, reset to main page
            setCurrentPage('main');
            setIsZooming(false);
            setActiveFrame(null);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const [activeFrame, setActiveFrame] = useState(null);

  const handleFrame33Click = () => {
    setActiveFrame('frame-33');
    setIsZooming(true);
    setTimeout(() => {
      setCurrentPage('film-production');
    }, 700); // Match animation duration
  };

  const handleFrame32Click = () => {
    setActiveFrame('frame-32');
    setIsZooming(true);
    setTimeout(() => {
      setCurrentPage('branding');
    }, 700); // Match animation duration
  };

  const handleFrame31Click = () => {
    setActiveFrame('frame-31');
    setIsZooming(true);
    setTimeout(() => {
      setCurrentPage('art-curation');
    }, 700); // Match animation duration
  };

  const handleBackClick = () => {
    setCurrentPage('main');
    setIsZooming(false);
    setActiveFrame(null);
  };

  // Render different pages based on currentPage state
  if (currentPage === 'film-production') {
    return (
      <div className="section services-section" ref={sectionRef}>
        <div className="section-content">
          <div className="services-container">
            {/* Logo */}
            <div className="services-logo">
              <img src={logo} alt="V Films" />
            </div>
            
            {/* Title Text */}
            <p className="services-title">
              "Filmmaking is a chance to live many lifetimes." - Robert Altman
            </p>
            
            {/* Vector 5 */}
            <img src={vector5} alt="" className="vector-5" />
            
            {/* Photo 1 */}
            <img src={photo1} alt="Film Production" className="subpage-photo" />
            
            {/* Camera 1 */}
            <img src={camera1} alt="" className="camera-1" />
            
            {/* Camera 2 */}
            <img src={camera2} alt="" className="camera-2" />
            
            {/* Camera 3 */}
            <img src={camera3} alt="" className="camera-3" />
            
            {/* Camera 4 */}
            <img src={camera4} alt="" className="camera-4" />
            
            {/* Film Production Content */}
            <div className="film-production-content">
              <p>
                Who says films are just an escape?
                <br />
                We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.
                <br />
                V crafts:
                <br />
                • Documentaries
                <br />
                • Corporate Videos
                <br />
                • 2D Animation Videos
                <br />
                • 3D Animation Videos
              </p>
            </div>
            
            {/* Explore Now Text */}
            <p className="explore-now-text">Explore Now</p>
            
            {/* Film Production page - empty */}
            <img 
              src={backButton} 
              alt="Back" 
              className="back-button-img"
              onClick={handleBackClick}
            />
            {/* Arrow */}
            <img src={arrow} alt="" className="subpage-arrow" />
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'branding') {
    return (
      <div className="section services-section" ref={sectionRef}>
        <div className="section-content">
          <div className="services-container">
            {/* Logo */}
            <div className="services-logo">
              <img src={logo} alt="V Films" />
            </div>
            
            {/* Title Text */}
            <p className="services-title">
              "A brand is a voice, and a product is a souvenir." - Lisa Gansky
            </p>
            
            {/* Vector 5 */}
            <img src={vector5} alt="" className="vector-5" />
            
            {/* Photo 2 */}
            <img src={photo2} alt="Branding" className="subpage-photo" />
            
            {/* Branding Vector 1 */}
            <img src={brandingVector1} alt="" className="branding-vector-1" />
            
            {/* Branding Vector 2 */}
            <img src={brandingVector2} alt="" className="branding-vector-2" />
            
            {/* Branding Vector 3 */}
            <img src={brandingVector3} alt="" className="branding-vector-3" />
            
            {/* Branding Vector 4 */}
            <img src={brandingVector4} alt="" className="branding-vector-4" />
            
            {/* Branding Content */}
            <div className="film-production-content">
              <p>
                A brand isn't just what you see - it's what you remember, what you carry home, and what you trust.
                <br />
                We shape brands that people remember, return to, and fall in love with.
                <br />
                V creates:
                <br />
                • Branding & Communication
                <br />
                • Market Mapping
                <br />
                • Content Management
                <br />
                • Social Media Management
                <br />
                • Rebranding
              </p>
            </div>
            
            {/* Explore Now Text */}
            <p className="explore-now-text">Explore Now</p>
            
            {/* Branding page - empty */}
            <img 
              src={backButton} 
              alt="Back" 
              className="back-button-img"
              onClick={handleBackClick}
            />
            {/* Arrow */}
            <img src={arrow} alt="" className="subpage-arrow" />
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'art-curation') {
    return (
      <div className="section services-section" ref={sectionRef}>
        <div className="section-content">
          <div className="services-container">
            {/* Logo */}
            <div className="services-logo">
              <img src={logo} alt="V Films" />
            </div>
            
            {/* Title Text */}
            <p className="services-title">
              "V take art where it belongs, to the people." - Vernita Verma
            </p>
            
            {/* Vector 5 */}
            <img src={vector5} alt="" className="vector-5" />
            
            {/* Photo 3 */}
            <img src={photo3} alt="Art Curation" className="subpage-photo" />
            
            {/* Art Curation Icon 1 */}
            <img src={artCurationIcon1} alt="" className="art-curation-icon-1" />
            
            {/* Art Curation Icon 2 */}
            <img src={artCurationIcon2} alt="" className="art-curation-icon-2" />
            
            {/* Art Curation Icon 3 */}
            <img src={artCurationIcon3} alt="" className="art-curation-icon-3" />
            
            {/* Art Curation Icon 4 */}
            <img src={artCurationIcon4} alt="" className="art-curation-icon-4" />
            
            {/* Art Curation Content */}
            <div className="film-production-content">
              <p>
                Art isn't meant to sit on distant walls - it's meant to breathe, to travel, to belong.
                <br />
                Through every festival, every performance, and every gathering, we help stories find their stage and their people.
                <br />
                V curates:
                <br />
                • Art Festivals
                <br />
                • Live Performances
                <br />
                • Community Events
                <br />
                • Cultural Storytelling
              </p>
            </div>
            
            {/* Explore Now Text */}
            <p className="explore-now-text">Explore Now</p>
            
            {/* Art Curation page - empty */}
            <img 
              src={backButton} 
              alt="Back" 
              className="back-button-img"
              onClick={handleBackClick}
            />
            {/* Arrow */}
            <img src={arrow} alt="" className="subpage-arrow" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section services-section" ref={sectionRef}>
      <div className="section-content">
        <div className={`services-container ${isZooming ? 'zooming' : ''} ${activeFrame ? `zooming-${activeFrame}` : ''}`}>
          {/* Logo */}
          <div className="services-logo">
            <img src={logo} alt="V Films" />
          </div>
          
          {/* Title Text */}
          <p className="services-title">
            The storyboard reveals the breadth of our craft.
          </p>
          
          {/* Vector 5 */}
          <img src={vector5} alt="" className="vector-5" />
          
          {/* Tape 1 */}
          <img src={tape} alt="" className="tape tape-1" />
          
          {/* Frame 33 - Film Production */}
          <div 
            className={`frame-wrapper frame-33-wrapper ${isZooming ? 'zoom-active' : ''}`}
            onClick={handleFrame33Click}
          >
            <img src={frame33} alt="Film Production" className="frame-33" />
          </div>
          
          {/* Tape 2 */}
          <img src={tape} alt="" className="tape tape-2" />
          
          {/* Frame 32 - Branding */}
          <div 
            className={`frame-wrapper frame-32-wrapper ${isZooming ? 'zoom-active' : ''}`}
            onClick={handleFrame32Click}
          >
            <img src={frame32} alt="Branding" className="frame-32" />
          </div>
          
          {/* Tape 3 */}
          <img src={tape3} alt="" className="tape tape-3" />
          
          {/* Frame 31 - Art Curation */}
          <div 
            className={`frame-wrapper frame-31-wrapper ${isZooming ? 'zoom-active' : ''}`}
            onClick={handleFrame31Click}
          >
            <img src={frame31} alt="Art Curation" className="frame-31" />
          </div>
          
          {/* Frame 34 */}
          <img src={frame34} alt="" className="frame-34" />
        </div>
      </div>
    </div>
  );
};

export default Services;

