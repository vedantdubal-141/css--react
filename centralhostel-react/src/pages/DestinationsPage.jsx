import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DestinationsHeader from '../components/DestinationsHeader';
import DestinationsGrid from '../components/DestinationsGrid';
import InfoSection from '../components/InfoSection';
import GiantCSection from '../components/GiantCSection';
import FinalHero from '../components/FinalHero';

import backImg from '../assets/images/page2/back.png';
import nightImg from '../assets/images/page2/night.png';

const DestinationsPage = () => {
  return (
    <div className="font-sans text-black leading-normal bg-[#f5f0e8]">
      <Navbar />
      <div className="mt-[70px]">
        <HeroSection />
        <DestinationsHeader />
        <DestinationsGrid />
        
        <InfoSection 
          title="Séjournez au coeur de la vie de quartier"
          image={backImg}
          imagePosition="left"
        >
          <p>
              L'emplacement de nos établissements n'est pas choisi par hasard. Chez Central, nous souhaitons
              offrir à nos voyageurs une immersion au cœur des plus belles villes de France.
          </p>
          <p>
              Idéalement situés, vous pourrez en quelques pas visiter les attractions touristiques de la ville,
              arpenter les rues à la recherche des bonnes adresses locales et des endroits incontournables.
          </p>
        </InfoSection>

        <GiantCSection />

        <InfoSection 
          title="Au rythme de la ville et de ses envies"
          image={nightImg}
          imagePosition="right"
        >
          <p>
              Pour un moment de détente ou une soirée à vous déhancher au son du DJ, chacun de nos hôtels/hostels
              propose un planning assez dense d'événements en tout genre.
          </p>
        </InfoSection>

        <FinalHero />
      </div>
    </div>
  );
};

export default DestinationsPage;