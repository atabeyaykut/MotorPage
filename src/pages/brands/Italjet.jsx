import BrandPage from "@/components/brands/BrandPage";

const ITALJET_CATEGORIES = [
  {
    title: "ADVENTURE",
    models: [
      {
        id: "tiger-1200",
        name: "Tiger 1200",
        description: "Macera dolu yolculuklar için tasarlandı",
        image: "https://picsum.photos/1800/1200",
        modelYear: "2024",
      }, {
        id: "tiger-1200",
        name: "Tiger 1200",
        description: "Macera dolu yolculuklar için tasarlandı",
        image: "https://picsum.photos/1800/1200",
        modelYear: "2024",
      }, {
        id: "tiger-1200",
        name: "Tiger 1200",
        description: "Macera dolu yolculuklar için tasarlandı",
        image: "https://picsum.photos/1800/1200",
        modelYear: "2024",
      }, {
        id: "tiger-1200",
        name: "Tiger 1200",
        description: "Macera dolu yolculuklar için tasarlandı",
        image: "https://picsum.photos/1800/1200",
        modelYear: "2024",
      }, {
        id: "tiger-1200",
        name: "Tiger 1200",
        description: "Macera dolu yolculuklar için tasarlandı",
        image: "https://picsum.photos/1800/1200",
        modelYear: "2024",
      }, {
        id: "tiger-1200",
        name: "Tiger 1200",
        description: "Macera dolu yolculuklar için tasarlandı",
        image: "https://picsum.photos/1800/1200",
        modelYear: "2024",
      },
      // Add more models as needed
    ],
  },
  {
    title: "MODERN CLASSICS",
    models: [
      {
        id: "speed-twin",
        name: "Speed Twin 1200",
        description: "Modern klasik performans",
        image: "https://picsum.photos/1800/1200",
        modelYear: "2024",
      },
      // Add more models as needed
    ],
  },
];

const ItaljetPage = () => {
  return (
    <BrandPage
      brandName="TRIUMPH"
      description="Saf macera, mutlak avantaj"
      categories={ITALJET_CATEGORIES}
    />
  );
};

export default ItaljetPage;
