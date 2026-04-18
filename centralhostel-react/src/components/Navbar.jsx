import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import frFlag from '../assets/images/page1/fr.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'DESTINATIONS ⌵', path: '/destinations' },
    { name: 'DORMIR', path: '#' },
    { name: 'MANGER & BOIRE ⌵', path: '#' },
    { name: 'IMMERSION ⌵', path: '#' },
    { name: 'GROUPES & ÉVÉNEMENTS ⌵', path: '#' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[70px] bg-black/90 backdrop-blur-md flex justify-between items-center px-6 md:px-10 text-white text-sm font-medium z-[150] border-b border-white/10">
      {/* Logo */}
      <Link to="/" className="flex flex-col text-left leading-none text-white no-underline z-[160]">
        <span className="text-2xl font-black tracking-tighter">CENTRAL</span>
        <span className="text-xs font-medium tracking-[2px]">RÉSERVER</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-[30px]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="relative pb-1 hover:text-[#1C60FF] transition-colors duration-300 group whitespace-nowrap"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1C60FF] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Right Side Tools */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-[5px] font-bold">
          <img src={frFlag} alt="French Flag" className="w-[20px] h-[20px] rounded-full object-cover" />
          FR
        </div>
        
        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-[160]"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-[155] flex flex-col items-center justify-center gap-8`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold hover:text-[#1C60FF] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center gap-2 mt-4 text-xl font-bold">
          <img src={frFlag} alt="French Flag" className="w-8 h-8 rounded-full" />
          FR
        </div>
      </div>
    </nav>
  );
};

export default Navbar;