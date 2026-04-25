import GenericProductPage from "./GenericProductPage";

export default function Blinds() {
  const categories = [
    { name: "Wood Blinds", desc: "Bring the outside in with the natural warmth of real wood. Available in numerous stains and paint colors to match your existing trim." },
    { name: "Faux Wood Blinds", desc: "Durable, moisture-resistant, and budget-friendly. These offer the look of real wood but won't warp or fade in high humidity." },
    { name: "Vertical Blinds", desc: "The ideal solution for wide windows and sliding glass doors. Available in fabric, vinyl, and sleek modern materials." },
    { name: "Aluminum/Mini Blinds", desc: "A sleek, practical choice for a modern or industrial aesthetic, offering excellent durability and light control." }
  ];

  return (
    <GenericProductPage 
      title="Custom Blinds" 
      description="Classic, versatile, and beautiful. Find the perfect blinds for privacy and precise light control."
      categories={categories}
    />
  );
}
