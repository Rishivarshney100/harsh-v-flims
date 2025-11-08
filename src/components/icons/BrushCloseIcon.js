import React from 'react';

const BrushCloseIcon = ({ titleId = 'navbarCloseTitle', className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    role="img"
    aria-labelledby={titleId}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id={titleId}>Close navigation menu</title>
    <defs>
      <filter id="brushCrossEffect" x="-12%" y="-12%" width="124%" height="124%">
        <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <g filter="url(#brushCrossEffect)" stroke="#0F2846" strokeWidth="18" strokeLinecap="round">
      <line x1="18" y1="18" x2="82" y2="82" />
      <line x1="82" y1="18" x2="18" y2="82" />
    </g>
  </svg>
);

export default BrushCloseIcon;

