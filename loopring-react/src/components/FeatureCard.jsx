import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, desc, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="bg-white p-8 md:p-14 text-center rounded-sm h-full"
    >
      <div className="mb-8 h-[60px] flex items-center justify-center">
        <img src={icon} alt={title} className="h-[50px] w-auto" />
      </div>
      <h3 className="text-loopring-blue font-extrabold text-2xl uppercase mb-5 font-space-grotesk">
        {title}
      </h3>
      <p className="text-loopring-blue text-[0.95rem] leading-[1.6]">
        {desc}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
