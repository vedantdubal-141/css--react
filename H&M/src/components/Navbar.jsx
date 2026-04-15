import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (category) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150); // slight delay to allow moving mouse into the menu
  };

  return (
    <header className="w-full bg-white flex flex-col items-center pt-2 pb-6 border-b border-gray-100 sticky top-0 z-50 group" onMouseLeave={handleMouseLeave}>
      {/* Top Utility Nav */}
      <div className="w-full max-w-[1440px] px-4 md:px-12 flex justify-between items-center text-[10px] font-medium text-[#222]">
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Customer Service</a>
          <a href="#" className="hover:underline">Newsletter</a>
          <a href="#" className="hover:underline">Find a store</a>
          <div className="flex items-center gap-1 cursor-pointer hover:underline">
            <span className="material-icons text-[12px]">more_horiz</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-1.5 hover:underline">
            <span className="material-icons text-[16px]">person</span> Sign in
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:underline">
            <span className="material-icons text-[16px]">favorite_border</span> Favorites
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:underline">
            <span className="material-icons text-[16px]">shopping_bag</span> Shopping bag (0)
          </a>
        </div>
      </div>

      {/* Center Logo Section */}
      <div className="mt-2 mb-6">
        <a href="/">
          <Logo className="w-[50px] text-hm-red" />
        </a>
      </div>

      {/* Bottom Main Nav & Search */}
      <div className="w-full max-w-[1440px] px-4 md:px-12 relative flex justify-center items-center">
        {/* Main Categories */}
        <nav className="flex items-center gap-6 text-[13px] font-normal text-[#222]">
          {["Ladies", "Men", "Kids", "H&M HOME", "Beauty", "Sale"].map((category) => {
            const path = `/${category.toLowerCase().replace('&', '').replace(/\s+/g, '')}`;
            return (
              <Link 
                key={category} 
                to={path} 
                onMouseEnter={() => handleMouseEnter(category)}
                className={`hover:text-hm-red transition-all cursor-pointer pb-2 border-b-2 border-transparent hover:border-hm-red ${category === "Sale" ? "text-hm-red font-semibold" : ""}`}
              >
                {category}
              </Link>
            );
          })}
        </nav>

        {/* Search Bar - Absolutely positioned on the right */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex items-center border-b border-black w-[180px] pb-0.5">
          <span className="material-icons text-[18px] mr-2 text-[#222]">search</span>
          <input 
            type="text" 
            placeholder="Search products" 
            className="bg-transparent text-[12px] outline-none w-full placeholder:text-gray-400 font-light"
          />
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <MegaMenu 
        category={activeCategory} 
        onMouseEnter={() => handleMouseEnter(activeCategory)}
        onMouseLeave={handleMouseLeave}
      />
    </header>
  );
};

export default Navbar;
