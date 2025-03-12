
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
        image: "https://picsum.photos/seed/scrambler-icon/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "scrambler-icon"
      },
      {
        id: 2,
        name: "Scrambler NIGHTSHIFT",
        description: "Şehrin Keskin Ruhu",
        image: "https://picsum.photos/seed/scrambler-nightshift/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "scrambler-nightshift"
      },
      {
        id: 3,
        name: "Scrambler Full Throttle",
        description: "Kusursuz Tasarım, Sınırsız Performans Yarışın Ruhunu Şehre Taşı!",
        image: "https://picsum.photos/seed/scrambler-full-throttle/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "scrambler-full-throttle"
      },
      {
        id: 4,
        name: "Scrambler Ducati 10° Anniversario Rizoma Edition",
        description: "Güç, Güvenlik ve Tarzın Kusursuz Buluşması",
        image: "https://picsum.photos/seed/scrambler-anniversario/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "scrambler-anniversario-rizoma"
      }
    ]
  }
];

const ScramblerDucatiPage = () => {

  return (
    <BrandPage
      brandName="SCRAMBLER DUCATI"
      description="Yeni nesil Scrambler Ducati sizin için burada"
      categories={SCRAMBLER_DUCATI_CATEGORIES}
    />
  );
};

export default ScramblerDucatiPage;
