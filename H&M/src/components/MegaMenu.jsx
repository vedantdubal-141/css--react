import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navData = {
  Ladies: {
    links: [
      { title: "New Arrivals", items: ["View All", "Clothes", "Shoes & Accessories"] },
      { title: "Shop by Product", items: ["Dresses", "Tops", "Shirts & Blouses", "Trousers", "Jeans", "Knitwear", "Swimwear", "Shoes", "Accessories", "Basics"] },
      { title: "Trending Now", items: ["Spring Fashion", "Linen Collection", "Wedding Guest", "Office Wear"] },
      { title: "Sustainability", items: ["Our commitment", "Care for your clothes"] },
    ],
    promos: [
      { image: "/src/assets/homepage/ladies.jpg", text: "Spring collection" },
      { image: "/src/assets/homepage/beauty.jpg", text: "Beauty favorites" }
    ]
  },
  Men: {
    links: [
      { title: "New Arrivals", items: ["View All", "Clothes", "Shoes & Accessories", "Underwear & Loungewear"] },
      { title: "Shop by Product", items: ["T-shirts & Tanks", "Shorts", "Shirts", "Trousers", "Jeans", "Hoodies & Sweatshirts", "Jackets & Coats", "Swimwear"] },
      { title: "Trending", items: ["Linen Look", "Relaxed Fits", "Summer Essentials"] },
    ],
    promos: [
      { image: "/src/assets/men/Linen-clothing-MCE-wk13-16.jpg", text: "Linen styles" },
      { image: "/src/assets/men/MF05262P06-4x5.jpg", text: "Everyday essentials" }
    ]
  },
  Kids: {
    links: [
      { title: "New Arrivals", items: ["Clothes", "Shoes", "Accessories"] },
      { title: "Shop by Product", items: ["Baby (0-2 Y)", "Kids (2-8 Y)", "Older Kids (9-14 Y)", "Dresses", "Tops", "Bottoms", "Outerwear"] },
      { title: "Special Collections", items: ["Character Shop", "Occasion Wear", "Swimwear"] },
    ],
    promos: [
      { image: "/src/assets/kids/4023BA-4x5-kids-startpage-wk15.jpg", text: "New season Kids" },
      { image: "/src/assets/kids/4023BE-4x5-kids-startpage-wk15.jpg", text: "Baby outfits" }
    ]
  },
  "H&M HOME": {
    links: [
      { title: "New Arrivals", items: ["View All", "Spring Decor", "Bedroom", "Living Room"] },
      { title: "Shop by Product", items: ["Bed Linen", "Cushions & Covers", "Decorations", "Towels", "Kitchen & Tableware", "Storage", "Rugs", "Posters"] },
      { title: "Trending", items: ["Outdoor Living", "Color Pops", "Classic Hues"] },
    ],
    promos: [
      { image: "/src/assets/home/7033E-wk15-4x5.jpg", text: "Bedroom updates" },
      { image: "/src/assets/home/Decorations-HCE-wk13-16.jpg", text: "Outdoor living" }
    ]
  }
};

const MegaMenu = ({ category, onMouseEnter, onMouseLeave }) => {
  const data = navData[category];

  if (!data) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white border-b border-gray-200 z-40 transition-all duration-300 ease-in-out shadow-sm"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-8 flex justify-between">
        
        {/* Left Side: Links Column */}
        <div className="flex gap-16 flex-1">
          {data.links.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3 className="text-[14px] font-semibold text-[#222] mb-1">{column.title}</h3>
              <ul className="flex flex-col gap-2">
                {column.items.map((item, i) => (
                  <li key={i}>
                    <Link to={`/${category.toLowerCase().replace(/[^a-z]/g, '')}`} className="text-[13px] text-gray-600 hover:text-hm-red hover:underline decoration-1 underline-offset-4">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Side: Promos */}
        <div className="flex gap-4 w-[400px]">
          {data.promos.map((promo, idx) => (
            <div key={idx} className="flex-1 flex flex-col gap-2 cursor-pointer group">
              <div className="relative overflow-hidden w-full h-[250px] bg-gray-100">
                <img 
                  src={promo.image} 
                  alt={promo.text} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-[13px] font-medium text-center hover:underline">{promo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
