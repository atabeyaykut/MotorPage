import BrandPage from "@/components/brands/BrandPage";

const ITALJET_CATEGORIES = [
  {
    title: "Dragster",
    models: [
      {
        id: 1,
        name: "Dragster 300",
        description: "İkonik Tasarım Yüksek Performans",
        image: "/brands/italjet/Italjet-Dragster-300-Renk-Secenekleri-Malossi-Graphics-1024x650.webp",
        modelYear: null,
        brand: "italjet",
        slug: "dragster-300"
      },
      {
        id: 2,
        name: "Dragster 200 ABS",
        description: "Sportif ve zarif ruh",
        image: "/brands/italjet/Dragster-200-Black-1024x649.webp",
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
