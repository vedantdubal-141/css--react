import React from 'react';

const FinalHero = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=1200')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white text-5xl md:text-[4.5rem] font-light leading-[1.2]">
        Meet new<br/>people in a<br/>mansion.
      </div>
    </div>
  );
};

export default FinalHero;