import BrandPage from "@/components/brands/BrandPage";

const KAMAX_CATEGORIES = [
  {
    title: "Cub Pro",
    models: [
      {
        id: 1,
        name: "Cub Pro 125",
        description: "Basit, Havalı, Eğlenceli, Şık.",
        image: "https://picsum.photos/seed/cub-pro-125/800/600",
        modelYear: null,
        brand: "kamax",
        slug: "cub-pro-125"
      }
    ]
  }
];


const KamaxPage = () => {
  return (
    <BrandPage
      brandName="TRIUMPH"
      description="Saf macera, mutlak avantaj"
      categories={KAMAX_CATEGORIES}
    />
  );
};

export default KamaxPage;
