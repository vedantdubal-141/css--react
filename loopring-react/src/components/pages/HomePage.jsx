import React from 'react';
import Hero from '../Hero';
import Features from '../Features';
import Dashboard from '../Dashboard';

const HomePage = () => {
  return (
    <main>
      <Hero />
      
      {/* Review Strip */}
      <div className="bg-loopring-blue py-14 text-center text-white">
        <div className="container">
          <p className="text-lg md:text-xl font-medium leading-relaxed mb-4">
            Loopring's zkRollup L2 offers trading at lightning speed,<br className="hidden md:block" />without sacrificing security.
          </p>
          <div className="flex justify-center gap-1 text-sm">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star" />
            ))}
          </div>
        </div>
      </div>

      <Features />
      <Dashboard />
    </main>
  );
};

export default HomePage;
