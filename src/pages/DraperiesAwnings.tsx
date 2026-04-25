import GenericProductPage from "./GenericProductPage";

export default function DraperiesAwnings() {
  const categories = [
    { name: "Custom Draperies", desc: "Add texture, color, and dramatic height to any room. We offer an extensive fabric library and custom hardware to complete the look." },
    { name: "Valances & Cornices", desc: "Top treatments that add the perfect finishing touch, concealing hardware or adding a pop of pattern above blinds or shades." },
    { name: "Retractable Awnings", desc: "Expand your outdoor living space. Protect your deck or patio from the harsh summer sun with premium motorized awnings." },
    { name: "Window Awnings", desc: "Add curb appeal and reduce indoor cooling costs with beautiful, durable exterior window awnings." }
  ];

  return (
    <GenericProductPage 
      title="Draperies & Awnings" 
      description="The perfect finishing touches, inside and out. Frame your view perfectly."
      categories={categories}
    />
  );
}
