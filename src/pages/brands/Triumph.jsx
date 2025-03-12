import React, { useEffect } from 'react';
import BrandPage from "@/components/brands/BrandPage";

const TRIUMPH_CATEGORIES = [
  {
    title: "DAYTONA",
    models: [
      {
        id: 1,
        name: "Daytona 660",
        description: "Yeni nesil için yeniden doğan efsanevi isim",
        image: "/brands/triumph/Triumph-Daytona-660-banner01-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "daytona-660"
      }
    ]
  },
  {
    title: "SCRAMBLER",
    models: [
      {
        id: 2,
        name: "Scrambler 400 X",
        description: "Dengeli ve Çevik",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "scrambler-400-x"
      },
      {
        id: 3,
        name: "Scrambler 1200 XE",
        description: "İmza niteliğindeki çift yüksek seviyeli egzoz",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "scrambler-1200-xe"
      },
      {
        id: 4,
        name: "Scrambler 1200 X",
        description: "Özgürlüğün ve Eğlencenin Bileti",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "scrambler-1200-x"
      }
    ]
  },
  {
    title: "SPEED",
    models: [
      {
        id: 5,
        name: "Speed 400",
        description: "Geçmişi Yansıtan Stil, Geleceği Kucaklayan Performans",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "speed-400"
      },
      {
        id: 6,
        name: "Speed Triple 1200 RS",
        description: "Teknolojide mutlak bir devrim",
        image: "/brands/triumph/",
        modelYear: "2025",
        brand: "triumph",
        slug: "speed-triple-1200-rs"
      },
      {
        id: 7,
        name: "Speed Triple 1200 RR",
        description: "Ayırt edici İngiliz zarafeti ve tarzı",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "speed-triple-1200-rr"
      }
    ]
  },
  {
    title: "STREET TRIPLE",
    models: [
      {
        id: 8,
        name: "Street Triple RS",
        description: "Gücün ve Performansın Yeni Adı",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "street-triple-rs"
      },
      {
        id: 9,
        name: "Street Triple R",
        description: "Güç ve Tarz Bir Arada",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "street-triple-r"
      }
    ]
  },
  {
    title: "TRIDENT",
    models: [
      {
        id: 10,
        name: "Trident 660",
        description: "Sportif, şık, heyecan verici ve çevik",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "trident-660"
      }
    ]
  },
  {
    title: "TIGER",
    models: [
      {
        id: 11,
        name: "Tiger Sport 660",
        description: "Sınıfında lider güç ve teknik özellikler",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-sport-660"
      },
      {
        id: 12,
        name: "Tiger Sport 800",
        description: "Sınıfında lider güç ve teknik özellikler – Yakında Sizlerle",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-sport-800"
      },
      {
        id: 13,
        name: "Tiger 900 Rally Pro",
        description: "Doğayla Buluşun, Yollarda Hüküm Sürün!",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-900-rally-pro"
      },
      {
        id: 14,
        name: "Tiger 900 GT Pro",
        description: "Sınırsız Yol, Kesintisiz Performans",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-900-gt-pro"
      },
      {
        id: 15,
        name: "Tiger 900 GT",
        description: "Her Yolu Keşfedin, Her Anı Yaşayın",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-900-gt"
      },
      {
        id: 16,
        name: "Tiger 1200 Rally Pro",
        description: "Saf macera, mutlak avantaj",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-1200-rally-pro"
      },
      {
        id: 17,
        name: "Tiger 1200 Rally Explorer",
        description: "Macera için tasarlandı",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-1200-rally-explorer"
      },
      {
        id: 18,
        name: "Tiger 1200 GT Explorer",
        description: "Tamamen teknolojiyle donatılmış",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-1200-gt-explorer"
      },
      {
        id: 19,
        name: "Tiger 1200 GT Pro",
        description: "Muhteşem yol tutuşu",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-1200-gt-pro"
      }
    ]
  },
  {
    title: "ROCKET",
    models: [
      {
        id: 20,
        name: "Rocket 3 Storm R",
        description: "Epik Performans",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "rocket-3-storm-r"
      },
      {
        id: 21,
        name: "Rocket 3 Storm GT",
        description: "Güçlü duruş ve kusursuz stil",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "rocket-3-storm-gt"
      }
    ]
  },
  {
    title: "BONNEVILLE & THRUXTON",
    models: [
      {
        id: 22,
        name: "Bonneville Speedmaster",
        description: "Speedmaster'ın kaslı varlığı ve muhteşem stili",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-speedmaster"
      },
      {
        id: 23,
        name: "Thruxton 1200 RS",
        description: "Klasik Stil, Modern Performans",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "thruxton-1200-rs"
      },
      {
        id: 24,
        name: "Bonneville T100",
        description: "Zamana meydan okuyan stil",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-t100"
      },
      {
        id: 25,
        name: "Bonneville T120",
        description: "Efsanevi Bonneville'in orijinal silueti",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-t120"
      },
      {
        id: 26,
        name: "Bonneville Scrambler 900",
        description: "Özgürlük ve eğlence için doğdu",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-scrambler-900"
      },
      {
        id: 27,
        name: "Bonneville Speed Twin 1200",
        description: "Gelişmiş teknoloji ve daha da üstün stil",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-speed-twin-1200"
      },
      {
        id: 28,
        name: "Speed Twin 1200",
        description: "Çağdaş stil ve klasik tasarım",
        image: "/brands/triumph/",
        modelYear: "2025",
        brand: "triumph",
        slug: "speed-twin-1200"
      },
      {
        id: 29,
        name: "Speed Twin 1200 RS",
        description: "Çarpıcı ve tavizsiz",
        image: "/brands/triumph/",
        modelYear: "2025",
        brand: "triumph",
        slug: "speed-twin-1200-rs"
      },
      {
        id: 30,
        name: "Bonneville Speed Twin 900",
        description: "Heyecan verici performans",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-speed-twin-900"
      },
      {
        id: 31,
        name: "Bonneville Bobber",
        description: "Klasik Stil, Modern Performans",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-bobber"
      }
    ]
  },
  {
    title: "TF",
    models: [
      {
        id: 32,
        name: "TF 250 X",
        description: "Gücün zirvesine çık!",
        image: "/brands/triumph/",
        modelYear: null,
        brand: "triumph",
        slug: "tf-250-x"
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
      description="Saf macera, mutlak avantaj"
      categories={TRIUMPH_CATEGORIES}
    />
  );
};

export default TriumphPage;
