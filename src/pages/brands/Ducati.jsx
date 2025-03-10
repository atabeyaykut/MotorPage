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
    title: "STREETFIGHTER",
    models: [
      {
        id: 1,
        name: "Streetfighter V2",
        description: "Sport Naked",
        image: "https://picsum.photos/seed/streetfighter-v2/800/600",
        modelYear: null,
        link: "/markalar/ducati/streetfighter-v2"
      },
      {
        id: 2,
        name: "Streetfighter V2",
        description: "Sport Naked",
        image: "https://picsum.photos/seed/streetfighter-v2-2025/800/600",
        modelYear: "2025",
        link: "/markalar/ducati/streetfighter-v2-my-2025"
      },
      {
        id: 3,
        name: "Streetfighter V4",
        description: "Sport Naked",
        image: "https://picsum.photos/seed/streetfighter-v4/800/600",
        modelYear: null,
        link: "/markalar/ducati/streetfighter-v4"
      },
      {
        id: 4,
        name: "Streetfighter V4",
        description: "Sport Naked",
        image: "https://picsum.photos/seed/streetfighter-v4-2025/800/600",
        modelYear: "2025",
        link: "/markalar/ducati/streetfighter-v4-my-2025"
      },
      {
        id: 5,
        name: "Streetfighter V4 S",
        description: "Sport Naked",
        image: "https://picsum.photos/seed/streetfighter-v4-s/800/600",
        modelYear: null,
        link: "/markalar/ducati/streetfighter-v4-s"
      }
    ]
  },
  {
    title: "DIAVEL",
    models: [
      {
        id: 6,
        name: "Diavel V4",
        description: "Power Cruiser",
        image: "https://picsum.photos/seed/diavel-v4/800/600",
        modelYear: null,
        link: "/markalar/ducati/diavel-v4"
      },
      {
        id: 7,
        name: "X Diavel V4",
        description: "Power Cruiser",
        image: "https://picsum.photos/seed/x-diavel-v4/800/600",
        modelYear: "2025",
        link: "/markalar/ducati/x-diavel-v4"
      }
    ]
  },
  {
    title: "MONSTER",
    models: [
      {
        id: 8,
        name: "Monster",
        description: "Urban Naked",
        image: "https://picsum.photos/seed/monster/800/600",
        modelYear: null,
        link: "/markalar/ducati/monster"
      },
      {
        id: 9,
        name: "Monster SP",
        description: "Urban Naked",
        image: "https://picsum.photos/seed/monster-sp/800/600",
        modelYear: null,
        link: "/markalar/ducati/monster-sp"
      },
      {
        id: 10,
        name: "Monster Plus",
        description: "Urban Naked",
        image: "https://picsum.photos/seed/monster-plus/800/600",
        modelYear: "2025",
        link: "/markalar/ducati/monster-plus"
      }
    ]
  }
]

const DucatiPage = () => {

  useEffect(() => {
    document.title = "Ducati Motosikletler | Tüm Modeller ve Fiyatlar";
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
      description="Saf macera, mutlak avantaj"
      categories={DUCATI_CATEGORIES}
    />
  );
};

export default DucatiPage;
