import React from 'react';
import DestinationCard from './DestinationCard';
import bordeaux from '../assets/images/page2/bordeaux.png';
import rochelle from '../assets/images/page2/rochelle.png';
import lille from '../assets/images/page2/lille.png';
import lyon from '../assets/images/page2/lyon.png';
import nice from '../assets/images/page2/nice.png';

const destinations = [
  { name: 'Bordeaux', image: bordeaux },
  { name: 'La Rochelle', image: rochelle },
  { name: 'Lille', image: lille },
  { name: 'Lyon', image: lyon },
  { name: 'Nice', image: nice },
];

const DestinationsGrid = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 pb-[100px] grid grid-cols-1 md:grid-cols-2 gap-5">
      {destinations.map((dest) => (
        <DestinationCard key={dest.name} name={dest.name} image={dest.image} />
      ))}
    </div>
  );
};

export default DestinationsGrid;