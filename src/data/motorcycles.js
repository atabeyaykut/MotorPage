/**
 * @fileoverview Motorcycle data store
 * Contains detailed information about each motorcycle model
 */

export const motorcycles = {
  'royal-alloy': {
    'tg-300-s-lc-abs': {
      name: "ROYAL ALLOY TG 300 S LC ABS",
      brand: "royal-alloy",
      description: "Modern teknoloji ile klasik tasarımın buluştuğu TG 300 S LC ABS",
      modelYear: "2024",
      heroImage: "https://korlas.com.tr/wp-content/uploads/2023/09/TG-300-S-LC-ABS-1.webp",
      detailImage: "https://korlas.com.tr/wp-content/uploads/2023/09/TG-300-S-LC-ABS-hotspot.webp",
      hotspots: [
        {
          x: 30,
          y: 40,
          title: "LED Far",
          description: "LED farlar, gece sürüşlerinde mükemmel görünürlük sağlar."
        },
        {
          x: 50,
          y: 45,
          title: "Dijital Gösterge",
          description: "Dijital gösterge paneli."
        },
        {
          x: 70,
          y: 50,
          title: "USB Şarj",
          description: "USB şarj noktası."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı Tek Silindir, 4 Zamanlı",
        "Çap": "75.0 mm x 63.0 mm",
        "Motor Hacmi": "278cc",
        "Motor Gücü": "24.8 Hp",
        "Maks. Tork": "23.0Nm/5000rpm",
        "Kompresyon Oranı": "11.0:1",
        "Karışım Kontrolü": "Enjeksiyon",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Çift Hidrolik Amortisör",
        "Arka Çatal / Süspansiyon": "Çift Amortisör",
        "Tekerlek Arası Mesafe": "1390 mm",
        "Ön Lastik": "110/70R 12",
        "Arka Lastik": "120/70R 12",
        "Ön Fren": "220 mm Disk",
        "Arka Fren": "220 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Uzunluk": "1950 mm",
        "Genişlik": "690 mm",
        "Yükseklik": "1150 mm",
        "Sele Yüksekliği": "780 mm",
        "Yakıt Deposu": "9.5 L",
        "Ağırlık": "155 kg"
      },
      gallery: [
        "https://korlas.com.tr/wp-content/uploads/2023/09/TG-300-S-LC-ABS-6.webp",
        "https://korlas.com.tr/wp-content/uploads/2023/09/TG-300-S-LC-ABS-4.webp",
        "https://korlas.com.tr/wp-content/uploads/2023/09/TG-300-S-LC-ABS-5.webp",
        "https://korlas.com.tr/wp-content/uploads/2023/09/TG-300-S-LC-ABS-3.webp"
      ]
    }
  },
  'ducati': {
    'streetfighter-v2': {
      name: "Streetfighter V2",
      brand: "ducati",
      description: "Saf güç ve performansın kusursuz birleşimi",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/streetfighter-v2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/streetfighter-v2-detail/1920/1080",
      hotspots: [
        {
          x: 25,
          y: 35,
          title: "LED Far Sistemi",
          description: "V şeklinde LED gündüz farları ile karakteristik Streetfighter görünümü"
        },
        {
          x: 45,
          y: 40,
          title: "TFT Gösterge",
          description: "6.5 inç renkli TFT ekran, tüm sürüş bilgilerini net bir şekilde gösterir"
        },
        {
          x: 65,
          y: 45,
          title: "Aerodinamik Kanatçıklar",
          description: "Yüksek hızlarda maksimum stabilite için geliştirilmiş aerodinamik kanatçıklar"
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Superquadro: V2 90°, 4 zamanlı, Desmodromic",
        "Silindir Hacmi": "955 cc",
        "Güç": "153 HP @ 10.750 rpm",
        "Tork": "101.4 Nm @ 9.000 rpm",
        "Kompresyon Oranı": "12.5:1",
        "Yakıt Sistemi": "Elektronik Yakıt Enjeksiyonu",
        "Emisyon": "Euro 5",
        "Şanzıman": "6 Vites"
      },
      chassisSpecs: {
        "Şasi": "Alüminyum Monokok",
        "Ön Süspansiyon": "Showa BPF çatal, 43mm",
        "Arka Süspansiyon": "Sachs mono şok, tam ayarlanabilir",
        "Ön Fren": "Brembo M4.32 monoblok, 320mm çift disk",
        "Arka Fren": "245 mm disk",
        "ABS": "Bosch Cornering ABS EVO",
        "Ön Lastik": "120/70 ZR17",
        "Arka Lastik": "180/60 ZR17"
      },
      dimensionSpecs: {
        "Ağırlık": "178 kg (kuru)",
        "Sele Yüksekliği": "845 mm",
        "Yakıt Deposu": "17 L",
        "Dingil Mesafesi": "1465 mm",
        "Rake": "24°",
        "Trail": "94 mm"
      },
      gallery: [
        "https://picsum.photos/seed/streetfighter-v2-1/800/600",
        "https://picsum.photos/seed/streetfighter-v2-2/800/600",
        "https://picsum.photos/seed/streetfighter-v2-3/800/600",
        "https://picsum.photos/seed/streetfighter-v2-4/800/600"
      ]
    },
    'monster': {
      name: "Monster",
      brand: "ducati",
      description: "Şehir içi performansın yeni tanımı",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/monster-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/monster-detail/1920/1080",
      hotspots: [
        {
          x: 30,
          y: 40,
          title: "Kompakt Tasarım",
          description: "Yeni nesil Monster tasarımı, daha hafif ve çevik bir sürüş deneyimi sunar"
        },
        {
          x: 50,
          y: 45,
          title: "LED Aydınlatma",
          description: "Modern LED far ve stop lambaları"
        },
        {
          x: 70,
          y: 50,
          title: "Dijital Kokpit",
          description: "4.3 inç TFT ekran ile tüm bilgiler parmaklarınızın ucunda"
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Testastretta 11°, V2 90°",
        "Silindir Hacmi": "937 cc",
        "Güç": "111 HP @ 9.250 rpm",
        "Tork": "93 Nm @ 6.500 rpm",
        "Kompresyon Oranı": "13.3:1",
        "Yakıt Sistemi": "Elektronik Yakıt Enjeksiyonu",
        "Emisyon": "Euro 5",
        "Şanzıman": "6 Vites"
      },
      chassisSpecs: {
        "Şasi": "Alüminyum ön çerçeve",
        "Ön Süspansiyon": "43mm çatal",
        "Arka Süspansiyon": "Progresif bağlantılı mono şok",
        "Ön Fren": "Brembo M4.32 kaliper, 320mm çift disk",
        "Arka Fren": "245 mm disk",
        "ABS": "Cornering ABS",
        "Ön Lastik": "120/70 ZR17",
        "Arka Lastik": "180/55 ZR17"
      },
      dimensionSpecs: {
        "Ağırlık": "166 kg (kuru)",
        "Sele Yüksekliği": "820 mm",
        "Yakıt Deposu": "14 L",
        "Dingil Mesafesi": "1474 mm"
      },
      gallery: [
        "https://picsum.photos/seed/monster-1/800/600",
        "https://picsum.photos/seed/monster-2/800/600",
        "https://picsum.photos/seed/monster-3/800/600",
        "https://picsum.photos/seed/monster-4/800/600"
      ]
    },
    'diavel-v4': {
      name: "Diavel V4",
      brand: "ducati",
      description: "Güç ve zarafetin mükemmel uyumu",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/diavel-v4-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/diavel-v4-detail/1920/1080",
      hotspots: [
        {
          x: 25,
          y: 35,
          title: "V4 Granturismo Motor",
          description: "1158cc V4 motor, 168 HP güç üretir"
        },
        {
          x: 45,
          y: 40,
          title: "5 inç TFT Ekran",
          description: "Yüksek çözünürlüklü renkli TFT ekran"
        },
        {
          x: 65,
          y: 45,
          title: "LED Aydınlatma",
          description: "Full LED aydınlatma sistemi"
        }
      ],
      engineSpecs: {
        "Motor Tipi": "V4 Granturismo",
        "Silindir Hacmi": "1158 cc",
        "Güç": "168 HP @ 10.750 rpm",
        "Tork": "125 Nm @ 7.500 rpm",
        "Kompresyon Oranı": "14.0:1",
        "Yakıt Sistemi": "Elektronik Yakıt Enjeksiyonu",
        "Emisyon": "Euro 5",
        "Şanzıman": "6 Vites"
      },
      chassisSpecs: {
        "Şasi": "Alüminyum monokok",
        "Ön Süspansiyon": "50mm USD çatal",
        "Arka Süspansiyon": "Monoshock, tam ayarlanabilir",
        "Ön Fren": "Brembo Stylema, 330mm çift disk",
        "Arka Fren": "265mm disk",
        "ABS": "Cornering ABS EVO",
        "Ön Lastik": "120/70 ZR17",
        "Arka Lastik": "240/45 ZR17"
      },
      dimensionSpecs: {
        "Ağırlık": "211 kg (kuru)",
        "Sele Yüksekliği": "790 mm",
        "Yakıt Deposu": "20 L",
        "Dingil Mesafesi": "1595 mm"
      },
      gallery: [
        "https://picsum.photos/seed/diavel-v4-1/800/600",
        "https://picsum.photos/seed/diavel-v4-2/800/600",
        "https://picsum.photos/seed/diavel-v4-3/800/600",
        "https://picsum.photos/seed/diavel-v4-4/800/600"
      ]
    }
  },
  'triumph': {
    'tiger-1200-gt-pro': {
      name: "Tiger 1200 GT Pro",
      brand: "triumph",
      description: "Macera dolu yolculuklar için tasarlandı",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/tiger-1200-gt-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/tiger-1200-gt-detail/1920/1080",
      hotspots: [
        {
          x: 25,
          y: 35,
          title: "Adaptif Far Sistemi",
          description: "Viraj aydınlatmalı LED far sistemi"
        },
        {
          x: 45,
          y: 40,
          title: "TFT Ekran",
          description: "7 inç TFT ekran ile tam bağlantılı"
        },
        {
          x: 65,
          y: 45,
          title: "Elektronik Süspansiyon",
          description: "Yarı aktif Showa süspansiyon sistemi"
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıra 3 Silindir",
        "Silindir Hacmi": "1160 cc",
        "Güç": "150 HP @ 9.000 rpm",
        "Tork": "130 Nm @ 7.000 rpm",
        "Yakıt Sistemi": "Elektronik Yakıt Enjeksiyonu",
        "Emisyon": "Euro 5",
        "Şanzıman": "6 Vites",
        "Debriyaj": "Hidrolik, Islak"
      },
      chassisSpecs: {
        "Şasi": "Tübüler çelik ana şasi",
        "Ön Süspansiyon": "Showa 49mm USD çatal, elektronik ayarlı",
        "Arka Süspansiyon": "Showa mono şok, elektronik ayarlı",
        "Ön Fren": "Brembo M4.30 Stylema®, 320mm çift disk",
        "Arka Fren": "265 mm disk",
        "ABS": "Cornering ABS",
        "Ön Lastik": "120/70 R19",
        "Arka Lastik": "150/70 R18"
      },
      dimensionSpecs: {
        "Ağırlık": "245 kg (ıslak)",
        "Sele Yüksekliği": "850-870 mm",
        "Yakıt Deposu": "20 L",
        "Dingil Mesafesi": "1560 mm",
        "Ground Clearance": "200 mm"
      },
      gallery: [
        "https://picsum.photos/seed/tiger-1200-gt-1/800/600",
        "https://picsum.photos/seed/tiger-1200-gt-2/800/600",
        "https://picsum.photos/seed/tiger-1200-gt-3/800/600",
        "https://picsum.photos/seed/tiger-1200-gt-4/800/600"
      ]
    },
    'speed-twin-1200': {
      name: "Speed Twin 1200",
      brand: "triumph",
      description: "Modern klasik performans",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/speed-twin-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/speed-twin-detail/1920/1080",
      hotspots: [
        {
          x: 30,
          y: 40,
          title: "Çift Gösterge",
          description: "Klasik tasarımlı çift analog gösterge"
        },
        {
          x: 50,
          y: 45,
          title: "LED Aydınlatma",
          description: "Modern LED far ve stop grubu"
        },
        {
          x: 70,
          y: 50,
          title: "Menzilli Egzoz",
          description: "Özel tasarım çift çıkışlı egzoz sistemi"
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıra İkiz",
        "Silindir Hacmi": "1200 cc",
        "Güç": "100 HP @ 7.250 rpm",
        "Tork": "112 Nm @ 4.250 rpm",
        "Yakıt Sistemi": "Çok Noktalı Sıralı Enjeksiyon",
        "Emisyon": "Euro 5",
        "Şanzıman": "6 Vites",
        "Debriyaj": "Islak, Çok Diskli"
      },
      chassisSpecs: {
        "Şasi": "Çelik tüp çerçeve",
        "Ön Süspansiyon": "41mm USD çatal",
        "Arka Süspansiyon": "Çift amortisör, yay ön yükü ayarlı",
        "Ön Fren": "320mm çift disk, Brembo 4 piston sabit kaliper",
        "Arka Fren": "220mm disk",
        "ABS": "İkili Kanal ABS",
        "Ön Lastik": "120/70 ZR17",
        "Arka Lastik": "160/60 ZR17"
      },
      dimensionSpecs: {
        "Ağırlık": "216 kg (ıslak)",
        "Sele Yüksekliği": "809 mm",
        "Yakıt Deposu": "14.5 L",
        "Dingil Mesafesi": "1413 mm"
      },
      gallery: [
        "https://picsum.photos/seed/speed-twin-1/800/600",
        "https://picsum.photos/seed/speed-twin-2/800/600",
        "https://picsum.photos/seed/speed-twin-3/800/600",
        "https://picsum.photos/seed/speed-twin-4/800/600"
      ]
    },
    'bonneville-t120': {
      name: "Bonneville T120",
      brand: "triumph",
      description: "Modern teknoloji ile donatılmış klasik İngiliz motosikleti",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/bonneville-t120-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonneville-t120-detail/1920/1080",
      hotspots: [
        {
          x: 30,
          y: 40,
          title: "Çift Gösterge",
          description: "Klasik tasarımlı çift analog gösterge ve TFT ekran"
        },
        {
          x: 50,
          y: 45,
          title: "Peashooter Egzoz",
          description: "Klasik görünümlü çift çıkışlı krom egzoz"
        },
        {
          x: 70,
          y: 50,
          title: "Sele Tasarımı",
          description: "El dikişli deri görünümlü konforlu sele"
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıra İkiz, sıvı soğutmalı",
        "Silindir Hacmi": "1200 cc",
        "Güç": "80 HP @ 6.550 rpm",
        "Tork": "105 Nm @ 3.500 rpm",
        "Yakıt Sistemi": "Çok Noktalı Sıralı Enjeksiyon",
        "Emisyon": "Euro 5",
        "Şanzıman": "6 Vites",
        "Debriyaj": "Islak, Çok Diskli"
      },
      chassisSpecs: {
        "Şasi": "Çelik tüp çerçeve",
        "Ön Süspansiyon": "41mm kartuş çatal",
        "Arka Süspansiyon": "Çift amortisör, yay ön yükü ayarlı",
        "Ön Fren": "310mm çift disk",
        "Arka Fren": "255mm disk",
        "ABS": "İkili Kanal ABS",
        "Ön Lastik": "100/90-18",
        "Arka Lastik": "150/70 R17"
      },
      dimensionSpecs: {
        "Ağırlık": "236 kg (ıslak)",
        "Sele Yüksekliği": "785 mm",
        "Yakıt Deposu": "14.5 L",
        "Dingil Mesafesi": "1445 mm"
      },
      gallery: [
        "https://picsum.photos/seed/bonneville-t120-1/800/600",
        "https://picsum.photos/seed/bonneville-t120-2/800/600",
        "https://picsum.photos/seed/bonneville-t120-3/800/600",
        "https://picsum.photos/seed/bonneville-t120-4/800/600"
      ]
    },
    'tiger-900-rally-pro': {
      name: "Tiger 900 Rally Pro",
      brand: "triumph",
      description: "Her türlü arazi için tasarlanmış macera motosikleti",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/tiger-900-rally-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/tiger-900-rally-detail/1920/1080",
      hotspots: [
        {
          x: 25,
          y: 35,
          title: "7 inç TFT Ekran",
          description: "Bluetooth bağlantılı renkli TFT ekran"
        },
        {
          x: 45,
          y: 40,
          title: "LED Aydınlatma",
          description: "Gündüz farları ile full LED aydınlatma"
        },
        {
          x: 65,
          y: 45,
          title: "Showa Süspansiyon",
          description: "Tam ayarlanabilir Showa süspansiyon sistemi"
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıra 3 Silindir",
        "Silindir Hacmi": "888 cc",
        "Güç": "95 HP @ 8.750 rpm",
        "Tork": "87 Nm @ 7.250 rpm",
        "Yakıt Sistemi": "Çok Noktalı Sıralı Enjeksiyon",
        "Emisyon": "Euro 5",
        "Şanzıman": "6 Vites",
        "Debriyaj": "Islak, Çok Diskli"
      },
      chassisSpecs: {
        "Şasi": "Tübüler çelik ana şasi",
        "Ön Süspansiyon": "Showa 45mm USD çatal, tam ayarlanabilir",
        "Arka Süspansiyon": "Showa mono şok, tam ayarlanabilir",
        "Ön Fren": "320mm çift disk, Brembo Stylema kaliper",
        "Arka Fren": "255mm disk",
        "ABS": "Cornering ABS",
        "Ön Lastik": "90/90-21",
        "Arka Lastik": "150/70 R17"
      },
      dimensionSpecs: {
        "Ağırlık": "201 kg (kuru)",
        "Sele Yüksekliği": "850-870 mm",
        "Yakıt Deposu": "20 L",
        "Dingil Mesafesi": "1551 mm",
        "Ground Clearance": "245 mm"
      },
      gallery: [
        "https://picsum.photos/seed/tiger-900-rally-1/800/600",
        "https://picsum.photos/seed/tiger-900-rally-2/800/600",
        "https://picsum.photos/seed/tiger-900-rally-3/800/600",
        "https://picsum.photos/seed/tiger-900-rally-4/800/600"
      ]
    }
  }
};
