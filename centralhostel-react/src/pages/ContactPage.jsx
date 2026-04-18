import React from 'react';
import Navbar from '../components/Navbar';
import main11 from '../assets/images/page1/main11.png';
import mapImg from '../assets/images/page1/map.png';
import centralLogo from '../assets/images/page1/centrallogo.webp';

const ContactPage = () => {
  return (
    <div className="font-sans text-[#333] bg-[#f9f9f9] mt-[70px]">
      
      <Navbar />

      {/* Main Section */}
      <div className="h-[50vh] bg-cover bg-center relative mb-[50px]" style={{ backgroundImage: `url(${main11})`, backgroundPosition: 'center 50%' }}></div>

      {/* Main Content Area */}
      <div className="w-[90%] max-w-[1200px] mx-auto pb-[50px]">
        <h1 className="text-center text-4xl font-extrabold mb-[50px]">Nous contacter</h1>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row gap-[50px] mb-[80px]">
          {/* Sidebar */}
          <div className="md:basis-[30%] text-left">
            <h2 className="text-[32px] font-black m-0 mb-[15px] text-black">Destinations</h2>
            <ul className="list-none p-0 m-0">
              <li className="text-2xl font-black text-black mb-[10px]">BORDEAUX</li>
              <li className="text-2xl font-black text-black mb-[10px]">LA ROCHELLE</li>
              <li className="text-lg font-medium text-[#666] mb-2">Lille</li>
              <li className="text-lg font-medium text-[#666] mb-2">Lyon</li>
              <li className="text-lg font-medium text-[#666] mb-2">Nice</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:basis-[70%] bg-white p-[30px] border border-[#eee]">
            <form>
              <div className="flex flex-col md:flex-row gap-5 mb-5">
                <div className="flex-1 flex flex-col">
                  <label className="text-xs font-bold text-[#555] mb-[5px] uppercase">DESTINATION*</label>
                  <select className="w-full p-[10px] border border-[#ccc] text-sm box-border">
                    <option>Bordeaux</option>
                  </select>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-5 mb-5">
                <div className="flex-1 flex flex-col">
                  <label className="text-xs font-bold text-[#555] mb-[5px] uppercase">PRÉNOM*</label>
                  <input type="text" className="w-full p-[10px] border border-[#ccc] text-sm box-border" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-xs font-bold text-[#555] mb-[5px] uppercase">NOM*</label>
                  <input type="text" className="w-full p-[10px] border border-[#ccc] text-sm box-border" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 mb-5">
                <div className="flex-1 flex flex-col">
                  <label className="text-xs font-bold text-[#555] mb-[5px] uppercase">EMAIL*</label>
                  <input type="email" className="w-full p-[10px] border border-[#ccc] text-sm box-border" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="text-xs font-bold text-[#555] mb-[5px] uppercase">TÉLÉPHONE</label>
                  <input type="tel" className="w-full p-[10px] border border-[#ccc] text-sm box-border" />
                </div>
              </div>

              <div className="flex flex-col gap-5 mb-5">
                <div className="flex-1 flex flex-col">
                  <label className="text-xs font-bold text-[#555] mb-[5px] uppercase">SUJET</label>
                  <select className="w-full p-[10px] border border-[#ccc] text-sm box-border">
                    <option>Demande d'information</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-5 mb-5">
                <div className="flex-1 flex flex-col">
                  <label className="text-xs font-bold text-[#555] mb-[5px] uppercase">MESSAGE*</label>
                  <textarea rows="4" className="w-full p-[10px] border border-[#ccc] text-sm box-border"></textarea>
                </div>
              </div>

              <div className="flex flex-col gap-5 mb-5">
                 <p className="text-xs text-[#888] mb-[10px]">Mentions obligatoires</p>
                 <div className="flex items-center gap-2">
                    <input type="checkbox" id="newsletter" />
                    <label htmlFor="newsletter" className="text-xs font-normal text-[#555]">J'autorise au deposit pour email/SMS, recevez l'offre commerciale de Central</label>
                 </div>
                 <div className="flex items-center gap-2">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms" className="text-xs font-normal text-[#555]">Je reconnais avoir pris connaissance de notre Politique de confidentialité et les accepte</label>
                 </div>
              </div>

              <button type="submit" className="bg-black text-white py-[12px] px-[30px] border-none font-bold text-sm cursor-pointer hover:bg-[#333] transition-colors float-right">ENVOYER</button>
              <div className="clear-both"></div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex flex-col md:flex-row gap-[50px] mt-[80px] items-start">
           <div className="md:basis-[50%]">
             <img src={mapImg} alt="Location Map" className="w-full h-auto block" />
           </div>
           <div className="md:basis-[50%] text-left">
              <h2 className="text-[32px] font-black text-black m-0 mb-[20px]">Contact</h2>
              <p className="text-base font-bold text-black leading-[1.5] mb-[15px]">bordeaux@centralhostel.fr</p>
              <p className="text-base font-bold text-black leading-[1.5] mb-[15px]">05 57 83 61 63</p>
              <p className="text-base font-bold text-black leading-[1.5] mb-[15px]">
                  2 Place Saint Projet<br/>
                  33000 Bordeaux<br/>
                  France
              </p>
              <img src={centralLogo} alt="Central Logo" className="w-[80px] h-auto my-[30px] block" />
              <div className="text-sm leading-[1.6] text-[#333] text-center md:text-left">
                  <p className="mb-[15px]"><strong>Comment venir depuis l’aéroport ?</strong><br/>Bus 1 direction « Gare Saint Jean » (arrêt « Palais de Justice »)</p>
                  <p className="mb-[15px]"><strong>Comment venir depuis la gare Saint-Jean ?</strong><br/>Tram C/D (arrêt « Place de la Bourse »)</p>
                  <p className="mb-[15px]"><strong>Comment venir en tram ou en bus ?</strong><br/>Tram A arrêt « Sainte Catherine »<br/>Tram C/D arrêt « Place de la Bourse »</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;