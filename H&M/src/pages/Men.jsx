import React from 'react';

const Men = () => {
  // Cutout product images
  const products = [
    "/src/assets/men/0bfda21e45fda6c70354f3fcafc426a93887ac35.jpg",
    "/src/assets/men/3b58eca9f3d67bf9dfc35fd913e57767d692a26b.jpg",
    "/src/assets/men/4a34f5009dbb91ff5cd2912ce06d30dc37f3f22b.jpg",
    "/src/assets/men/5009565ad3d65726a1455213c3465e9f6ae86642.jpg",
    "/src/assets/men/8a12034f680dc18eccb1e2b19ccf470d51a836df.jpg",
    "/src/assets/men/918f3bea62870201503c9219893e02fd13904a31.jpg",
    "/src/assets/men/a83ddd1ca525f2c0680ee4d288e975602b66f9d9.jpg",
    "/src/assets/men/b9ae09745da241ecca9ea3428c3459a32bd67943.jpg",
    "/src/assets/men/bf248f3dfddc71aad414811e57028b0d8348c711.jpg",
    "/src/assets/men/c6f829ad86751d895c07bf616eeb382d5fd35b0b.jpg",
  ];

  return (
    <main className="w-full bg-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mt-4 cursor-pointer group">
        <img 
          src="/src/assets/men/FNP-26-W16-SGMYPHM-LINEN-ME-1332243003-3x2.jpg" 
          alt="Linen Collection" 
          className="w-full bg-gray-100 object-cover"
        />
        <div className="text-center mt-6 mb-12">
          <p className="text-[14px] font-medium mb-3">Linen blend styles</p>
          <a href="#" className="text-[14px] font-semibold underline decoration-2 underline-offset-4 hover:text-gray-700">Shop now</a>
        </div>
      </section>

      {/* Two Column Styling Features */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="cursor-pointer group flex flex-col items-center">
          <img src="/src/assets/men/Trousers-MCE-wk13-16.jpg" alt="Trousers" className="w-full aspect-[4/5] object-cover mb-4" />
          <p className="text-[13px] font-medium hover:underline">Cooling materials details</p>
        </div>
        <div className="cursor-pointer group flex flex-col items-center">
          <img src="/src/assets/men/MF05262P06-4x5.jpg" alt="Essentials" className="w-full aspect-[4/5] object-cover mb-4" />
          <p className="text-[13px] font-medium hover:underline">Everyday looks</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mb-16 flex flex-col items-center">
        <h2 className="text-[20px] font-bold mb-8 tracking-tight">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-12 w-full">
          {products.map((src, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className="aspect-[3/4] bg-[#f4f4f4] mb-3 overflow-hidden">
                <img src={src} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" alt={`Product ${i+1}`} />
              </div>
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-[12px] font-medium leading-tight">Linen-blend Shirt</h3>
                <span className="text-[13px] font-semibold text-hm-red">Rs. 1,499</span>
                <div className="flex gap-1 mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#EADDCD] border border-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-black border border-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-white border border-gray-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Styling Inspiration */}
      <section className="w-full max-w-[1000px] px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/src/assets/men/Linen-clothing-MCE-wk13-16.jpg" alt="Linen Style" className="w-full aspect-[3/4] object-cover" />
          <img src="/src/assets/men/Shorts-MCE-wk13-16.jpg" alt="Shorts Style" className="w-full aspect-[3/4] object-cover" />
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="font-semibold text-[13px] underline decoration-1 underline-offset-4">Resort shirt</a>
          <a href="#" className="font-semibold text-[13px] underline decoration-1 underline-offset-4">Linen sets</a>
        </div>
      </section>

    </main>
  );
};

export default Men;
