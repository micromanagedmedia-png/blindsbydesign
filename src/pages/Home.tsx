import SEOHeader from "../components/SEOHeader";
import { Star, Shield, ArrowRight } from "lucide-react";
import Link from "../components/HoverLink";

export default function Home() {
  return (
    <>
      <SEOHeader 
        title="Custom Window Treatments" 
        description="Portland's family-owned destination for custom plantation shutters, wood blinds, and shades. 50 years of experience. Schedule a free consultation today!" 
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-white border-b border-slate-100 flex items-center justify-center pt-24 pb-24 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-sea-blue"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sea-blue">Coastal Maine Professional</span>
            <span className="h-[1px] w-8 bg-sea-blue"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-[1.1] mb-6 max-w-5xl mx-auto tracking-tight">
            Design Your <span className="text-sea-blue uppercase">Perfect</span> Light.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Elevate your home with premium custom window treatments. Family-owned and proudly serving the Maine coast with 50 years of master-level experience.
          </p>
          
          <div className="flex gap-4 mb-10 flex-wrap justify-center">
            <div className="flex items-center bg-stone-100 px-4 py-2 rounded border border-stone-200">
              <Star className="w-4 h-4 text-yellow-500 fill-current mr-2" />
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">5.0 Google Rating</span>
            </div>
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded border border-blue-100">
               <Shield className="w-4 h-4 text-sea-blue mr-2" />
               <span className="text-sm font-bold text-sea-blue uppercase tracking-wide">Child Safety Certified</span>
            </div>
          </div>

          <div className="flex gap-6 items-center flex-col sm:flex-row">
            <Link to="/contact" className="bg-sea-blue text-white px-8 py-4 rounded text-sm font-bold shadow-sm hover:bg-sea-blue-dark transition-colors uppercase tracking-widest flex items-center justify-center space-x-2">
              <span>Free Consultation</span>
            </Link>
            <Link to="/shutters" className="text-sm font-bold text-sea-blue tracking-widest uppercase flex items-center gap-2 hover:opacity-80 transition-opacity">
               Explore Shutters ➔
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#F7F9FB] rounded-xl border border-slate-200 p-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">50 Years</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Of family-owned, master-level experience guiding every recommendation.</p>
          </div>
          <div className="bg-[#F7F9FB] rounded-xl border border-slate-200 p-8 flex flex-col items-center md:items-start text-center md:text-left">
             <Shield className="w-8 h-8 text-sea-blue mb-4" />
             <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">Child Safety First</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Offering cordless and motorized options to keep your little ones secure.</p>
          </div>
          <div className="bg-[#F7F9FB] rounded-xl border border-slate-200 p-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm tracking-widest uppercase font-bold text-slate-400 mb-4 tracking-tight">Trusted Partners</h3>
             <p className="text-slate-700 font-bold uppercase tracking-wide">Norman &middot; Hunter Douglas &middot; Graber</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Curated Collection</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Expertly installed, precisely measured, and designed to complement your coastal lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { path: '/shutters', name: 'Plantation Shutters', desc: 'Timeless elegance with superior light control.' },
              { path: '/blinds', name: 'Premium Blinds', desc: 'Real wood and faux wood options for any room.' },
              { path: '/shades', name: 'Designer Shades', desc: 'Cellular, roller, and roman shades, plus smart motorization.' },
              { path: '/draperies-awnings', name: 'Draperies & Awnings', desc: 'The perfect finishing touch inside and out.' }
            ].map((service) => (
              <Link key={service.path} to={service.path} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col hover:border-sea-blue transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="w-6 h-6 text-sea-blue group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">{service.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <span className="mt-auto text-xs font-bold text-sea-blue tracking-widest uppercase flex items-center gap-2">View ➔</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
