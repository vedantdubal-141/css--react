import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 text-center bg-white">
      <div className="container">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-loopring-blue font-bold text-[0.9rem] tracking-[2px] uppercase mb-6 block"
        >
          Loopring Layers
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2.5rem] md:text-[4rem] leading-[1.1] mb-8 text-[#1E293B]"
        >
          Ethereum's First zkRollup Layer 2
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[1.1rem] text-[#64748B] font-medium mb-12 font-inter"
        >
          Fast, Secure and 100x Lower Fees
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#" 
          className="btn-gradient-blue"
        >
          Launch App &gt;
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
