import React from 'react';
import dashboardImg from '../assets/images/page1/loopringlayer2.jpg';

const Dashboard = () => {
  return (
    <section className="bg-white py-24 text-center">
      <div className="container">
        <h2 className="text-light-purple text-[2rem] font-bold mb-10 uppercase tracking-[2px] font-space-grotesk">
          Loopring Layer 2
        </h2>
        
        <div className="max-w-[1000px] mx-auto shadow-2xl rounded-lg overflow-hidden border border-slate-100">
          <img src={dashboardImg} alt="Dashboard" className="w-full" />
        </div>
        
        <div className="mt-10">
          <a href="#" className="btn-gradient-blue px-10 py-4">
            Launch Layer 2 App
          </a>
          <p className="mt-3 text-[0.8rem] text-slate-500 font-medium">
            No account needed to trade on L2
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
