import BrandPage from "@/components/brands/BrandPage";

const ROYAL_ALLOY_CATEGORIES = [
  {
    title: "Tigara Grande",
    models: [
      {
        id: 1,
        name: "TG 300 S LC ABS",
        description: "Vintage Tasarım, Güçlü Performans",
        image: "/brands/royal-alloy/Royal-Alloy-GP-300-S-ABS-1024x634.webp",
        modelYear: null,
        brand: "royal alloy",
        slug: "tg-300-s-lc-abs"
      }
    ]
  },
  {
    title: "Grand Prix",
    models: [
      {
        id: 2,
        name: "GP 300 S LC ABS",
        description: "Klasik Tasarım, Modern Performans",
        image: "/brands/royal-alloy/Royal-Alloy-TG-300-ABS-1024x634.webp",
        modelYear: null,
        brand: "royal alloy",
        slug: "gp-300-s-lc-abs"
      }
    ]
  }
];

const RoyalAlloyPage = () => {
  return (
    <BrandPage
      brandName="ROYAL ALLOY"
      categories={ROYAL_ALLOY_CATEGORIES}
      img="royal-alloy.png"
    />
  );
};

export default RoyalAlloyPage;
