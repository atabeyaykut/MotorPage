
import BrandPage from '@/components/brands/BrandPage';

/**
 * @component DucatiPage
 * @description Main page component for displaying Ducati motorcycle models by category
 */
const SCRAMBLER_DUCATI_CATEGORIES = [
  {
    title: "SCRAMBLER",
    models: [
      {
        id: 1,
        name: "Scrambler ICON",
        description: "İkonik Görünüm, Modern Performans",
        image: "/brands/scrambler/scrambler-icon.webp",
        modelYear: null,
        brand: "scrambler-ducati",
        slug: "scrambler-icon"
      },
      {
        id: 2,
        name: "Scrambler NIGHTSHIFT",
        description: "Şehrin Keskin Ruhu",
        image: "/brands/scrambler/scrambler-nightshift.webp",
        modelYear: null,
        brand: "scrambler-ducati",
        slug: "scrambler-nightshift"
      },
      {
        id: 3,
        name: "Scrambler Full Throttle",
        description: "Kusursuz Tasarım, Sınırsız Performans Yarışın Ruhunu Şehre Taşı!",
        image: "/brands/scrambler/Scrambler-Full-Throttle-Model-Banner.webp",
        modelYear: null,
        brand: "scrambler-ducati",
        slug: "scrambler-full-throttle"
      },
      {
        id: 4,
        name: "Scrambler Ducati 10° Anniversario Rizoma Edition",
        description: "Güç, Güvenlik ve Tarzın Kusursuz Buluşması",
        image: "/brands/scrambler/scrambler-10°-Anniversario-Rizoma-Edition.png",
        modelYear: null,
        brand: "scrambler-ducati",
        slug: "scrambler-anniversario-rizoma"
      }
    ]
  }
];

const ScramblerDucatiPage = () => {

  return (
    <BrandPage
      brandName="SCRAMBLER DUCATI"
      categories={SCRAMBLER_DUCATI_CATEGORIES}
      img="ducati-scrambler.svg"
    />
  );
};

export default ScramblerDucatiPage;
