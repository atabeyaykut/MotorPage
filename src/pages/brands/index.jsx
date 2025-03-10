import BrandCard from "@/components/brands/BrandCard";

/**
 * Brand data with images, descriptions and paths
 */
const BRANDS = [
  {
    name: "DUCATI",
    description: "Sportif ve zarif ruh",
    image: "https://korlas.com.tr/wp-content/uploads/2024/09/ducati_markalar_banner.png",
    path: "/markalar/ducati"
  },
  {
    name: "TRIUMPH",
    description: "Saf macera, mutlak avantaj",
    image: "https://korlas.com.tr/wp-content/uploads/2023/10/Tiger-1200-Rally-Pro-Banner-002.png",
    path: "/markalar/triumph"
  },
  {
    name: "SCRAMBLER DUCATI",
    description: "Yeni nesil Scrambler Ducati sizin için burada",
    image: "https://korlas.com.tr/wp-content/uploads/2024/09/scrambler_ducati_marka_banner-2.png",
    path: "/markalar/scrambler-ducati"
  },
  {
    name: "MOTO MORINI",
    description: "Motosikletlerde yaşamanın yeni bir yolu",
    image: "https://korlas.com.tr/wp-content/uploads/2024/09/moto_morini_marka_banner.png",
    path: "/markalar/moto-morini"
  },
  {
    name: "ITALJET",
    description: "Alışılmışın dışına çıkın",
    image: "https://korlas.com.tr/wp-content/uploads/2024/09/italjet_marka_banner.png",
    path: "/markalar/italjet"
  },
  {
    name: "ROYAL ALLOY",
    description: "Şehir hayatına stilinizle karışın",
    image: "https://korlas.com.tr/wp-content/uploads/2024/09/royal-alloy-marka-banner.png",
    path: "/markalar/royal-alloy"
  },
  {
    name: "FANTIC",
    description: "Efsaneyi yaşayın",
    image: "https://korlas.com.tr/wp-content/uploads/2024/09/fantic-marka-banner.png",
    path: "/markalar/fantic"
  },
  {
    name: "KAMAX",
    description: "Basit, Havalı, Eğlenceli, Şık.",
    image: "https://korlas.com.tr/wp-content/uploads/2024/09/kamax-marka-banner13.png",
    path: "/markalar/kamax"
  },
  {
    name: "ELECTRIC MOTION",
    description: "Keskin gaz tepkisi",
    image: "https://korlas.com.tr/wp-content/uploads/2024/08/Escape-XR-300x186-1.webp",
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
