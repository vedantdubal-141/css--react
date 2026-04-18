import React from 'react';
import { motion } from 'framer-motion';
import overviewImg from '../../assets/images/page2/overview.png';
import moneyImg from '../../assets/images/page2/money.png';
import stackImg from '../../assets/images/page2/acrossthestack.png';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="pt-20">
      {/* Overview Section */}
      <section className="py-24">
        <div className="container">
          <motion.h1 {...fadeInUp} className="text-center text-5xl md:text-[3rem] font-bold mb-20 uppercase tracking-widest">
            Overview
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr] gap-16 items-center mb-24">
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-sm uppercase font-bold tracking-wider font-space-grotesk">Loopring's Vision</h3>
              <p className="text-slate-500 leading-relaxed">Loopring builds protocols, infrastructure, and user-facing products for the future of finance. We believe this future is built on Ethereum, and specifically on layer 2 (zkRollup).</p>
              <p className="text-slate-500 leading-relaxed">Users of decentralized finance (DeFi) need not choose between security and performance. Loopring's L2 provides a low-fee, high-speed platform for trading, swapping, liquidity providing, and payments - without sacrificing Ethereum security at all.</p>
              <p className="text-slate-500 leading-relaxed">We envision a digital economy where users are empowered and always in control of their assets. Loopring has succeeded in proving that non-custodial technology can replicate custodial alternatives in speed, cost, and experience.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="rounded overflow-hidden grayscale">
              <img src={overviewImg} alt="Overview" className="w-full" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <motion.div {...fadeInUp} className="space-y-4">
              <h3 className="text-lg uppercase font-bold font-space-grotesk tracking-tight">Loopring Protocol is Completely Secure</h3>
              <p className="text-slate-500 leading-relaxed">The security and sovereignty of user assets is Loopring's top priority. We deployed the first zkRollup protocol on Ethereum - the most secure scaling mechanism the industry knows of, whereby users can access their assets in all circumstances.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-4">
              <h3 className="text-lg uppercase font-bold font-space-grotesk tracking-tight">Loopring Protocol is Remarkably Performant</h3>
              <p className="text-slate-500 leading-relaxed">Loopring solves scalability without compromising Ethereum security. Our zkRollup throughput reaches approximately 1000x of Ethereum, or as high as 2,025 trades per second.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-20 items-center">
            <motion.div {...fadeInUp} className="rounded overflow-hidden">
              <img src={moneyImg} alt="Business" className="w-full rounded" />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-6">
              <h3 className="text-sm uppercase font-bold tracking-wider font-space-grotesk">Loopring Protocol is a Business's Best-Friend</h3>
              <p className="text-slate-500 leading-relaxed">Control is a liability. For centralized crypto exchanges, the stress and fear of being hacked is immense. So is the regulatory burden. Loopring protocol ensures that an exchange or payment application simply cannot access or lose user assets.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="bg-loopring-blue py-24 text-white">
        <div className="container">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-[2.5rem] font-bold uppercase mb-14">
            Loopring - Across the Stack
          </motion.h2>
          <motion.p {...fadeInUp} className="max-w-3xl mb-14 text-white/90 leading-relaxed">
            Loopring project began in June 2017, and has evolved into a multifaceted Ethereum effort, operating across the stack, from protocol to product.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-14">
              <motion.div {...fadeInUp} className="space-y-5">
                <h4 className="text-xl font-bold uppercase tracking-wider">Loopring Protocol</h4>
                <p className="text-white/90 leading-relaxed">Loopring protocol is an open source zkRollup protocol. It is a collection of Ethereum smart contracts and ZK circuits which describe how to build highly-secure, highly-scalable orderbook-based DEXes, AMMs, and payment apps.</p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-5">
                <h4 className="text-xl font-bold uppercase tracking-wider">Loopring Relayer</h4>
                <p className="text-white/90 leading-relaxed">Loopring relayer (aka operator) is our implementation of the backend system that interacts with the protocol to make a zkRollup run.</p>
              </motion.div>
            </div>
            <div className="space-y-14">
              <motion.div {...fadeInUp} className="rounded overflow-hidden grayscale mb-8">
                <img src={stackImg} alt="Stack" className="w-full" />
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-5">
                <h4 className="text-xl font-bold uppercase tracking-wider">Loopring Layer 2 App</h4>
                <p className="text-white/90 leading-relaxed">Loopring Layer 2 App is a high-performance, non-custodial exchange and payment platform that the Loopring team operates.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Section */}
      <section className="bg-loopring-blue pb-32">
        <div className="container">
          <motion.div {...fadeInUp} className="bg-white p-12 md:p-20 max-w-4xl mx-auto rounded shadow-[20px_20px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-3xl font-bold uppercase mb-8 tracking-widest font-space-grotesk text-[#0F172A]">Loopring Wallet</h3>
            <p className="text-slate-500 leading-relaxed mb-6">Loopring Wallet is an Ethereum mobile smart contract wallet, with Loopring zkRollup baked in. It is the first smart wallet app with L2 scaling, and provides a secure, intuitive, powerful Ethereum experience in your pocket.</p>
            <p className="text-slate-500 leading-relaxed mb-10">Completely self-custodial, only smarter. You can say goodbye to seed phrases and paper backups, and say hello to social recovery.</p>
            <a href="#" className="font-bold text-loopring-blue">
              Click here to visit the Loopring Smart Wallet page, where you can download the app.
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
