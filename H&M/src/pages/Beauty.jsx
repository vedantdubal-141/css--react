import React from 'react';

const Beauty = () => {
  const cutoutsRow1 = [
    "/src/assets/beauty/71ca4bdec2fe04b55743f9f428382f16cbdf83d4.jpg",
    "/src/assets/beauty/a2e46857b78782079d22d0f6ed6aa177499f6880.jpg",
    "/src/assets/beauty/64b7032d4e402b26e12c74b85b9c3a6296d6948b.jpg",
    "/src/assets/beauty/bce3ba4d9912d1e3851bfb3403c4f47e623ccb2e.jpg",
    "/src/assets/beauty/78273ca673b163701ba91fec611e7509ba97050f.jpg",
    "/src/assets/beauty/9f128ff840ee3f5b144c22dbfc345c3a4155356b.jpg"
  ];
  
  const cutoutsRow2 = [
    "/src/assets/beauty/fef22c02a8d6de46b066020942bc79ac776af4c4.jpg",
    "/src/assets/beauty/69d8ea87456f27fa9d5fed7242e7b34907eafab4.jpg",
    "/src/assets/beauty/47eaf7357a4c10eb0e1eff4e15f1a70a891d32cc.jpg",
    "/src/assets/beauty/7f5d66e67f497c44de1974014c32e4d5c282fa22.jpg",
    "/src/assets/beauty/5a6852c9128d3627514abad4fba8515367da7518.jpg",
    "/src/assets/beauty/46cc9b3f0ac003119e52b51af6c39d9141f5686a.jpg"
  ];

  return (
    <main className="w-full bg-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mt-4 cursor-pointer group mb-12">
        <img 
          src="/src/assets/beauty/BS23E-wk13-16x9.jpg" 
          alt="H&M Beauty" 
          className="w-full h-auto bg-gray-100 object-cover"
        />
        <div className="text-center mt-6">
          <p className="text-[14px] font-medium mb-3">Glowing skin essentials</p>
          <a href="#" className="text-[14px] font-semibold underline decoration-2 underline-offset-4 hover:text-gray-700">Explore Beauty</a>
        </div>
      </section>

      {/* Two Column Styling Features */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="cursor-pointer group flex flex-col items-center relative overflow-hidden bg-[#e6e2df]">
           <img src="/src/assets/beauty/BS23F-4x5-NS-Teaser-Startpage-Beauty-wk15.jpg" alt="Foundation" className="w-full aspect-[4/5] object-cover mb-4 group-hover:scale-105 transition-transform duration-500" />
           <p className="text-[13px] font-semibold underline decoration-1 hover:text-gray-700 absolute bottom-6 text-[#222]">Base Makeup</p>
        </div>
        <div className="cursor-pointer group flex flex-col items-center relative overflow-hidden bg-white">
            <img src="/src/assets/beauty/5093-2x3-NS-Teaser-Startpage-Beauty-wk11.jpg" alt="Lip color" className="w-full aspect-[4/5] object-cover mb-4 group-hover:scale-105 transition-transform duration-500" />
            <p className="text-[13px] font-semibold underline decoration-1 hover:text-gray-700 absolute bottom-6 text-white">Lip colors</p>
        </div>
      </section>

      {/* Product Scroller / Grid */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mb-16 overflow-hidden">
        <h2 className="text-[16px] font-bold mb-6">Trending Beauty</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {cutoutsRow1.map((src, i) => (
            <div key={i} className="min-w-[160px] md:min-w-[200px] flex flex-col group cursor-pointer">
              <div className="mb-3 aspect-square px-4 py-8 bg-transparent">
                <img src={src} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" alt="Beauty Product" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar mt-4">
           {cutoutsRow2.map((src, i) => (
             <div key={`row2-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col group cursor-pointer">
               <div className="mb-3 aspect-square px-4 py-8 bg-transparent">
                 <img src={src} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" alt="Beauty Accessory" />
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Lower Grids */}
      <section className="w-full max-w-[1000px] px-4 mb-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
           {/* Fallback to hero images sliced if we don't have the exact lower grid ones, using the same to fill grid structure. */}
           <img src="/src/assets/beauty/5093-2x3-NS-Teaser-Startpage-Beauty-wk11.jpg" className="w-full aspect-square object-[center_top] object-cover" alt="Brush Bags" />
           <p className="text-center font-semibold text-[13px] underline decoration-1">Accessories</p>
        </div>
        <div className="flex flex-col gap-4">
            <img src="/src/assets/beauty/BS23F-4x5-NS-Teaser-Startpage-Beauty-wk15.jpg" className="w-full aspect-square object-[center_top] object-cover" alt="Eyeshadow" />
            <p className="text-center font-semibold text-[13px] underline decoration-1">Eye Makeup</p>
        </div>
      </section>
    </main>
  );
};

export default Beauty;
