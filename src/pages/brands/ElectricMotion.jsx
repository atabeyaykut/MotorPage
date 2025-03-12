import BrandPage from "@/components/brands/BrandPage";

const ELECTRIC_MOTION_CATEGORIES = [
  {
    title: "Escape",
    models: [
      {
        id: 1,
        name: "Escape XR",
        description: "Basit, Havalı, Eğlenceli, Şık.",
        image: "https://picsum.photos/seed/escape-xr/800/600",
        modelYear: null,
        brand: "electric-motion",
        slug: "escape-xr"
      }
    ]
  },
  {
    title: "E Pure",
    models: [
      {
        id: 2,
        name: "E Pure Race",
        description: "Basit, Havalı, Eğlenceli, Şık.",
        image: "https://picsum.photos/seed/e-pure-race/800/600",
        modelYear: null,
        brand: "electric-motion",
        slug: "e-pure-race"
      }
    ]
  }
];

const ElectricMotionPage = () => {
  return (
    <BrandPage
      brandName="TRIUMPH"
      description="Saf macera, mutlak avantaj"
      categories={ELECTRIC_MOTION_CATEGORIES}
    />
  );
};

export default ElectricMotionPage;
