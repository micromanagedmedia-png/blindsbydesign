import { Outlet } from "react-router";
import Link from "./HoverLink";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import SEOHeader from "./SEOHeader";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F7F9FB] text-slate-800">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 shrink-0 shadow-md">
        {/* Main Nav */}
        <div className="bg-brand-teal w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link to="/" className="flex flex-col z-50 text-white">
              <h1 className="text-3xl font-extrabold tracking-tight uppercase leading-none">Blinds</h1>
              <p className="text-xs uppercase tracking-widest font-semibold mt-0.5">By Design</p>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-white uppercase tracking-wide">
              <Link to="/shutters" className="hover:text-brand-yellow transition-colors">Shutters</Link>
              <Link to="/blinds" className="hover:text-brand-yellow transition-colors">Blinds</Link>
              <Link to="/shades" className="hover:text-brand-yellow transition-colors">Shades</Link>
              <Link to="/brands" className="hover:text-brand-yellow transition-colors">Brands</Link>
              <Link to="/service-areas" className="hover:text-brand-yellow transition-colors">Service Area</Link>
              <Link to="/blog" className="hover:text-brand-yellow transition-colors">Blog</Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact" className="bg-white text-brand-teal px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors uppercase tracking-widest">
                Schedule Consultation
              </Link>
              <a href="tel:207-501-2800" className="bg-white text-brand-teal px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
                (207) 501-2800 <Phone className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-white z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Yellow Promo Banner */}
        <div className="bg-brand-yellow py-2 w-full text-center shadow-sm">
          <Link to="/contact" className="text-slate-900 font-bold text-sm tracking-wide hover:underline uppercase">
            Schedule Your Free In-Home Consultation
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-b border-slate-200 py-4 px-4 flex flex-col space-y-4 font-medium">
            <Link onClick={() => setIsMenuOpen(false)} to="/shutters" className="block px-4 py-2 hover:bg-slate-50 rounded">Shutters</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/blinds" className="block px-4 py-2 hover:bg-slate-50 rounded">Blinds</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/shades" className="block px-4 py-2 hover:bg-slate-50 rounded">Shades</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/brands" className="block px-4 py-2 hover:bg-slate-50 rounded">Brands</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/service-areas" className="block px-4 py-2 hover:bg-slate-50 rounded">Service Area</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="block px-4 py-2 hover:bg-slate-50 rounded">Blog</Link>
            <div className="border-t border-slate-200 pt-4 px-4 pb-2 flex flex-col space-y-4">
               <a href="tel:207-501-2800" className="flex items-center text-brand-teal font-bold space-x-2">
                <Phone className="w-5 h-5" />
                <span>(207) 501-2800</span>
              </a>
              <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="bg-brand-teal text-white px-6 py-3 rounded text-center font-bold uppercase tracking-widest text-xs shadow-md">
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-200 text-slate-600 py-16 shrink-0 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold tracking-tight text-brand-teal uppercase leading-none mb-4">Blinds by Design</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Premium custom window treatment experts with over 50 years of family-owned experience.</p>
            <span className="text-slate-500 text-sm font-semibold uppercase tracking-widest block">Owner:</span>
            <span className="text-slate-700 font-bold uppercase tracking-widest block text-sm mt-1">Phillip McKinnis</span>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Contact</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-700">
              <li><a href="tel:207-501-2800" className="hover:text-brand-teal transition-colors flex items-center gap-2"><Phone className="w-4 h-4 text-brand-teal"/> <span>(207) 501-2800</span></a></li>
              <li>184 Main St, Portland, ME 04106</li>
              <li>182 ME-3, China, ME 04358</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Services</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-700">
              <li><Link to="/shutters" className="hover:text-brand-teal transition-colors">Plantation & Interior Shutters</Link></li>
              <li><Link to="/blinds" className="hover:text-brand-teal transition-colors">Wood & Faux Wood Blinds</Link></li>
              <li><Link to="/shades" className="hover:text-brand-teal transition-colors">Cellular & Roller Shades</Link></li>
              <li><Link to="/draperies-awnings" className="hover:text-brand-teal transition-colors">Custom Draperies & Awnings</Link></li>
              <li><Link to="/brands" className="hover:text-brand-teal transition-colors">Our Trusted Brands</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Trusted Partners</h4>
            <ul className="space-y-3 flex flex-col items-start text-xs font-bold uppercase tracking-wide text-slate-500">
              <li className="bg-slate-100 border border-slate-200 px-4 py-2 w-full max-w-[200px] text-center rounded">Hunter Douglas</li>
              <li className="bg-slate-100 border border-slate-200 px-4 py-2 w-full max-w-[200px] text-center rounded">Norman Shutters</li>
              <li className="bg-slate-100 border border-slate-200 px-4 py-2 w-full max-w-[200px] text-center rounded">Graber Blinds</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Blinds by Design. All rights reserved.</p>
          <div className="flex space-x-4">
             <span className="text-brand-teal">Child Safety Certified</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
