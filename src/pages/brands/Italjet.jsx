import BrandPage from "@/components/brands/BrandPage";

const ITALJET_CATEGORIES = [
  {
    title: "Dragster",
    models: [
      {
        id: 1,
        name: "Dragster 300",
        description: "İkonik Tasarım Yüksek Performans",
        image: "https://picsum.photos/seed/dragster-300/800/600",
        modelYear: null,
        brand: "italjet",
        slug: "dragster-300"
      },
      {
        id: 2,
        name: "Dragster 200 ABS",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/dragster-200-abs/800/600",
        modelYear: null,
        brand: "italjet",
        slug: "dragster-200-abs"
      }
    ]
  }
];

const ItaljetPage = () => {
  return (
    <BrandPage
      brandName="ITALJET"
      description="Alışılmışın dışına çıkın"
      categories={ITALJET_CATEGORIES}
    />
  );
};

export default ItaljetPage;
