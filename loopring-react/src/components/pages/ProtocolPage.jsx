import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import timeVideo from '../../assets/images/page3/time.mp4';

const DigitCard = ({ value, bgColor = "bg-[#1F2937]", textColor = "text-white" }) => (
  <div className={`${bgColor} ${textColor} font-space-grotesk text-4xl md:text-6xl font-bold w-10 h-16 md:w-14 md:h-24 flex items-center justify-center rounded-md`}>
    {value}
  </div>
);

const ProtocolPage = () => {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    }
  }, [isInView]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="pt-20">
      {/* Hero Video */}
      <section className="bg-[#FAFAFA] py-16 md:py-32 text-center">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl"
          >
            <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-auto">
              <source src={timeVideo} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* Throughput */}
      <section className="py-24 text-center bg-white">
        <div className="container">
          <motion.p {...fadeInUp} className="max-w-3xl mx-auto text-slate-500 leading-relaxed text-lg mb-12">
            Loopring protocol can settle up to <strong>2,025</strong> trades per second while guaranteeing the same level of security as the underlying Ethereum blockchain.
          </motion.p>
          
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-4">
              <a href="#" className="flex items-center gap-2 font-bold text-loopring-blue border-b border-loopring-blue pb-1">
                <i className="fas fa-arrow-right text-xs" /> Loopring Smart Contracts <i className="fas fa-file-pdf" />
              </a>
              <a href="#" className="flex items-center gap-2 font-bold text-loopring-blue border-b border-loopring-blue pb-1">
                <i className="fas fa-arrow-right text-xs" /> Loopring ZK Circuits <i className="fab fa-github" />
              </a>
            </div>
            <a href="#" className="btn-gradient-purple px-10">
              Check out Loopring's latest release
            </a>
          </motion.div>
        </div>
      </section>

      {/* Low Settlement Cost (Blue) */}
      <section className="bg-loopring-blue py-24 text-white text-center">
        <div className="container">
          <motion.h3 {...fadeInUp} className="text-xl font-bold uppercase tracking-widest mb-10">
            Low Settlement Cost
          </motion.h3>
          
          <motion.div {...fadeInUp} className="flex justify-center gap-2 md:gap-4 mb-10">
            <DigitCard value="4" bgColor="bg-white" textColor="text-loopring-blue" />
            <DigitCard value="5" bgColor="bg-white" textColor="text-loopring-blue" />
            <DigitCard value="0" bgColor="bg-white" textColor="text-loopring-blue" />
          </motion.div>

          <motion.p {...fadeInUp} className="max-w-3xl mx-auto text-white/95 leading-relaxed text-lg mb-10">
            The settlement cost per trade is roughly <strong>450 to 800 GAS</strong> on layer-1, which is 0.15-0.30% of the cost of most layer-1 DEX protocols.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
               <a href="#" className="text-white border-b border-white/50 text-sm font-semibold">Loopring Smart Contracts</a>
               <a href="#" className="text-white border-b border-white/50 text-sm font-semibold">Loopring ZK Circuits</a>
            </div>
            <button className="bg-white text-loopring-blue px-8 py-3 rounded font-bold transition-transform hover:-translate-y-1">
              Check out Loopring's latest release
            </button>
          </motion.div>
        </div>
      </section>

      {/* Design Section */}
      <section className="bg-slate-50 py-24">
        <div className="container">
          <motion.h2 {...fadeInUp} className="text-center text-4xl font-bold uppercase mb-16">Design</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
            <motion.div {...fadeInUp} className="space-y-10">
              <div>
                <h4 className="text-slate-400 uppercase text-sm font-bold tracking-widest mb-5">Whitepaper (Deprecated)</h4>
                <p className="text-slate-600 text-[0.9rem] leading-relaxed">We published a Whitepaper for version 1.0, 1.5, and 2.0 (non-zkRollup). For 3.0, we wanted to verify the design first. Please refer to version 3.6 Design Doc below.</p>
              </div>
              <div>
                <h4 className="text-slate-400 uppercase text-sm font-bold tracking-widest mb-5">Design Doc</h4>
                <p className="text-slate-600 text-[0.9rem] leading-relaxed mb-6">We designed Loopring 3.0 with two major objectives in mind: security and performance. The protocol ensures that users can withdraw their assets under all circumstances.</p>
                <a href="#" className="text-[#64748B] text-[0.85rem] font-bold border-b border-slate-300">Loopring 3.8 Design Doc ----------------&gt;</a>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h4 className="text-slate-400 uppercase text-sm font-bold tracking-widest mb-5">Building Blocks</h4>
              <ul className="space-y-4">
                {[
                  "Vitalik's post on data availability",
                  "Vitalik's tech-talk on zkRollup",
                  "Zero Knowledge Proof / ZKP",
                  "libsnark",
                  "ethsnarks",
                  "Poseidon hash function",
                  "Quad-Merkle Tree",
                  "Loopring 3.6 smart contracts",
                  "Loopring 3.6 ZKP circuits"
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-600 text-[0.9rem] border-b border-slate-200 border-dashed pb-2 hover:text-loopring-blue cursor-pointer transition-colors">
                    {item} {Array(Math.max(0, 35 - item.length)).fill('-').join('')}&gt;
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProtocolPage;
