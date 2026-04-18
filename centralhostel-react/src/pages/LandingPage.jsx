import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import main11 from '../assets/images/page1/main11.png';
import main2 from '../assets/images/page1/main2.webp';
import destinationsImg from '../assets/images/page1/Destinations.webp';
import sleepImg from '../assets/images/page1/sleep.png';
import dortoirs from '../assets/images/page1/Dortoirs.webp';
import chambers from '../assets/images/page1/chambers.webp';
import boire from '../assets/images/page1/Boire.webp';
import centralCentral from '../assets/images/page1/cental_central.webp';
import spiral from '../assets/images/page1/spiral.webp';
import rochelle from '../assets/images/page1/Rochelle.webp';
import meilleures from '../assets/images/page1/meilleures.webp';
import backpack from '../assets/images/page1/backpack.png';
import centralLogo from '../assets/images/page1/centrallogo.webp';
import lastImg from '../assets/images/page1/last.webp';

const LandingPage = () => {
  return (
    <div className="font-sans text-[#333] bg-[#fcfcfc]">
      
      {/* 1. Main Section */}
      <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${main11})` }}>
        
        <Navbar />

        {/* Absolute Rotated Logo */}
        <div className="absolute top-[calc(50%+35px)] left-[100px] -rotate-90 -translate-y-1/2 origin-top-left text-[15vw] font-black text-[#2e6459] whitespace-nowrap z-[5] opacity-70 select-none">
          CENTRAL
        </div>

        {/* Vertical Nav */}
        <nav className="fixed top-1/2 -translate-y-1/2 left-5 flex flex-col z-[100] hidden md:flex">
          {['CHAMBRES', 'DORTOIRS', 'BOIRE', 'DESTINATIONS'].map((item) => (
            <a key={item} href="#" className="text-white text-base font-bold py-2.5 my-[5px] tracking-[2px] [writing-mode:vertical-rl] rotate-180 hover:text-[#e57373] transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* 2. Content Area */}
      <div className="min-h-screen bg-white">
        
        {/* Intro Section */}
        <div className="relative w-full h-[60vh] overflow-hidden group">
          <img src={main2} alt="Central Hostel Interior" className="w-full h-full object-cover block" />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-10 opacity-0 group-hover:bg-[#2e6459]/90 group-hover:opacity-100 transition-all duration-400 ease-in-out text-white">
            <h2 className="text-[1.75rem] mb-5 font-bold">Central : Hôtels, Hostels, Bars et Restaurants</h2>
            <p className="text-base leading-[1.6] max-w-[600px]">
              Central, ce sont des hôtels/hostels destinés à tous avec une ambition claire : faire revivre les bâtiments historiques afin d’accueillir les locaux et les voyageurs du monde entier.
              <br/><br/>
              Plus qu’un simple lieu de passage, Central aspire à être un véritable point de rencontre, où l’on vient manger, boire et dormir, mais surtout partager des expériences et des moments uniques au cœur de villes.
            </p>
          </div>
        </div>

        {/* Destinations Section */}
        <div className="flex flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto my-20 items-center gap-10">
          <div className="flex-1 text-left">
            <h2 className="text-5xl font-extrabold mb-[25px] pb-[10px] border-b-4 border-black inline-block max-w-[300px] leading-[1.1]">Destinations</h2>
            <ul className="list-none p-0 m-0 mb-[30px] text-[#555]">
              {['BORDEAUX', 'LA ROCHELLE', 'LILLE'].map(city => (
                <li key={city} className="text-lg font-medium py-2">{city}</li>
              ))}
              {['NICE', 'MONTPELLIER'].map(city => (
                <li key={city} className="text-lg font-medium py-2">
                  {city} <span className="bg-[#e54c3c] text-white text-[10px] px-[5px] py-[2px] rounded ml-[10px] font-bold align-middle">SOON</span>
                </li>
              ))}
            </ul>
            <button className="bg-black text-white py-3 px-[25px] font-bold border-none cursor-pointer hover:bg-[#333] transition-colors">Découvrez nos lieux</button>
          </div>
          <div className="flex-[1.5]">
            <img src={destinationsImg} alt="Hostel Entrance" className="w-full h-auto block" />
          </div>
        </div>

        {/* What If Section */}
        <div className="flex flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto my-20 items-center gap-10">
          <div className="flex-1">
            <img src={sleepImg} alt="People sitting outside" className="w-full h-auto block" />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-5xl font-extrabold mb-[25px] pb-[10px] border-b-4 border-black inline-block leading-[1.1]">What if<br/>we don't<br/>sleep?</h2>
            <p className="text-base leading-[1.6] text-[#555]">
              Central offers numerous daytime and evening events within its establishments,
              providing an opportunity for travelers and local residents to get to know each other
              and share moments together.
            </p>
          </div>
        </div>

        {/* Hero Text Sub */}
        <h1 className="text-center text-[2rem] font-medium py-[60px] pb-[40px] text-black">Sleep, eat, toast and much more</h1>

        {/* Content Blocks */}
        <div className="flex flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto my-10 h-auto md:h-[400px] overflow-hidden gap-5 md:gap-0">
          {[
            { title: 'DORMITORIES', img: dortoirs, color: '#2e6459' },
            { title: 'ROOMS', img: chambers, color: 'black' },
            { title: 'EAT & DRINK', img: boire, color: '#e54c3c' },
          ].map((block) => (
            <div key={block.title} className="flex-1 p-10 flex flex-col justify-between items-start text-white bg-cover bg-center transition-transform hover:z-10" style={{ backgroundImage: `url(${block.img})`, backgroundColor: block.color }}>
              <h2 className="text-2xl font-extrabold pb-[5px] border-b-[3px] border-white">{block.title}</h2>
              <div className="bg-white text-[#333] py-[10px] px-5 rounded font-extrabold cursor-pointer hover:bg-[#e57373] hover:text-white transition-colors">DISCOVER</div>
            </div>
          ))}
        </div>

        {/* Diagonal Pattern */}
        <div className="w-full relative">
          <img src={centralCentral} alt="Central Pattern" className="w-full h-auto block" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white p-5 bg-black/40">
             <h2 className="text-3xl font-bold">A new way to stay away from home.</h2>
             <p className="text-lg">Central, much more than a place of passage</p>
          </div>
        </div>

        {/* Spiral Logo */}
        <div className="w-full leading-[0]">
          <img src={spiral} alt="Spiral Pattern" className="w-full h-auto block" />
        </div>

        {/* Black Background Area */}
        <div className="bg-black text-white py-20 overflow-hidden">
          
          {/* Quote */}
          <div className="text-center px-5 py-[60px] pb-[100px]">
             <p className="text-[3.5vw] font-extrabold leading-[1.2] inline-block">Culture hors les murs,<br/>réseau social du réel.</p>
          </div>

          {/* What's Up Section */}
          <div className="w-[90%] max-w-[1200px] mx-auto my-[60px] text-center">
            <h2 className="text-3xl font-bold mb-[50px] text-white">What’s up Central?</h2>
            
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-[30px] text-left">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-[15px] text-white">Visiter La Rochelle sans voiture : conseils et bonnes adresses</h3>
                  <p className="mb-[15px] text-[#ccc]">Central vous donne toutes les informations pour visiter La Rochelle sans voiture.</p>
                  <a href="#" className="text-[#e57373] hover:underline">Lire plus</a>
                </div>
                <img src={rochelle} alt="La Rochelle" className="max-w-[30%] h-auto" />
              </div>

              <div className="flex items-center gap-[30px] text-left">
                 <div className="flex-1">
                  <h3 className="text-xl font-bold mb-[15px] text-white">Les meilleures activités à faire en couple à Lille</h3>
                  <p className="mb-[15px] text-[#ccc]">Central vous propose une sélection des meilleures activités à faire en couple à Lille.</p>
                  <a href="#" className="text-[#e57373] hover:underline">Lire plus</a>
                </div>
                <img src={meilleures} alt="Lille" className="max-w-[30%] h-auto" />
              </div>
            </div>
            
            <a href="#" className="inline-block mt-10 bg-white text-black border border-white px-[30px] py-[15px] hover:bg-[#eee] transition-colors">Discover all the articles</a>
          </div>

          {/* Backpack Section */}
          <div className="flex flex-col md:flex-row w-[90%] max-w-[1200px] mx-auto my-[100px] items-center gap-[50px]">
            <div className="flex-1">
              <img src={backpack} alt="Backpack" className="w-full h-auto block" />
            </div>
            <div className="flex-1 text-left">
              <h2 className="text-[4vw] font-black leading-none mb-5 max-w-[400px]">Drop your<br/>backpack<br/>down<br/>where things<br/>happen</h2>
              <p className="text-2xl font-medium leading-[1.2] mb-[30px]">Pose ton sac là<br/>où ça se passe.</p>
              <button className="bg-[#e57373] text-white py-3 px-[25px] font-bold border-none hover:bg-[#d46262] transition-colors">Come stay at Central</button>
            </div>
          </div>

          {/* Final Image Section */}
          <div className="relative w-full mt-[100px] leading-[0]">
            <img src={centralLogo} alt="Logo" className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] z-10" />
            <img src={lastImg} alt="Interior" className="w-full h-auto block" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default LandingPage;