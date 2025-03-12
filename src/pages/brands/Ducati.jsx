import React, { useMemo, useEffect } from 'react';
import ModelCategory from "@/components/motorcycle/ModelCategory";
import { cn } from "@/lib/utils";
import BrandPage from '@/components/brands/BrandPage';

/**
 * @component DucatiPage
 * @description Main page component for displaying Ducati motorcycle models by category
 */
const DUCATI_CATEGORIES = [
  {
    title: "MULTISTRADA",
    models: [
      {
        id: 1,
        name: "Multistrada V2",
        description: "Yüksek Performans, Maksimum Güvenlik",
        image: "https://picsum.photos/seed/multistrada-v2/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v2"
      },
      {
        id: 2,
        name: "Multistrada V2 S",
        description: "Yüksek Performans, Maksimum Güvenlik",
        image: "https://picsum.photos/seed/multistrada-v2-s/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v2-s"
      },
      {
        id: 3,
        name: "Multistrada V4",
        description: "Teknoloji, Güvenlik ve Performansın Dansı",
        image: "https://picsum.photos/seed/multistrada-v4/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v4"
      },
      {
        id: 4,
        name: "Multistrada V4 S",
        description: "Teknoloji, Güvenlik ve Performansın Dansı",
        image: "https://picsum.photos/seed/multistrada-v4-s/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v4-s"
      },
      {
        id: 5,
        name: "Multistrada V4 S Grand Tour",
        description: "Konfor ve Çok Yönlülüğün Kesişim Noktası",
        image: "https://picsum.photos/seed/multistrada-v4-s-grand-tour/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-s-grand-tour"
      },
      {
        id: 6,
        name: "Multistrada V4 Rally",
        description: "Yolculuğunuzu Sınırların Ötesine Taşıyın",
        image: "https://picsum.photos/seed/multistrada-v4-rally/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-rally"
      },
      {
        id: 7,
        name: "Multistrada V4 S Travel & Radar",
        description: "Teknoloji, Güvenlik ve Performansın Dansı",
        image: "https://picsum.photos/seed/multistrada-v4-s-travel-radar/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-s-travel-radar"
      },
      {
        id: 8,
        name: "Multistrada V4 S Full",
        description: "Yolculuğunuzu Sınırların Ötesine Taşıyın",
        image: "https://picsum.photos/seed/multistrada-v4-s-full/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-s-full"
      },
      {
        id: 9,
        name: "Multistrada V4 Pikes Peak",
        description: "Zirvenin Hakimi",
        image: "https://picsum.photos/seed/multistrada-v4-pikes-peak/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-pikes-peak"
      },
      {
        id: 10,
        name: "Multistrada V4 Pikes Peak",
        description: "Zirvenin Hakimi",
        image: "https://picsum.photos/seed/multistrada-v4-pikes-peak-2025/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "multistrada-v4-pikes-peak-my-2025"
      },
      {
        id: 11,
        name: "Multistrada V4 RS",
        description: "Zirvenin Kusursuz Uyumu",
        image: "https://picsum.photos/seed/multistrada-v4-rs/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "multistrada-v4-rs"
      }
    ]
  },
  {
    title: "PANIGALE",
    models: [
      {
        id: 12,
        name: "Panigale V2",
        description: "Performansın İnce Ayrıntıları",
        image: "https://picsum.photos/seed/panigale-v2/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "panigale-v2"
      },
      {
        id: 13,
        name: "Panigale V2 S",
        description: "Performansın İnce Ayrıntıları",
        image: "https://picsum.photos/seed/panigale-v2-s/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "panigale-v2-s"
      },
      {
        id: 14,
        name: "Panigale V2 Bayliss",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/panigale-v2-bayliss/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v2-bayliss"
      },
      {
        id: 15,
        name: "Panigale V2 Superquadro Final Edition",
        description: "Performansın İnce Ayrıntıları",
        image: "https://picsum.photos/seed/panigale-v2-superquadro/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v2-superquadro-final"
      },
      {
        id: 16,
        name: "Panigale V4",
        description: "Gücü Özgür Bırak",
        image: "https://picsum.photos/seed/panigale-v4/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "panigale-v4"
      },
      {
        id: 17,
        name: "Panigale V4 S",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/panigale-v4-s/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "panigale-v4-s"
      },
      {
        id: 18,
        name: "Panigale V4 SP 2",
        description: "Performansın Simgesi",
        image: "https://picsum.photos/seed/panigale-v4-sp2/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v4-sp2"
      },
      {
        id: 19,
        name: "Panigale V4 R",
        description: "Hızın Yeni Tanımı",
        image: "https://picsum.photos/seed/panigale-v4-r/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "panigale-v4-r"
      },
      {
        id: 20,
        name: "Panigale V4 Tricolore",
        description: "Hızın Yeni Tanımı",
        image: "https://picsum.photos/seed/panigale-v4-tricolore/800/600",
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
        image: "https://picsum.photos/seed/streetfighter-v2/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "streetfighter-v2"
      },
      {
        id: 22,
        name: "Streetfighter V2 S",
        description: "Sokakların Hükümdarı",
        image: "https://picsum.photos/seed/streetfighter-v2-s/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "streetfighter-v2-s"
      },
      {
        id: 23,
        name: "Streetfighter V4",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/streetfighter-v4/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "streetfighter-v4"
      },
      {
        id: 24,
        name: "Streetfighter V4 S",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/streetfighter-v4-s/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "streetfighter-v4-s"
      },
      {
        id: 25,
        name: "Streetfighter V4 SP 2",
        description: "Sportif ve zarif ruh",
        image: "https://picsum.photos/seed/streetfighter-v4-sp2/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "streetfighter-v4-sp2"
      }
    ]
  },
  {
    title: "DIAVEL",
    models: [
      {
        id: 26,
        name: "Diavel V4",
        description: "Mekaniği Sanatla Buluşturan Şaheser",
        image: "https://picsum.photos/seed/diavel-v4/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "diavel-v4"
      },
      {
        id: 27,
        name: "X Diavel V4",
        description: "Sizi şaşırtmak için tasarlandı",
        image: "https://picsum.photos/seed/x-diavel-v4/800/600",
        modelYear: "2025",
        brand: "ducati",
        slug: "x-diavel-v4"
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
        image: "https://picsum.photos/seed/monster/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "monster"
      }
    ]
  },
  {
    title: "DESERTX",
    models: [
      {
        id: 29,
        name: "DesertX Discovery",
        description: "Tur Çevikliği ve Arazi Karakteri",
        image: "https://picsum.photos/seed/desertx-discovery/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "desertx-discovery"
      },
      {
        id: 30,
        name: "DesertX Rally",
        description: "Hassasiyet ve Eşsiz Kontrol",
        image: "https://picsum.photos/seed/desertx-rally/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "desertx-rally"
      },
      {
        id: 31,
        name: "DesertX",
        description: "Her Yola Hükmet, Her Anı Yaşa",
        image: "https://picsum.photos/seed/desertx/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "desertx"
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
        image: "https://picsum.photos/seed/hypermotard-698-mono/800/600",
        modelYear: null,
        brand: "ducati",
        slug: "hypermotard-698-mono"
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
      description="Sportif ve zarif ruh"
      categories={DUCATI_CATEGORIES}
    />
  );
};

export default DucatiPage;
