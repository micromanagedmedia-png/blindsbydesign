import SEOHeader from "../components/SEOHeader";
import Link from "../components/HoverLink";

export default function Blog() {
  const posts = [
    {
      title: "Why Plantation Shutters Are Perfect for Historic Portland Homes",
      date: "May 15, 2026",
      excerpt: "Discover why these classic window treatments are the ideal choice for complementing the architectural detail of Maine's historic coastal properties.",
      category: "Design Tips"
    },
    {
      title: "Motorized Shades: The Ultimate Convenience for Hard-to-Reach Windows",
      date: "April 22, 2026",
      excerpt: "Learn how smart motorization can solve your biggest window treatment headaches while integrating seamlessly with your smart home setup.",
      category: "Product Features"
    },
    {
      title: "Choosing the Right Blinds for High Humidity Areas",
      date: "March 10, 2026",
      excerpt: "Bathrooms and kitchens require special consideration. We break down the differences between wood, faux wood, and aluminum for these challenging spaces.",
      category: "Buying Guide"
    }
  ];

  return (
    <>
      <SEOHeader 
        title="Blog & Industry News" 
        description="Tips, trends, and buying guides for custom window treatments, blinds, shades, and shutters." 
      />
      
      <section className="py-24 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight uppercase">Design Insights</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Latest news, styling tips, and trends from our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:border-sea-blue transition-all group">
                <div className="aspect-video bg-slate-100 flex items-center justify-center p-6 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">
                  [ Article Image ]
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-sea-blue transition-colors">
                    <Link to="#">{post.title}</Link>
                  </h3>
                  <p className="text-slate-500 flex-grow mb-6 text-sm leading-relaxed">{post.excerpt}</p>
                  <Link to="#" className="text-sea-blue font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors mt-auto">
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
