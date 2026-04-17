import React from 'react';

const Kids = () => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 mt-4 cursor-pointer group">
        <div className="relative">
          <img 
            src="/src/assets/kids/4023BA-4x5-kids-startpage-wk15.jpg" 
            alt="Kids Startpage" 
            className="w-full h-[600px] object-cover object-[center_20%] bg-gray-100"
          />
        </div>
        <div className="text-center mt-6 mb-12">
          <h2 className="text-[18px] font-bold mb-3">Spring adventure begins here</h2>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-[13px] font-semibold underline decoration-2 underline-offset-4 hover:text-gray-700">Shop girls</a>
            <a href="#" className="text-[13px] font-semibold underline decoration-2 underline-offset-4 hover:text-gray-700">Shop boys</a>
            <a href="#" className="text-[13px] font-semibold underline decoration-2 underline-offset-4 hover:text-gray-700">Shop baby</a>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="w-full max-w-[1440px] px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        <div className="cursor-pointer group flex flex-col items-center">
          <img src="/src/assets/kids/4023B-2x3-kids-startpage-wk15.jpg" alt="Style 1" className="w-full aspect-[4/5] object-cover mb-4" />
          <p className="text-[13px] font-semibold underline decoration-1 underline-offset-4 hover:text-gray-700">Striped sets</p>
        </div>
        <div className="cursor-pointer group flex flex-col items-center">
          <img src="/src/assets/kids/4023BE-4x5-kids-startpage-wk15.jpg" alt="Style 2" className="w-full aspect-[4/5] object-cover mb-4" />
          <p className="text-[13px] font-semibold underline decoration-1 underline-offset-4 hover:text-gray-700">Summer dresses</p>
        </div>
      </section>

      <section className="w-full max-w-[800px] px-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        <div className="cursor-pointer flex flex-col items-center">
           <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center text-gray-400">
               <span className="material-icons text-4xl">local_florist</span>
           </div>
           <p className="text-[13px] font-semibold mt-4">Floral prints</p>
        </div>
        <div className="cursor-pointer flex flex-col items-center">
            <div className="w-full h-[500px] bg-[#f4f4f4] flex items-center justify-center text-gray-400">
                <span className="material-icons text-4xl">child_care</span>
            </div>
           <p className="text-[13px] font-semibold mt-4">Baby essentials</p>
        </div>
      </section>

    </main>
  );
};

export default Kids;
