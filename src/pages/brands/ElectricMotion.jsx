import BrandPage from "@/components/brands/BrandPage";

const ELECTRIC_MOTION_CATEGORIES = [
  {
    title: "Escape",
    models: [
      {
        id: 1,
        name: "Escape XR",
        description: "Basit, Havalı, Eğlenceli, Şık.",
        image: "/brands/electric-motion/Escape-XR-300x186-1.webp",
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
        image: "/brands/electric-motion/Epurerace-RENK-e1723728261200.webp",
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
      brandName="ELECTRIC MOTION"
      description="Keskin gaz tepkisi"
      categories={ELECTRIC_MOTION_CATEGORIES}
    />
  );
};

export default ElectricMotionPage;
