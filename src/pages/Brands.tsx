import SEOHeader from "../components/SEOHeader";
import Link from "../components/HoverLink";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Brands() {
  const brands = [
    {
      name: "Norman",
      description: "Industry-leading shutters, blinds, and shades known for their innovative design, exceptional quality, and energy efficiency. Norman offers a vast selection of materials, colors, and features.",
      features: ["Award-Winning Shutters", "Smart Motorization", "Child Safe Options", "Energy Efficient"]
    },
    {
      name: "Hunter Douglas",
      description: "A pioneer in custom window treatments, Hunter Douglas provides premium, stylish, and highly functional blinds, shades, and shutters with advanced operating systems.",
      features: ["Premium Fabrics", "PowerView® Automation", "Acoustic Insulation", "UV Protection"]
    },
    {
      name: "Graber",
      description: "Dedicated to craftsmanship and detail, Graber offers a wide array of beautiful, reliable, and expertly engineered window treatments to fit any style and budget.",
      features: ["Artisan Craftsmanship", "Eco-Friendly Materials", "Custom Color Matching", "Limited Lifetime Warranty"]
    }
  ];

  return (
    <div className="flex-grow flex flex-col">
      <SEOHeader 
        title="Our Trusted Brands | Blinds by Design" 
        description="We carry top window treatment brands including Norman, Hunter Douglas, and Graber to ensure the highest quality for your home." 
      />
      
      {/* Hero */}
      <section className="relative py-24 bg-[#F7F9FB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-brand-teal"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-teal">Premium Partners</span>
            <span className="h-[1px] w-8 bg-brand-teal"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase">Trusted Brands</h1>
          <p className="text-lg md:text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We partner with the industry's best manufacturers to bring you unparalleled quality, durability, and style.
          </p>
        </div>
      </section>

      {/* Brands List */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {brands.map((brand, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 items-start md:items-center bg-slate-50 rounded-xl p-8 lg:p-12 border border-slate-200 hover:border-brand-teal transition-colors">
                <div className="w-full md:w-1/3 aspect-[3/2] bg-white rounded-lg border border-slate-200 flex items-center justify-center p-8 shadow-sm">
                  <span className="text-2xl font-extrabold text-slate-300 uppercase tracking-widest">{brand.name}</span>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{brand.name}</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">{brand.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {brand.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4 gap-6 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Experience the Quality in Person</h2>
          <p className="text-lg text-teal-50 mb-8 font-medium">We bring samples from all our premium partners directly to your home so you can see them in your own lighting.</p>
          <Link to="/contact" className="bg-brand-yellow text-slate-900 hover:bg-yellow-400 px-8 py-4 rounded font-bold transition-all shadow-sm uppercase tracking-widest text-xs">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
