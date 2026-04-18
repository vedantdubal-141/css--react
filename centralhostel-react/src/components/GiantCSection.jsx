import React from 'react';

const GiantCSection = () => {
  return (
    <div className="relative bg-[#1a1a1a] py-[150px] px-5 overflow-hidden">
      <div className="text-[35vw] font-black text-[#1a5a4a] text-center leading-[0.8] relative">C</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center max-w-[600px] z-[2]">
        <h2 className="text-4xl md:text-[2.5rem] font-normal mb-[30px]">Un hébergement aussi convivial que branché</h2>
        <p className="leading-[1.8] text-[#ccc]">
            Chez Central, nous apportons une attention toute particulière à l'atmosphère de nos hôtels/hostels
            que nous voulons chic et décontractée. Chaque espace a été pensé, décoré avec soin pour devenir un
            lieu accueillant et chaleureux, propice à la détente et au partage.
        </p>
      </div>
    </div>
  );
};

export default GiantCSection;