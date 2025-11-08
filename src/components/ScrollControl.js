import React, { useState, useCallback, useEffect } from 'react';
import './ScrollControl.css';

const ScrollControl = ({ onNavigate, currentSection, totalSections }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleBarClick = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const barWidth = rect.width;
    const sectionWidth = barWidth / totalSections;
    const targetSection = Math.floor(clickX / sectionWidth);
    
    if (targetSection !== currentSection && targetSection >= 0 && targetSection < totalSections) {
      onNavigate(targetSection);
    }
  };

  const handleDragStart = useCallback((e) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);
    
  const handleDragMove = useCallback((e) => {
    const track = document.querySelector('.scroll-track');
    if (!track) return;
    
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const trackWidth = rect.width;
    const sectionWidth = trackWidth / totalSections;
    const targetSection = Math.floor(clickX / sectionWidth);
    
    if (targetSection !== currentSection && targetSection >= 0 && targetSection < totalSections) {
      onNavigate(targetSection);
    }
  }, [currentSection, onNavigate, totalSections]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (!isDragging) {
      return undefined;
    }

      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);

      return () => {
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
      };
  }, [handleDragEnd, handleDragMove, isDragging]);

  // Calculate the position of the scroll indicator
  // Indicator is 200px wide, moves along the full width of the screen minus 20px (10px padding on each side)
  const indicatorWidth = 200;
  const trackWidth = typeof window !== 'undefined' ? window.innerWidth - 20 : 1920; // -20px for left and right padding
  const leftPosition = (currentSection / (totalSections - 1)) * (trackWidth - indicatorWidth);

  return (
    <div className="scroll-control">
      <div 
        className="scroll-track" 
        onClick={handleBarClick}
      >
        <div 
          className="scroll-indicator"
          style={{ 
            width: `${indicatorWidth}px`,
            left: `${leftPosition}px`
          }}
          onMouseDown={handleDragStart}
        />
      </div>
    </div>
  );
};

export default ScrollControl;

