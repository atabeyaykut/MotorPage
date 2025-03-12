import BrandPage from "@/components/brands/BrandPage";

const KAMAX_CATEGORIES = [
  {
    title: "Cub Pro",
    models: [
      {
        id: 1,
        name: "Cub Pro 125",
        description: "Basit, Havalı, Eğlenceli, Şık.",
        image: "/brands/kamax/kamax-marka-banner-bg01.webp",
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
      brandName="KAMAX"
      description="Basit, Havalı, Eğlenceli, Şık."
      categories={KAMAX_CATEGORIES}
    />
  );
};

export default KamaxPage;
