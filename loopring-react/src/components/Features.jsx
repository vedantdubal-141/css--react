import React from 'react';
import FeatureCard from './FeatureCard';
import secureIcon from '../assets/images/page1/secure.svg';
import throughputIcon from '../assets/images/page1/highthrough.svg';
import costIcon from '../assets/images/page1/lowcost.svg';

const Features = () => {
  const features = [
    {
      icon: secureIcon,
      title: "Secure",
      desc: "Loopring is non-custodial and uses zero-knowledge proofs to help users keep control of their assets at all times.",
      delay: 0.1
    },
    {
      icon: throughputIcon,
      title: "High Throughput",
      desc: "Highly scalable architecture that allows off-chain computation without sacrificing on-chain security guarantees.",
      delay: 0.2
    },
    {
      icon: costIcon,
      title: "Low Cost",
      desc: "Loopring performs off-chain batching to keep costs low. Transactions are 100x cheaper than on mainnet.",
      delay: 0.3
    }
  ];

  return (
    <section className="bg-loopring-blue py-20 px-5 pb-32">
      <div className="container">
        <h2 className="text-white text-center text-3xl md:text-[2.5rem] mb-16 uppercase font-space-grotesk font-bold">
          Why Loopring?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="bg-black text-white px-9 py-4 font-semibold uppercase text-[0.9rem] inline-block transition-all hover:bg-zinc-900">
            Learn more about Loopring
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
