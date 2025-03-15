import React, { useEffect } from 'react';
import BrandPage from '@/components/brands/BrandPage';

/**
 * @component DucatiPage
 * @description Main page component for displaying Ducati motorcycle models by category
 */
const DUCATI_CATEGORIES = [
  {
    title: "DIAVEL",
    models: [
      {
        id: 26,
        name: "Diavel V4",
        description: "Mekaniği Sanatla Buluşturan Şaheser",
        image: "/brands/ducati/Ducati-Diavel-V4-Banner-1024x6342-005.avif",
        modelYear: null,
        brand: "ducati",
        slug: "diavel-v4"
      },
      {
        id: 27,
        name: "X Diavel V4",
        description: "Sizi şaşırtmak için tasarlandı",
        image: "/brands/ducati/XDiavel-V4-2025-Dis-banner-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "xdiavel-v4-my2025"
      }
    ]
  },
  {
    title: "DESERTX",
    models: [
      {
        id: 31,
        name: "DesertX",
        description: "Her Yola Hükmet, Her Anı Yaşa",
        image: "/brands/ducati/Ducati-desert-x-banner-1024x63411-1.avif",
        modelYear: null,
        brand: "ducati",
        slug: "desertx"
      },
      {
        id: 29,
        name: "DesertX Discovery",
        description: "Tur Çevikliği ve Arazi Karakteri",
        image: "/brands/ducati/Ducati-desert-x-discovery-banner-model.png",
        modelYear: null,
        brand: "ducati",
        slug: "desertx-discovery"
      },
      {
        id: 30,
        name: "DesertX Rally",
        description: "Hassasiyet ve Eşsiz Kontrol",
        image: "/brands/ducati/DesertX-Rally-banner-1024x634-1.webp",
        modelYear: null,
        brand: "ducati",
        slug: "desertx-rally"
      }
    ]
  },
  {
    title: "HYPERMOTARD",
    models: [
      {
        id: 32,
        name: "Hypermotard 698 Mono",
        description: "Eğlenceye Hakim Ol",
        image: "/brands/ducati/Hypermotard-698-Mono-1024x6349-kopya.avif",
        modelYear: null,
        brand: "ducati",
        slug: "hypermotard-698-mono"
      }
    ]
  },
  {
    title: "MONSTER",
    models: [
      {
        id: 28,
        name: "Monster",
        description: "Güçlü Performans, Modern Görünüm!",
        image: "/brands/ducati/Ducati-Monster-Banner-1024x634.avif",
        modelYear: null,
        brand: "ducati",
        slug: "monster"
      }
    ]
  },
  {
    title: "MULTISTRADA",
    models: [
      {
        id: 1,
        name: "Multistrada V2",
        description: "Yüksek Performans, Maksimum Güvenlik",
        image: "/brands/ducati/Ducati-Multistrada-V2-1024x6349-1.avif",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v2"
      },
      {
        id: 101,
        name: "Multistrada V2",
        description: "Yüksek Performans, Maksimum Güvenlik",
        image: "/brands/ducati/Ducati-Multistrada-V2-MY25-1024x6348-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v2-2025"
      },
      {
        id: 2,
        name: "Multistrada V2 S",
        description: "Yüksek Performans, Maksimum Güvenlik",
        image: "/brands/ducati/Ducati-Multistrada-V2-S-1024x6348-1.avif",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v2-s"
      },
      {
        id: 102,
        name: "Multistrada V2 S",
        description: "Yüksek Performans, Maksimum Güvenlik",
        image: "/brands/ducati/Ducati-Multistrada-V2-S-My-25-1024x6349-1-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v2-s-my2025"
      },
      {
        id: 3,
        name: "Multistrada V4",
        description: "Teknoloji, Güvenlik ve Performansın Dansı",
        image: "/brands/ducati/Ducati-Multistrada-V4-banner-1024x634.avif",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4"
      },
      {
        id: 103,
        name: "Multistrada V4",
        description: "Teknoloji, Güvenlik ve Performansın Dansı",
        image: "/brands/ducati/Ducati-Multistrada-V4-My-25-1024x6349-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v4-my2025"
      },
      {
        id: 9,
        name: "Multistrada V4 Pikes Peak",
        description: "Zirvenin Hakimi",
        image: "/brands/ducati/Ducati-multistrada-v4-pikes-peak-1024x6347-1.avif",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-pikes-peak"
      },
      {
        id: 10,
        name: "Multistrada V4 Pikes Peak",
        description: "Zirvenin Hakimi",
        image: "/brands/ducati/Ducati-Multistrada-V4-Pikes-Peak-My-25-1024x6349-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v4-pikes-peak-my2025"
      },
      {
        id: 11,
        name: "Multistrada V4 RS",
        description: "Zirvenin Kusursuz Uyumu",
        image: "/brands/ducati/Ducati-Multistrada-V4-RS-.avif",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-rs"
      },
      {
        id: 4,
        name: "Multistrada V4 S",
        description: "Teknoloji, Güvenlik ve Performansın Dansı",
        image: "/brands/ducati/Ducati-Multistrada-V4-S-My-25-1024x6349-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v4-s-my2025"
      },
      {
        id: 8,
        name: "Multistrada V4 S Full",
        description: "Yolculuğunuzu Sınırların Ötesine Taşıyın",
        image: "/brands/ducati/Ducati-Multistrada-V4-Rally-1024x634-003.avif",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-s-full"
      },
      {
        id: 5,
        name: "Multistrada V4 S Grand Tour",
        description: "Konfor ve Çok Yönlülüğün Kesişim Noktası",
        image: "/brands/ducati/Multistrada-V4-S-Grand-Tour.webp",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-s-grand-tour"
      },
      {
        id: 7,
        name: "Multistrada V4 S Travel & Radar",
        description: "Teknoloji, Güvenlik ve Performansın Dansı",
        image: "/brands/ducati/Multistrada-V4-S-Travel-And-Radar-Hot-Spot-Banner12-1024x634.avif",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-s-travel-radar"
      },
      {
        id: 6,
        name: "Multistrada V4 Rally",
        description: "Yolculuğunuzu Sınırların Ötesine Taşıyın",
        image: "/brands/ducati/Ducati-Multistrada-V4-Rally-1024x634-003.avif",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-rally"
      }
    ]
  },
  {
    title: "PANIGALE",
    models: [
      {
        id: 1012,
        name: "Panigale V2",
        description: "Performansın İnce Ayrıntıları",
        image: "/brands/ducati/MY23-Panigale-V2-Bk-Model-Blocks-630x390-1.avif",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v2"
      },
      {
        id: 12,
        name: "Panigale V2",
        description: "Performansın İnce Ayrıntıları",
        image: "/brands/ducati/Panigale-V2-MY25-1024x6349-.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "panigale-v2-2025"
      },
      {
        id: 14,
        name: "Panigale V2 Bayliss",
        description: "Sportif ve zarif ruh",
        image: "/brands/ducati/ducati-panigale-V2-bayliss-1024x6345-011.avif",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v2-bayliss"
      },
      {
        id: 13,
        name: "Panigale V2 S",
        description: "Performansın İnce Ayrıntıları",
        image: "/brands/ducati/Panigale-V2-S-MY25-1024x6349-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "panigale-v2-s"
      },
      {
        id: 15,
        name: "Panigale V2 Superquadro Final Edition",
        description: "Performansın İnce Ayrıntıları",
        image: "/brands/ducati/Panigale-V2-Superquadro-Final-Edition-MY25-1024x6349-1.avif",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v2-superquadro-final"
      },
      {
        id: 16,
        name: "Panigale V4",
        description: "Gücü Özgür Bırak",
        image: "/brands/ducati/Ducati-panigale-V4-1024x6344-013.avif",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v4"
      },
      {
        id: 1016,
        name: "Panigale V4",
        description: "Gücü Özgür Bırak",
        image: "/brands/ducati/Ducati-Panigale-V4-Dis-Banner-1024x618.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "panigale-v4-my2025"
      },
      {
        id: 17,
        name: "Panigale V4 S",
        description: "Sportif ve zarif ruh",
        image: "/brands/ducati/Ducati-Panigale-V4-S-Banner-1024x634.avif",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v4-s"
      },
      {
        id: 1017,
        name: "Panigale V4 S",
        description: "Sportif ve zarif ruh",
        image: "/brands/ducati/Ducati-Panigale-V4-S-Dis-Banner-1024x618.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "panigale-v4-s-my2025"
      },
      {
        id: 18,
        name: "Panigale V4 SP 2",
        description: "Performansın Simgesi",
        image: "/brands/ducati/Ducati-Panigale-V4-SP-banner-1024x634.avif",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v4-sp2"
      },
      {
        id: 19,
        name: "Panigale V4 R",
        description: "Hızın Yeni Tanımı",
        image: "/brands/ducati/Ducati-Panigale-V4-R-banner-1024x634-012.avif",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v4-r"
      },
      {
        id: 20,
        name: "Panigale V4 Tricolore",
        description: "Hızın Yeni Tanımı",
        image: "/brands/ducati/Ducati-Panigale-V4-Tricolore-dis-banner-1024x618.avif",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v4-tricolore"
      }
    ]
  },
  {
    title: "STREETFIGHTER",
    models: [
      {
        id: 21,
        name: "Streetfighter V2",
        description: "Sokakların Hükümdarı",
        image: "/brands/ducati/ducati-street-fighter-v2-1024x634.webp",
        modelYear: null,
        brand: "ducati",
        slug: "street-fighter-v2"
      },
      {
        id: 2021,
        name: "Streetfighter V2",
        description: "Sokakların Hükümdarı",
        image: "/brands/ducati/Streetfighter-V2-MY25-1024x6349-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "street-fighter-v2-my2025"
      },
      {
        id: 22,
        name: "Streetfighter V2 S",
        description: "Sokakların Hükümdarı",
        image: "/brands/ducati/Streetfighter-V2-S-MY25-1024x6349-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "street-fighter-v2-s-my2025"
      },
      {
        id: 23,
        name: "Streetfighter V4",
        description: "Sportif ve zarif ruh",
        image: "/brands/ducati/Ducati-Streetfighter-V4-Banner-1024x634.avif",
        modelYear: null,
        brand: "ducati",
        slug: "street-fighter-v4"
      },
      {
        id: 2023,
        name: "Streetfighter V4",
        description: "Sportif ve zarif ruh",
        image: "/brands/ducati/Streetfighter-V4-MY25-1024x6349-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "street-fighter-v4-my2025"
      },
      {
        id: 24,
        name: "Streetfighter V4 S",
        description: "Sportif ve zarif ruh",
        image: "/brands/ducati/Ducati-Panigale-V4-S-Banner-1024x634.avif",
        modelYear: null,
        brand: "ducati",
        slug: "street-fighter-v4-s"
      },
      {
        id: 2024,
        name: "Streetfighter V4 S",
        description: "Sportif ve zarif ruh",
        image: "/brands/ducati/Streetfighter-V4-S-MY25-1024x6349-1.avif",
        modelYear: "2025",
        brand: "ducati",
        slug: "street-fighter-v4-s-my2025"
      },
      {
        id: 25,
        name: "Streetfighter V4 SP 2",
        description: "Sportif ve zarif ruh",
        image: "/brands/ducati/Ducati-street-fighter-v4-sp3.avif",
        modelYear: null,
        brand: "ducati",
        slug: "street-fighter-v4-sp2"
      }
    ]
  }
];

const DucatiPage = () => {
  useEffect(() => {
    document.title = "Ducati Motosikletler | Daric Motosiklet";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Ducati motosiklet modelleri, özellikleri ve fiyatları. ' +
        'Streetfighter, Diavel ve Monster serileri hakkında detaylı bilgi.'
      );
    }
  }, []);

  return (
    <BrandPage
      brandName="DUCATI"
      categories={DUCATI_CATEGORIES}
      img="ducati.png"
    />
  );
};

export default DucatiPage;
