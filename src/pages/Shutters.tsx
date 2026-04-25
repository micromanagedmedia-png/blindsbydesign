import GenericProductPage from "./GenericProductPage";

export default function Shutters() {
  const categories = [
    { name: "Plantation Shutters", desc: "The gold standard of enduring style. With wide louvers and exceptional light control, plantation shutters offer a classic Maine coastal look that increases your home's value." },
    { name: "Colonial Shutters", desc: "Traditional elegance with narrower louvers, perfect for historic Portland homes or adding a touch of classic architectural detail." },
    { name: "Interior Wood Shutters", desc: "Crafted from premium hardwoods, these offer the ultimate in warmth, beauty, and customization. Available in a vast array of stains and paints." },
    { name: "Faux Wood Shutters", desc: "The beauty of real wood with incredible durability. Moisture-resistant and perfect for bathrooms, kitchens, or high-humidity areas." }
  ];

  return (
    <GenericProductPage 
      title="Custom Shutters" 
      description="Architectural beauty that lasts a lifetime. Explore our premium selection of interior shutters."
      categories={categories}
    />
  );
}
