import React, { useEffect } from 'react';
import BrandPage from "@/components/brands/BrandPage";

const TRIUMPH_CATEGORIES = [
  {
    title: "BONNEVILLE & THRUXTON",
    models: [
      {
        id: 31,
        name: "Bonneville Bobber",
        description: "Klasik Stil, Modern Performans",
        image: "/brands/triumph/bonneville-bobber-Banner-1024x634-1.avif",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-bobber"
      },
      {
        id: 26,
        name: "Bonneville Scrambler 900",
        description: "Özgürlük ve eğlence için doğdu",
        image: "/brands/triumph/scrambler-900_my24_cosmic-yellow_rhs_-1.avif",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-scrambler-900"
      },
      {
        id: 22,
        name: "Bonneville Speedmaster",
        description: "Speedmaster'ın kaslı varlığı ve muhteşem stili",
        image: "/brands/triumph/Speed-Master-Banner-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-speedmaster"
      },
      {
        id: 27,
        name: "Bonneville Speed Twin 1200",
        description: "Gelişmiş teknoloji ve daha da üstün stil",
        image: "/brands/triumph/speed-twin-1200_my23_matt-baja-orange_rhs.avif",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-speed-twin-1200"
      },
      {
        id: 30,
        name: "Bonneville Speed Twin 900",
        description: "Heyecan verici performans",
        image: "/brands/triumph/Bonneville-Speed-Twin-900-Model-1.avif",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-speed-twin-900"
      },
      {
        id: 24,
        name: "Bonneville T100",
        description: "Zamana meydan okuyan stil",
        image: "/brands/triumph/Triumph-Bonneville-T-100-Banner-0019.avif",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-t100"
      },
      {
        id: 25,
        name: "Bonneville T120",
        description: "Efsanevi Bonneville'in orijinal silueti",
        image: "/brands/triumph/Bonneville_T120_my25_model-png.avif",
        modelYear: null,
        brand: "triumph",
        slug: "bonneville-t120"
      },
      {
        id: 28,
        name: "Speed Twin 1200",
        description: "Çağdaş stil ve klasik tasarım",
        image: "/brands/triumph/Speed-Twin-1200_MY25_model_banner.avif",
        modelYear: "2025",
        brand: "triumph",
        slug: "speed-twin-1200-2025"
      },
      {
        id: 29,
        name: "Speed Twin 1200 RS",
        description: "Çarpıcı ve tavizsiz",
        image: "/brands/triumph/Speed-Twin-1200-RS_MY25_model_banner.avif",
        modelYear: "2025",
        brand: "triumph",
        slug: "speed-twin-1200-rs-2025"
      },
      {
        id: 23,
        name: "Thruxton 1200 RS",
        description: "Klasik Stil, Modern Performans",
        image: "/brands/triumph/Thruxton-RS-Banner-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "thruxton-1200-rs"
      }
    ]
  },
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
    title: "ROCKET",
    models: [
      {
        id: 21,
        name: "Rocket 3 Storm GT",
        description: "Güçlü duruş ve kusursuz stil",
        image: "/brands/triumph/Rocket-3-GT-MY24-Pasifik-Mavisi-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "rocket-3-storm-gt"
      },
      {
        id: 20,
        name: "Rocket 3 Storm R",
        description: "Epik Performans",
        image: "/brands/triumph/Rocket-3-R-MY24-Karnaval-Kirmizisi-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "rocket-3-storm-r"
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
        image: "/brands/triumph/triumph-scrambler-400-x-banner-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "scrambler-400-x"
      },
      {
        id: 4,
        name: "Scrambler 1200 X",
        description: "Özgürlüğün ve Eğlencenin Bileti",
        image: "/brands/triumph/triumph-speed-400-banner-1024x634-1.avif",
        modelYear: null,
        brand: "triumph",
        slug: "scrambler-1200-x"
      },
      {
        id: 3,
        name: "Scrambler 1200 XE",
        description: "İmza niteliğindeki çift yüksek seviyeli egzoz",
        image: "/brands/triumph/triumph-1200-Xe-Model-gorseli-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "scrambler-1200-xe"
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
        image: "/brands/triumph/triumph-speed-400-banner-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "speed-400"
      },
      {
        id: 6,
        name: "Speed Triple 1200 RS",
        description: "Teknolojide mutlak bir devrim",
        image: "/brands/triumph/Speed-Triple-1200-RS-Banner-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "speed-triple-1200-rs"
      },
      {
        id: 6,
        name: "Speed Triple 1200 RS",
        description: "Teknolojide mutlak bir devrim",
        image: "/brands/triumph/Speed-Triple-1200-RS-Dis-Banner-my-25-1024x634.jpg.avif",
        modelYear: "2025",
        brand: "triumph",
        slug: "speed-triple-1200-rs-2025"
      },
      {
        id: 7,
        name: "Speed Triple 1200 RR",
        description: "Ayırt edici İngiliz zarafeti ve tarzı",
        image: "/brands/triumph/Speed-Triple-1200-RR-Banner-1024x634.webp",
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
        id: 9,
        name: "Street Triple R",
        description: "Güç ve Tarz Bir Arada",
        image: "/brands/triumph/Street-Triple-R-Page-Banner-02-1-1024x634.avif",
        modelYear: null,
        brand: "triumph",
        slug: "street-triple-r"
      },
      {
        id: 8,
        name: "Street Triple RS",
        description: "Gücün ve Performansın Yeni Adı",
        image: "/brands/triumph/Street-Triple-RS-Banner-1024x576-10-1-1024x634.avif",
        modelYear: null,
        brand: "triumph",
        slug: "street-triple-rs"
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
        image: "/brands/triumph/TRIUMPH-TF-250-X.webp",
        modelYear: null,
        brand: "triumph",
        slug: "tf-250-x"
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
        image: "/brands/triumph/Tiger-Sport-660-Banner-1024x634-1.avif",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-sport-660"
      },
      {
        id: 12,
        name: "Tiger Sport 800",
        description: "Sınıfında lider güç ve teknik özellikler – Yakında Sizlerle",
        image: "/brands/triumph/Tiger-Sport-800-Banner-1024x634-1.avif",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-sport-800"
      },
      {
        id: 15,
        name: "Tiger 900 GT",
        description: "Her Yolu Keşfedin, Her Anı Yaşayın",
        image: "/brands/triumph/Tiger-900-GT-Banner-1024x576-1-1024x634-1.webp",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-900-gt"
      },
      {
        id: 14,
        name: "Tiger 900 GT Pro",
        description: "Sınırsız Yol, Kesintisiz Performans",
        image: "/brands/triumph/Tiger-900-GT-PRO-Banner-1024x576-1-1024x634-1.webp",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-900-gt-pro"
      },
      {
        id: 13,
        name: "Tiger 900 Rally Pro",
        description: "Doğayla Buluşun, Yollarda Hüküm Sürün!",
        image: "/brands/triumph/Tiger-900-Rally-Pro-Banner-1024x576-0019.webp",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-900-rally-pro"
      },
      {
        id: 18,
        name: "Tiger 1200 GT Explorer",
        description: "Tamamen teknolojiyle donatılmış",
        image: "/brands/triumph/Tiger-1200-GT-Explorer-dis-banner.avif",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-1200-gt-explorer"
      },
      {
        id: 19,
        name: "Tiger 1200 GT Pro",
        description: "Muhteşem yol tutuşu",
        image: "/brands/triumph/Tiger-1200-Gt-Pro-dis-banner.avif",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-1200-gt-pro"
      },
      {
        id: 17,
        name: "Tiger 1200 Rally Explorer",
        description: "Macera için tasarlandı",
        image: "/brands/triumph/Tiger-1200-Rally-Explorer-Banner-1024x576-1-1024x634.webp",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-1200-rally-explorer"
      },
      {
        id: 16,
        name: "Tiger 1200 Rally Pro",
        description: "Saf macera, mutlak avantaj",
        image: "/brands/triumph/Tiger-1200-Rally-Pro-dis-banner.avif",
        modelYear: null,
        brand: "triumph",
        slug: "tiger-1200-rally-pro"
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
        image: "/brands/triumph/Trident_660_banner-1024x634-1.avif",
        modelYear: null,
        brand: "triumph",
        slug: "trident-660"
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
      categories={TRIUMPH_CATEGORIES}
      img="triumph.png"
    />
  );
};

export default TriumphPage;
