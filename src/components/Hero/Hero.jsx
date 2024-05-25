import React from 'react';
import './Hero.css';

const Hero = ({ onGetStartedClick }) => {
  return (
    <div className="bg-container">
      <div className="bg-overlay">
        <div className="hero-container" id='home'>
          <h1 className='hero-title'>PROGRAMMER
          <br/>BUBBLE</h1>
          <p className="hero-subtitle">Dive into the Code. Join the Bubble.</p>
          <button className='hero-button' onClick={onGetStartedClick}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
