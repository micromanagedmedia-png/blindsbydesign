import SEOHeader from "../components/SEOHeader";
import { Link } from "react-router";

export default function ServiceAreas() {
  const areas = [
    "Portland, ME",
    "South Portland, ME",
    "Augusta, ME",
    "Brunswick, ME",
    "Scarborough, ME"
  ];

  return (
    <>
      <SEOHeader 
        title="Service Areas" 
        description="Serving the Maine coast from Portland to Augusta. Schedule your free in-home consultation today." 
      />
      
      <section className="py-24 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase">Service Areas</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              We bring the showroom directly to your living room. Our team proudly serves the following regions across Maine.
            </p>
          </div>

          <div className="bg-white rounded-xl p-10 max-w-3xl mx-auto shadow-sm border border-slate-200">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-bold text-slate-700 uppercase tracking-wide">
              {areas.map((area, i) => (
                <li key={i} className="flex items-center space-x-3 p-4 bg-slate-50 rounded border border-slate-200 hover:border-sea-blue transition-colors">
                  <div className="w-2 h-2 rounded-full bg-sea-blue" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center border-t border-slate-200 pt-10">
              <p className="text-slate-500 font-medium mb-6">Don't see your town? Give us a call, we likely service your area as well.</p>
              <Link to="/contact" className="inline-flex items-center justify-center bg-sea-blue text-white hover:bg-slate-800 px-8 py-4 rounded font-bold transition-all shadow-sm uppercase tracking-widest text-xs">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
