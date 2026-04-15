import mainVideo from "../assets/homepage/main.webm";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Hero Section */}
      <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={mainVideo} type="video/webm" />
        </video>
        
        {/* Transparent Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Hero Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-md">
            New Arrivals
          </h2>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight drop-shadow-lg max-w-4xl">
            The Spring 2026 Collection
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-10 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-sm">
              Shop Ladies
            </button>
            <button className="bg-white text-black px-10 py-3.5 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-sm">
              Shop Men
            </button>
          </div>
        </div>
      </div>
      
      {/* Promo Bar */}
      <div className="w-full bg-[#f4eddd] py-2.5 text-center text-[11px] font-normal text-[#222] tracking-wide">
        Free shipping for members on orders over ₹1,999.00
      </div>
    </section>
  );
};

export default Hero;
