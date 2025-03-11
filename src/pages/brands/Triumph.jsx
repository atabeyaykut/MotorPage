import React, { useEffect } from 'react';
import BrandPage from "@/components/brands/BrandPage";

const TRIUMPH_CATEGORIES = [
  {
    title: "ADVENTURE",
    models: [
      {
        id: 1,
        name: "Tiger 1200 GT Pro",
        description: "Macera dolu yolculuklar için tasarlandı",
        image: "https://picsum.photos/seed/tiger-1200-gt/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "tiger-1200-gt-pro"
      },
      {
        id: 2,
        name: "Tiger 1200 Rally Pro",
        description: "Her yol senin yolun",
        image: "https://picsum.photos/seed/tiger-1200-rally/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "tiger-1200-rally-pro"
      },
      {
        id: 3,
        name: "Tiger 900 GT Pro",
        description: "Şehir ve ötesi için",
        image: "https://picsum.photos/seed/tiger-900-gt/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "tiger-900-gt-pro"
      },
      {
        id: 4,
        name: "Tiger 900 Rally Pro",
        description: "Sınırları zorla",
        image: "https://picsum.photos/seed/tiger-900-rally/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "tiger-900-rally-pro"
      },
      {
        id: 5,
        name: "Tiger Sport 660",
        description: "Günlük macera",
        image: "https://picsum.photos/seed/tiger-sport-660/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "tiger-sport-660"
      }
    ]
  },
  {
    title: "MODERN CLASSICS",
    models: [
      {
        id: 6,
        name: "Speed Twin 1200",
        description: "Modern klasik performans",
        image: "https://picsum.photos/seed/speed-twin-1200/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "speed-twin-1200"
      },
      {
        id: 7,
        name: "Scrambler 1200 XE",
        description: "Modern scrambler ruhu",
        image: "https://picsum.photos/seed/scrambler-1200-xe/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "scrambler-1200-xe"
      },
      {
        id: 8,
        name: "Bonneville T120",
        description: "Klasik İngiliz motosikleti",
        image: "https://picsum.photos/seed/bonneville-t120/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "bonneville-t120"
      },
      {
        id: 9,
        name: "Thruxton RS",
        description: "Modern café racer",
        image: "https://picsum.photos/seed/thruxton-rs/800/600",
        modelYear: "2024",
        brand: "triumph",
        slug: "thruxton-rs"
      }
    ]
  }
];

const TriumphPage = () => {
  useEffect(() => {
    document.title = "Triumph Motosikletler | Daric Motosiklet";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Triumph motosiklet modelleri, özellikleri ve fiyatları. ' +
        'Adventure ve Modern Classics serileri hakkında detaylı bilgi.'
      );
    }
  }, []);

  return (
    <BrandPage
      brandName="TRIUMPH"
      description="Modern klasiklerin öncüsü"
      categories={TRIUMPH_CATEGORIES}
    />
  );
};

export default TriumphPage;
