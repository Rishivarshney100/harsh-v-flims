import React from 'react';

const HamburgerIcon = ({ titleId = 'navbarHamburgerTitle', className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    role="img"
    aria-labelledby={titleId}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id={titleId}>Open navigation menu</title>
    <defs>
      <filter id="hamburgerBrushEffect" x="-12%" y="-12%" width="124%" height="124%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <g filter="url(#hamburgerBrushEffect)" fill="#0F2846">
      <rect x="12" y="22" width="76" height="22" rx="10" />
      <rect x="12" y="56" width="76" height="22" rx="10" />
    </g>
  </svg>
);

export default HamburgerIcon;

