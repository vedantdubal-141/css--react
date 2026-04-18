import React from 'react';

const InfoSection = ({ title, children, image, imagePosition = 'left' }) => {
  return (
    <div className="bg-[#1a1a1a] text-white py-[100px] px-5 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center max-w-[1400px] mx-auto">
      {imagePosition === 'left' && <img src={image} alt={title} className="w-full h-full object-cover" />}
      
      <div>
        <h2 className="text-[2rem] font-normal mb-[30px] leading-[1.3]">{title}</h2>
        <div className="leading-[1.8] text-[#ccc] mb-5 space-y-5">
          {children}
        </div>
      </div>

      {imagePosition === 'right' && <img src={image} alt={title} className="w-full h-full object-cover" />}
    </div>
  );
};

export default InfoSection;