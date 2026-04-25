import SEOHeader from "../components/SEOHeader";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function GenericProductPage({ title, description, categories }: { title: string, description: string, categories: { name: string, desc: string }[] }) {
  return (
    <>
      <SEOHeader title={title} description={description} />
      
      {/* Hero */}
      <section className="relative py-24 bg-sea-blue text-white overflow-hidden border-b border-[#132a4a]">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-blue-400"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-100">Premium Collection</span>
            <span className="h-[1px] w-8 bg-blue-400"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 max-w-4xl tracking-tight uppercase">{title}</h1>
          <p className="text-lg md:text-xl font-medium text-blue-100 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-10 shadow-sm border border-slate-200 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{cat.name}</h3>
                <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed font-medium">{cat.desc}</p>
                <Link to="/contact" className="inline-flex items-center space-x-2 text-sea-blue font-bold uppercase tracking-widest text-xs hover:text-sea-blue-dark transition-colors group w-fit">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 gap-6 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Ready to upgrade your windows?</h2>
          <p className="text-lg text-slate-500 mb-8 font-medium">We measure, design, and install. All you do is enjoy the view.</p>
          <Link to="/contact" className="bg-[#1a365d] text-white hover:bg-slate-800 px-8 py-4 rounded font-bold transition-all shadow-sm uppercase tracking-widest text-xs">
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
