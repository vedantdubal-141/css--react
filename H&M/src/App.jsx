import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logo from './components/Logo'
import Ladies from './pages/Ladies'
import Men from './pages/Men'
import Kids from './pages/Kids'
import HomeCategory from './pages/HomeCategory'
import Beauty from './pages/Beauty'
import './App.css'

const Home = () => (
  <div className="flex flex-col gap-12">
    <Hero />
    
    {/* Category Grid Section */}
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 py-8 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[22px] font-bold tracking-tight">Shop by Category</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Link to="/ladies" className="flex flex-col group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-3 bg-gray-100">
            <img src="/src/assets/categories/ladies.png" alt="Ladies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <span className="text-[13px] font-semibold tracking-wide hover:underline cursor-pointer">Ladies</span>
        </Link>
        
        <Link to="/men" className="flex flex-col group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-3 bg-gray-100">
            <img src="/src/assets/categories/men.png" alt="Men" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <span className="text-[13px] font-semibold tracking-wide hover:underline cursor-pointer">Men</span>
        </Link>

        <Link to="/kids" className="flex flex-col group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-3 bg-[#e8e6e1]">
              <img src="/src/assets/categories/kids.png" alt="Kids" className="w-full h-full object-contain p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <span className="text-[13px] font-semibold tracking-wide hover:underline cursor-pointer">Kids</span>
        </Link>

        <Link to="/hmhome" className="flex flex-col group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-3 bg-[#d4ccc4]">
            <img src="/src/assets/categories/home.png" alt="H&M HOME" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <span className="text-[13px] font-semibold tracking-wide hover:underline cursor-pointer">H&M HOME</span>
        </Link>

        <Link to="/beauty" className="flex flex-col group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden mb-3 bg-gray-100">
            <img src="/src/assets/categories/beauty.png" alt="Beauty" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          </div>
          <span className="text-[13px] font-semibold tracking-wide hover:underline cursor-pointer">Beauty</span>
        </Link>
      </div>
    </section>

    {/* Secondary Promo Section */}
    <section className="bg-hm-light-gray py-16 px-4 md:px-12 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">BECOME A MEMBER</h2>
        <p className="text-sm text-gray-600 leading-relaxed font-light">
          Join now and get 10% off your second purchase, and start earning points for every order!
        </p>
        <button className="bg-[#222] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-colors">
          Join Now
        </button>
      </div>
    </section>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ladies" element={<Ladies />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/hmhome" element={<HomeCategory />} />
          <Route path="/beauty" element={<Beauty />} />
        </Routes>
      </main>

      <footer className="bg-[#e4e4e4] pt-16 pb-8 px-4 md:px-12 mt-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 text-[11px]">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest text-[#222]">Shop</h4>
            <div className="flex flex-col gap-2.5 text-gray-600">
              <a href="#" className="hover:text-black">Ladies</a>
              <a href="#" className="hover:text-black">Men</a>
              <a href="#" className="hover:text-black">Baby</a>
              <a href="#" className="hover:text-black">Kids</a>
              <a href="#" className="hover:text-black">H&M HOME</a>
              <a href="#" className="hover:text-black">Sport</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest text-[#222]">Corporate Info</h4>
            <div className="flex flex-col gap-2.5 text-gray-600">
              <a href="#" className="hover:text-black">Career at H&M</a>
              <a href="#" className="hover:text-black">About H&M group</a>
              <a href="#" className="hover:text-black">Sustainability H&M Group</a>
              <a href="#" className="hover:text-black">Press</a>
              <a href="#" className="hover:text-black">Investor relations</a>
              <a href="#" className="hover:text-black">Corporate governance</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest text-[#222]">Help</h4>
            <div className="flex flex-col gap-2.5 text-gray-600">
              <a href="#" className="hover:text-black">Customer Service</a>
              <a href="#" className="hover:text-black">My H&M</a>
              <a href="#" className="hover:text-black">Find a store</a>
              <a href="#" className="hover:text-black">Legal & Privacy</a>
              <a href="#" className="hover:text-black">Contact</a>
              <a href="#" className="hover:text-black">Report a scam</a>
              <a href="#" className="hover:text-black">Cookie Notice</a>
              <button className="text-left hover:text-black">Cookie Settings</button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold uppercase tracking-widest text-[#222]">Become a member</h4>
            <div className="flex flex-col gap-5">
              <p className="text-gray-600 leading-relaxed font-light">
                Join now and get 10% off your second purchase!
              </p>
              <a href="#" className="underline font-bold tracking-tight text-[10px]">READ MORE</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto mt-16 flex flex-col items-center gap-8 border-t border-gray-300 pt-8">
          <div className="flex gap-6">
            {/* Social Icons Placeholder */}
            {['facebook', 'instagram', 'youtube', 'pinterest'].map(social => (
              <span key={social} className="material-icons text-[20px] text-gray-600 cursor-pointer hover:text-black">{social}</span>
            ))}
          </div>
          <p className="text-[10px] text-gray-500 text-center max-w-2xl leading-relaxed">
            The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB. H&M’s business concept is to offer fashion and quality at the best price in a sustainable way. H&M has since it was founded in 1947 grown into one of the world's leading fashion companies.
          </p>
          <div className="mb-8">
             <Logo className="w-[30px] opacity-30" />
          </div>
          <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">India | ₹</p>
        </div>
      </footer>
    </div>
  )
}

export default App
