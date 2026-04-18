import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/page1/loopringlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Protocol', path: '/protocol' },
    { name: 'LRC', path: '#' },
    { name: 'Blog', path: '#' },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-md z-[100] border-b border-slate-100">
        <div className="container h-full flex justify-between items-center px-4 md:px-10">
          <Link to="/" className="flex items-center z-[110]" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Loopring" className="h-7 w-auto" />
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="nav-link">{link.name}</Link>
              </li>
            ))}
            <li>
              <a href="#" className="btn-gradient-purple">
                Launch App
              </a>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden p-2 text-[#64748B] hover:text-[#1C60FF] transition-colors z-[110]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav to avoid backdrop-filter clipping */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white z-[90] lg:hidden flex flex-col items-start pt-32 px-10 gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-4xl font-extrabold uppercase tracking-tighter text-[#1E293B] hover:text-[#1C60FF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


