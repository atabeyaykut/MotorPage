import BrandPage from "@/components/brands/BrandPage";

const ROYAL_ALLOY_CATEGORIES = [
  {
    title: "Tigara Grande",
    models: [
      {
        id: 1,
        name: "TG 300 S LC ABS",
        description: "Vintage Tasarım, Güçlü Performans",
        image: "https://picsum.photos/seed/tg-300-s-lc-abs/800/600",
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
        image: "https://picsum.photos/seed/gp-300-s-lc-abs/800/600",
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
      brandName="TRIUMPH"
      description="Saf macera, mutlak avantaj"
      categories={ROYAL_ALLOY_CATEGORIES}
    />
  );
};

export default RoyalAlloyPage;
