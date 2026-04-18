import React from 'react';

const Ladies = () => {
  const products = [
    "/src/assets/homepage/02b68ddc6b995d2ab6391adbacbfb6b6c0355860.jpg",
    "/src/assets/homepage/14b1758312d41b201f325054927b03df45743c7d.jpg",
    "/src/assets/homepage/1f567edc29ef52bac05a96afbd7db59039369ac3.jpg",
    "/src/assets/homepage/23441653606b5d0b4ff286482875b815c3f3425a.jpg",
    "/src/assets/homepage/25621c2421055ef412617dfcc84067ca7c91c118.jpg",
    "/src/assets/homepage/614782918de031a7c39ba61f5fa3877b6fec4132.jpg",
    "/src/assets/homepage/76fdfb133947267d0c225e72564f07444487c83a.jpg",
    "/src/assets/homepage/af23850bca54f18833d7cfb5578e66e1238591d1.jpg",
    "/src/assets/homepage/b2211a120080d20fd6acfba7351af94b8cfa3f6d.jpg",
    "/src/assets/homepage/b8edeba7cbf1b2d173c9872bfbd409926201ccf8.jpg",
    "/src/assets/homepage/c17d6b3193bb8d9a957104136b93be6ba19ec698.jpg",
    "/src/assets/homepage/c26335b7dd2e6537219411aab3692d0f11aa0efd.jpg"
  ];

  return (
    <main className="w-full bg-white flex flex-col items-center">
      {/* Hero Section (Split) */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div className="cursor-pointer group relative overflow-hidden bg-gray-100">
           <img src="/src/assets/homepage/FNP-W14-MY-CEN-1013B-05-06-3x2.jpg" alt="Spring Style" className="w-full aspect-[3/4] md:aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="cursor-pointer group relative overflow-hidden bg-gray-100">
            <img src="/src/assets/homepage/FNP-1013B-ss-2026-drop2-2x3-FN1.jpg" alt="Summer Edit" className="w-full aspect-[3/4] md:aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      </section>
      
      <div className="text-center mt-6 mb-12">
        <p className="text-[14px] font-medium mb-3">Dreamy spring days</p>
        <a href="#" className="text-[14px] font-semibold underline decoration-2 underline-offset-4 hover:text-gray-700">Shop the collection</a>
      </div>

      {/* Second Split */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="cursor-pointer group flex flex-col items-center">
          <div className="w-full overflow-hidden mb-4 bg-gray-100">
            <img src="/src/assets/homepage/Tops-WCE-wk15.jpg" alt="Striped Top" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <p className="text-[13px] font-semibold underline decoration-1 hover:text-gray-700">Tops</p>
        </div>
        <div className="cursor-pointer group flex flex-col items-center">
          <div className="w-full overflow-hidden mb-4 bg-gray-100">
            <img src="/src/assets/homepage/Dresses-WCE-wk15.jpg" alt="Polka Dot Dress" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <p className="text-[13px] font-semibold underline decoration-1 hover:text-gray-700">Dresses</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mb-20 flex flex-col items-center">
        <h2 className="text-[20px] font-bold mb-8 tracking-tight">Trending arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-12 w-full">
          {products.map((src, i) => (
             <div key={i} className="flex flex-col group cursor-pointer">
               <div className="aspect-[3/4] bg-[#f4f4f4] mb-3 overflow-hidden px-4 py-6">
                 <img src={src} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" alt={`Ladies Product ${i+1}`} />
               </div>
               <div className="flex flex-col gap-1 px-1">
                 <h3 className="text-[12px] font-medium leading-tight">Spring Collection</h3>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* Style Inspiration Scroller / Split Grids */}
      <section className="w-full max-w-[1000px] px-4 mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
           <img src="/src/assets/homepage/DS23I-4x5-Startpage-WK15.jpg" className="w-full aspect-square object-cover bg-gray-100" alt="Casual look" />
        </div>
        <div className="flex flex-col">
            <img src="/src/assets/homepage/WS23K-4x5-Startpage-WK15.jpg" className="w-full aspect-square object-[center_top] object-cover bg-gray-100" alt="Evening out" />
        </div>
      </section>

      <section className="w-full max-w-[1000px] px-4 mb-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
           <img src="/src/assets/homepage/Denim-WCE-wk15.jpg" className="w-full aspect-square object-cover bg-gray-100" alt="Relaxed" />
           <p className="text-center font-semibold text-[13px] underline decoration-1 mt-4">Vacation edit</p>
        </div>
        <div className="flex flex-col">
            <img src="/src/assets/categories/ladies.png" className="w-full aspect-square object-[center_top] object-cover bg-gray-100" alt="City style" />
            <p className="text-center font-semibold text-[13px] underline decoration-1 mt-4">Accessories</p>
        </div>
      </section>
    </main>
  );
};

export default Ladies;
