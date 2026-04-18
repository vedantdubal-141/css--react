import React from 'react';
import { Link } from 'react-router-dom';
import centraBg from '../assets/images/page2/centra.png';

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${centraBg})` }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white">
        <Link to="/" className="text-5xl md:text-[5rem] font-black tracking-[8px] mb-2.5 text-white no-underline block hover:text-gray-200 transition-colors">DESTINATIONS</Link>
        <div className="text-lg md:text-xl tracking-[3px] font-light">COLLECTION OF HOSTELS</div>
      </div>
    </div>
  );
};

export default HeroSection;