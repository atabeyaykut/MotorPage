import BrandPage from "@/components/brands/BrandPage";

const MOTO_MORINI_CATEGORIES = [
  {
    title: "X-Cape",
    models: [
      {
        id: 1,
        name: "X-Cape",
        description: "Sınırları aşın, maceraya yeni bir soluk getirin!",
        image: "/brands/moto-morini/X-cape-banner-1024x634.webp",
        modelYear: null,
        brand: "moto-morini",
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
        image: "/brands/moto-morini/Moto-Morini-SCR-Banner-1024x634.webp",
        modelYear: null,
        brand: "moto-morini",
        slug: "seiemmezzo-scr"
      }
    ]
  }
];

const MotoMoriniPage = () => {
  return (
    <BrandPage
      brandName="MOTO MORINI"
      categories={MOTO_MORINI_CATEGORIES}
      img="moto-morini.webp"
    />
  );
};

export default MotoMoriniPage;
