import React from 'react';

const DestinationCard = ({ name, image }) => {
  return (
    <div className="relative overflow-hidden cursor-pointer aspect-square bg-blue-600 group">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors duration-300 ease-out group-hover:bg-black/40">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center relative transition-transform duration-300 ease-out group-hover:scale-110">
          <div className="absolute w-[60px] h-[60px] border-2 border-black rounded-full"></div>
          <span className="text-2xl font-bold">→</span>
        </div>
      </div>
      <div className="absolute bottom-5 left-0 right-0 text-center text-white font-semibold text-[1.1rem] tracking-[2px] uppercase">
        {name}
      </div>
    </div>
  );
};

export default DestinationCard;