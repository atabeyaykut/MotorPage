import BrandCard from "@/components/brands/BrandCard";

/**
 * Brand data with images, descriptions and paths
 */
const BRANDS = [
  {
    name: "DUCATI",
    description: "Sportif ve zarif ruh",
    image: "/brands/ducati-banner.avif",
    path: "/markalar/ducati"
  },
  {
    name: "TRIUMPH",
    description: "Saf macera, mutlak avantaj",
    image: "/brands/Tiger-1200-Rally-Pro-Banner-002.avif",
    path: "/markalar/triumph"
  },
  {
    name: "SCRAMBLER DUCATI",
    description: "Yeni nesil Scrambler Ducati sizin için burada",
    image: "/brands/scrambler_ducati_marka_banner-2.avif",
    path: "/markalar/scrambler-ducati"
  },
  {
    name: "MOTO MORINI",
    description: "Motosikletlerde yaşamanın yeni bir yolu",
    image: "/brands/moto_morini_marka_banner.avif",
    path: "/markalar/moto-morini"
  },
  {
    name: "ITALJET",
    description: "Alışılmışın dışına çıkın",
    image: "/brands/italjet_marka_banner.avif",
    path: "/markalar/italjet"
  },
  {
    name: "ROYAL ALLOY",
    description: "Şehir hayatına stilinizle karışın",
    image: "/brands/royal-alloy-marka-banner.avif",
    path: "/markalar/royal-alloy"
  },
  {
    name: "FANTIC",
    description: "Efsaneyi yaşayın",
    image: "/brands/fantic-marka-banner.avif",
    path: "/markalar/fantic"
  },
  {
    name: "KAMAX",
    description: "Basit, Havalı, Eğlenceli, Şık.",
    image: "/brands/kamax-marka-banner13.avif",
    path: "/markalar/kamax"
  },
  {
    name: "ELECTRIC MOTION",
    description: "Keskin gaz tepkisi",
    image: "/brands/Escape-XR-300x186-1.webp",
    path: "/markalar/electric-motion"
  }
];

/**
 * BrandsPage component displays all motorcycle brands in a grid layout
 */
const BrandsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Markalarımız</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BRANDS.map((brand) => (
          <BrandCard key={brand.name} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
