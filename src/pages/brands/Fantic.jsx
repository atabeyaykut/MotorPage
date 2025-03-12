import BrandPage from "@/components/brands/BrandPage";

const FANTIC_CATEGORIES = [
  {
    title: "Caballero",
    models: [
      {
        id: 1,
        name: "CABALLERO 500 Anniversary",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/caballero-500-anniversary/800/600",
        modelYear: null,
        brand: "fantic",
        slug: "caballero-500-anniversary"
      },
      {
        id: 2,
        name: "CABALLERO 500 Deluxe",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/caballero-500-deluxe/800/600",
        modelYear: null,
        brand: "fantic",
        slug: "caballero-500-deluxe"
      },
      {
        id: 3,
        name: "CABALLERO 500 Explorer",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/caballero-500-explorer/800/600",
        modelYear: null,
        brand: "fantic",
        slug: "caballero-500-explorer"
      },
      {
        id: 4,
        name: "CABALLERO 500 Flat Track",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/caballero-500-flat-track/800/600",
        modelYear: null,
        brand: "fantic",
        slug: "caballero-500-flat-track"
      },
      {
        id: 5,
        name: "CABALLERO 500 Rally",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/caballero-500-rally/800/600",
        modelYear: null,
        brand: "fantic",
        slug: "caballero-500-rally"
      },
      {
        id: 6,
        name: "CABALLERO 500 Scrambler",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/caballero-500-scrambler/800/600",
        modelYear: null,
        brand: "fantic",
        slug: "caballero-500-scrambler"
      }
    ]
  },
  {
    title: "Xef",
    models: [
      {
        id: 7,
        name: "XEF 450 4T MY23",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/xef-450-4t-my23/800/600",
        modelYear: "2023",
        brand: "fantic",
        slug: "xef-450-4t-my23"
      },
      {
        id: 8,
        name: "XEF 250 4T MY23",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/xef-250-4t-my23/800/600",
        modelYear: "2023",
        brand: "fantic",
        slug: "xef-250-4t-my23"
      },
      {
        id: 9,
        name: "XEF 250 Enduro Trail 4T",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/xef-250-enduro-trail-4t/800/600",
        modelYear: null,
        brand: "fantic",
        slug: "xef-250-enduro-trail-4t"
      }
    ]
  },
  {
    title: "Xe",
    models: [
      {
        id: 10,
        name: "XE 125 Enduro 2T",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/xe-125-enduro-2t/800/600",
        modelYear: null,
        brand: "fantic",
        slug: "xe-125-enduro-2t"
      }
    ]
  }
];

const FanticPage = () => {
  return (
    <BrandPage
      brandName="FANTIC"
      description="Efsaneyi yaşayın"
      categories={FANTIC_CATEGORIES}
    />
  );
};

export default FanticPage;
