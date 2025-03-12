import BrandPage from "@/components/brands/BrandPage";

const MOTO_MORINI_CATEGORIES = [
  {
    title: "X-Cape",
    models: [
      {
        id: 1,
        name: "X-Cape",
        description: "Sınırları aşın, maceraya yeni bir soluk getirin!",
        image: "https://picsum.photos/seed/x-cape/800/600",
        modelYear: null,
        brand: "moto morini",
        slug: "x-cape"
      }
    ]
  },
  {
    title: "Seiemmezzo",
    models: [
      {
        id: 2,
        name: "Seiemmezzo SCR",
        description: "Stil ve inovasyonun ortak noktası",
        image: "https://picsum.photos/seed/seiemmezzo-scr/800/600",
        modelYear: null,
        brand: "moto morini",
        slug: "seiemmezzo-scr"
      }
    ]
  }
];

const MotoMoriniPage = () => {
  return (
    <BrandPage
      brandName="TRIUMPH"
      description="Saf macera, mutlak avantaj"
      categories={MOTO_MORINI_CATEGORIES}
    />
  );
};

export default MotoMoriniPage;
