import GenericProductPage from "./GenericProductPage";

export default function Shades() {
  const categories = [
    { name: "Cellular Shades", desc: "Also known as honeycomb shades, these are the ultimate in energy efficiency, trapping air to keep your Maine home warm in the winter and cool in the summer." },
    { name: "Roller Shades", desc: "Clean lines and a minimalistic profile. Available in hundreds of fabrics, from sheer to blackout, with custom valance options." },
    { name: "Roman Shades", desc: "The softness of a drapery with the functionality of a shade. Available in flat, teardrop, or cascading folds." },
    { name: "Motorized Shades", desc: "The ultimate convenience. Control your shades with a remote, your smartphone, or voice commands. Ideal for hard-to-reach windows and smart homes." }
  ];

  return (
    <GenericProductPage 
      title="Custom Shades" 
      description="Soft fabrics, energy efficiency, and modern motorization. Discover the perfect shade for every room."
      categories={categories}
    />
  );
}
