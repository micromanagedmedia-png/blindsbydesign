import SEOHeader from "../components/SEOHeader";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "../components/HoverLink";

export default function Contact() {
  return (
    <>
      <SEOHeader 
        title="Schedule Free Consultation" 
        description="Book your free in-home window treatment consultation in Portland, South Portland, or Augusta." 
      />
      
      <section className="py-24 bg-[#F7F9FB] min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Let's Bring <span className="text-sea-blue uppercase tracking-tight">Your Vision</span> to Light.
            </h1>
            <p className="text-xl text-slate-500 mb-10 font-medium">
              Schedule your free, no-obligation, in-home consultation. We'll bring the showroom to you.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                "Exact measurements taken by professionals.",
                "See samples in your actual home lighting.",
                "Expert design advice tailored to your space.",
                "Zero pressure to buy."
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-sea-blue flex-shrink-0" />
                  <span className="text-slate-700 font-bold">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Direct Contact</h3>
              <p className="text-slate-500 mb-2 font-medium">Call us directly to schedule.</p>
              <a href="tel:207-501-2800" className="text-3xl font-bold text-sea-blue hover:text-ocean transition-colors block mb-6">
                (207) 501-2800
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs mb-1 text-slate-400">Portland Area</p>
                  <p>184 Main St</p>
                  <p>Portland, ME 04106</p>
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs mb-1 text-slate-400">Central Maine</p>
                  <p>182 ME-3</p>
                  <p>China, ME 04358</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a365d] p-10 rounded-xl shadow-xl flex flex-col text-white relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Request Consultation</h3>
            
            {/* Note: This is an un-wired form visually for the static site request. Normally we'd wire it to an endpoint. */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-xs font-bold tracking-widest uppercase text-blue-100">First Name</label>
                  <input type="text" id="firstName" className="w-full border-b border-blue-400 focus:border-white bg-transparent py-2 outline-none transition-colors text-white placeholder-blue-300" placeholder="Jane" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-xs font-bold tracking-widest uppercase text-blue-100">Last Name</label>
                  <input type="text" id="lastName" className="w-full border-b border-blue-400 focus:border-white bg-transparent py-2 outline-none transition-colors text-white placeholder-blue-300" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-blue-100">Email Address</label>
                <input type="email" id="email" className="w-full border-b border-blue-400 focus:border-white bg-transparent py-2 outline-none transition-colors text-white placeholder-blue-300" placeholder="jane@example.com" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-bold tracking-widest uppercase text-blue-100">Phone Number</label>
                <input type="tel" id="phone" className="w-full border-b border-blue-400 focus:border-white bg-transparent py-2 outline-none transition-colors text-white placeholder-blue-300" placeholder="(207) 555-0123" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="block text-xs font-bold tracking-widest uppercase text-blue-100">Interested In</label>
                <select id="service" className="w-full border-b border-blue-400 focus:border-white bg-transparent py-2 outline-none transition-colors text-white [&>option]:text-slate-900" required>
                  <option value="">Select an option...</option>
                  <option value="shutters">Plantation Shutters</option>
                  <option value="blinds">Wood/Faux Wood Blinds</option>
                  <option value="shades">Cellular/Roller Shades</option>
                  <option value="draperies">Draperies or Awnings</option>
                  <option value="unsure">Not sure yet, need advice</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-white text-[#1a365d] hover:bg-slate-100 px-8 py-4 rounded text-xs font-bold transition-all shadow-sm mt-8 uppercase tracking-widest">
                Submit Request
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </>
  );
}
