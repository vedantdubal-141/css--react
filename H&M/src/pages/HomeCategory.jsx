import React from 'react';

const HomeCategory = () => {
  const pots = [
    "/src/assets/home/3f556c81efec10616f3d2574cebd2d20023fb28f.jpg",
    "/src/assets/home/430a78080275eee3d9e58fd0f244c48f3ee83eec.jpg",
    "/src/assets/home/434077d2852617393c64d1c5f76aff573bc5ef63.jpg",
    "/src/assets/home/46c309b67d588a74b7759b09e911ab35264daa69.jpg",
    "/src/assets/home/479cb283d7ed248ad5b16ddd55f3831aecfaa496.jpg",
    "/src/assets/home/51aa4adbee8b51dd6abe60bb3631a89e4b0676f8.jpg"
  ];
  
  const textiles = [
    "/src/assets/home/79f89912428e6aee1e28a21a8f8b365d17d43b51.jpg",
    "/src/assets/home/8a874e8a96d3cd8184e906fd392992a4f30fe25e.jpg",
    "/src/assets/home/8cfdc874b9936890c0fdfcad00f2a53fb95fab31.jpg",
    "/src/assets/home/a3504478fa8a80cc4e6f16ea13acf883f873652a.jpg",
    "/src/assets/home/b168678da47f852cf6a0e0677dc2443c425e95aa.jpg",
    "/src/assets/home/e4598b2a2c745ad8a68cb0a9e5fa286a939f837e.jpg"
  ];

  return (
    <main className="w-full bg-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mt-4 cursor-pointer group mb-12">
        <img 
          src="/src/assets/home/7033H-wk15-16x9.jpg" 
          alt="Home Spring" 
          className="w-full h-auto bg-gray-100 object-cover"
        />
        <div className="text-center mt-6">
          <p className="text-[14px] font-medium mb-3">Summer dining outdoors</p>
          <a href="#" className="text-[14px] font-semibold underline decoration-2 underline-offset-4 hover:text-gray-700">Shop outdoor living</a>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="cursor-pointer group flex flex-col items-center">
          <img src="/src/assets/home/Duvetcover-Sets-HCE-wk13-16.jpg" alt="Towels" className="w-full aspect-[4/5] object-cover mb-4" />
          <p className="text-[13px] font-semibold underline decoration-1 hover:text-gray-700">Towels</p>
        </div>
        <div className="cursor-pointer group flex flex-col items-center">
          <img src="/src/assets/home/7033E-wk15-4x5.jpg" alt="Pillows" className="w-full aspect-[4/5] object-cover mb-4" />
          <p className="text-[13px] font-semibold underline decoration-1 hover:text-gray-700">Cushions & Covers</p>
        </div>
      </section>

      {/* Product Scroller / Grid */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mb-16 overflow-hidden">
        <h2 className="text-[16px] font-bold mb-6">Pots & Vases</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {pots.map((src, i) => (
            <div key={i} className="min-w-[160px] md:min-w-[200px] flex flex-col group cursor-pointer">
              <div className="bg-[#f4f4f4] mb-3 aspect-square px-4 py-8">
                <img src={src} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" alt="Pot" />
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-[16px] font-bold mb-6 mt-12">Beach Towels & Cushions</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
           {textiles.map((src, i) => (
             <div key={i} className="min-w-[160px] md:min-w-[200px] flex flex-col group cursor-pointer">
               <div className="bg-[#f4f4f4] mb-3 aspect-square px-4 py-8">
                 <img src={src} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform" alt="Textile" />
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Lower Grids */}
      <section className="w-full max-w-[1000px] px-4 mb-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
           <img src="/src/assets/home/7033E-wk15-alt-4x5.jpg" className="w-full aspect-square object-cover" alt="Bed" />
           <p className="text-center font-semibold text-[13px] underline decoration-1">Bed linen</p>
        </div>
        <div className="flex flex-col gap-4">
            <img src="/src/assets/home/Decorations-HCE-wk13-16.jpg" className="w-full aspect-square object-cover" alt="Decor" />
            <p className="text-center font-semibold text-[13px] underline decoration-1">Decorations</p>
        </div>
      </section>
      <section className="w-full max-w-[1000px] px-4 mb-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
           <img src="/src/assets/home/Rugs-HCE-wk13-16.jpg" className="w-full aspect-[4/5] object-cover" alt="Rug" />
           <p className="text-center font-semibold text-[13px] underline decoration-1">Rugs</p>
        </div>
        <div className="flex flex-col gap-4">
            <img src="/src/assets/home/RoomScents-HCE-2x3-wk04-08.jpg" className="w-full aspect-[4/5] object-cover" alt="Scent" />
            <p className="text-center font-semibold text-[13px] underline decoration-1">Room Scents</p>
        </div>
      </section>
    </main>
  );
};

export default HomeCategory;
