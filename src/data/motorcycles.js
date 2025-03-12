/**
 * @fileoverview Motorcycle data store
 * Contains detailed information about each motorcycle model
 */

export const motorcycles = {
  "ducati": {
    // Ducati Multistrada V2 – Temel versiyon (2024)
    'multistrada-v2': {
      name: "Multistrada V2",
      brand: "ducati",
      description:
        "Ducati Multistrada V2; macera ve performansı buluşturan, üstün teknolojiyle donatılmış temel versiyon.",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/multistrada-v2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v2-detail/1920/1080",
      hotspots: [
        {
          x: 30,
          y: 40,
          title: "LED Far Sistemi",
          description: "Modern LED far teknolojisi ile keskin görüş sağlar."
        },
        {
          x: 50,
          y: 45,
          title: "Dijital Gösterge Paneli",
          description: "7 inç TFT ekran, sürüş bilgilerini ve navigasyonu sunar."
        },
        {
          x: 70,
          y: 50,
          title: "Ayarlanabilir Süspansiyon",
          description: "Her yol koşulunda optimum konfor için geliştirilmiş."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı L motor",
        "Çap": "94 mm x 67.5 mm",
        "Motor Hacmi": "937 cc",
        "Motor Gücü": "83 kW (113 HP) @ 9000 rpm",
        "Maks. Tork": "96 nm @ 7750 rpm",
        "Kompresyon Oranı": "12.6 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "137 g/km",
        "Yakıt Tüketimi": "5.9 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "48 mm tamamen ayarlanabilir USD amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir alüminyum amortisör",
        "Tekerlek Arası Mesafe": "1594 mm",
        "Ön Jant Ebatı": '3.0" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "320 mm çift disk, radyal Brembo Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm çapında tek disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "830 mm",
        "Sele Yükseltme Kiti": "850 mm",
        "Sele Alçaltma Kiti": "810 mm",
        "Depo Kapasitesi": "20 L",
        "Kuru Ağırlık": "199 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v2-1/800/600",
        "https://picsum.photos/seed/multistrada-v2-2/800/600",
        "https://picsum.photos/seed/multistrada-v2-3/800/600",
        "https://picsum.photos/seed/multistrada-v2-4/800/600"
      ]
    },

    // Ducati Multistrada V2 (2025) – Güncellenmiş versiyon
    'multistrada-v2-2025': {
      name: "Multistrada V2 (2025)",
      brand: "ducati",
      description:
        "2025 güncellemesi ile optimize edilen Multistrada V2; motor, elektronik ve şasi sistemlerinde geliştirmeler içeriyor.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/multistrada-v2-2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v2-2025-detail/1920/1080",
      hotspots: [
        {
          x: 30,
          y: 40,
          title: "Yenilenmiş LED Far",
          description: "Geliştirilmiş far sistemi üstün görüş sağlar."
        },
        {
          x: 50,
          y: 45,
          title: "Güncellenmiş Dijital Panel",
          description: "Yeni nesil 7 inç TFT ekran ile artırılmış bilgi sunumu."
        },
        {
          x: 70,
          y: 50,
          title: "Optimize Süspansiyon",
          description: "Elektronik ayarlarla geliştirilmiş süspansiyon sistemi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 2 silindirli 4 zamanlı Ducati V2 bloğu (4 supap)",
        "Çap": "96 mm x 61.5 mm",
        "Motor Hacmi": "890 cc",
        "Motor Gücü": "115 HP @ 10750 dev/dak",
        "Maks. Tork": "92.1 Nm @ 8250 dev/dak",
        "Kompresyon Oranı": "13:1.1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "–",
        "Yakıt Tüketimi": "–",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "45 mm tamamen ayarlanabilir ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir arka süspansiyon",
        "Tekerlek Arası Mesafe": "1572,5 mm",
        "Ön Jant Ebatı": '3" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "320 mm çift disk, 4 pistonlu Brembo kaliper",
        "Arka Fren": "245 mm çapında disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "830–850 mm ayarlanabilir",
        "Depo Kapasitesi": "19 L",
        "Kuru Ağırlık": "179 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v2-2025-1/800/600",
        "https://picsum.photos/seed/multistrada-v2-2025-2/800/600",
        "https://picsum.photos/seed/multistrada-v2-2025-3/800/600",
        "https://picsum.photos/seed/multistrada-v2-2025-4/800/600"
      ]
    },

    // Ducati Multistrada V2 S – Standart donanım
    'multistrada-v2-s': {
      name: "Multistrada V2 S",
      brand: "ducati",
      description:
        "Multistrada V2 S; Ducati SkyHook Suspension Evo sistemiyle donatılmış, konfor ve performansı artıran versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/multistrada-v2-s-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v2-s-detail/1920/1080",
      hotspots: [
        {
          x: 32,
          y: 42,
          title: "SkyHook Amortisör",
          description: "Ön ve arka, ayarlanabilir SkyHook süspansiyon teknolojisi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı L motor",
        "Çap": "94 mm x 67.5 mm",
        "Motor Hacmi": "937 cc",
        "Motor Gücü": "113 HP @ 9000 rpm",
        "Maks. Tork": "96 nm @ 7750 rpm",
        "Kompresyon Oranı": "12.6 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "137 g/km",
        "Yakıt Tüketimi": "5.9 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "48 mm ayarlanabilir USD amortisör – Ducati SkyHook Suspension Evo",
        "Arka Çatal / Süspansiyon": "Ayarlanabilir alüminyum amortisör – Ducati SkyHook Suspension Evo",
        "Tekerlek Arası Mesafe": "1594 mm",
        "Ön Jant Ebatı": '3.0" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "320 mm çift disk, radyal Brembo Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm tek disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "830 mm (baz), 850 mm yükseltme, 810 mm alçaltma, 790 mm düşük süspansiyon kiti",
        "Depo Kapasitesi": "20 L",
        "Kuru Ağırlık": "199 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v2-s-1/800/600",
        "https://picsum.photos/seed/multistrada-v2-s-2/800/600",
        "https://picsum.photos/seed/multistrada-v2-s-3/800/600",
        "https://picsum.photos/seed/multistrada-v2-s-4/800/600"
      ]
    },

    // Ducati Multistrada V2 S MY (2025) – Güncellenmiş versiyon
    'multistrada-v2-s-my2025': {
      name: "Multistrada V2 S MY (2025)",
      brand: "ducati",
      description:
        "2025 model güncellemesiyle geliştirilen Multistrada V2 S; performans ve teknoloji artışı sağlıyor.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/multistrada-v2-s-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v2-s-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 35,
          y: 45,
          title: "Yeni Motor Bloğu",
          description: "Ducati V2 Granturismo bloğu ile performans artışı."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 2 silindirli 4 zamanlı Ducati V2 bloğu (4 supap)",
        "Çap": "96 mm x 61.5 mm",
        "Motor Hacmi": "890 cc",
        "Motor Gücü": "115 HP @ 10750 dev/dak",
        "Maks. Tork": "92.1 Nm @ 8250 dev/dak",
        "Kompresyon Oranı": "13:1.1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "45 mm tamamen ayarlanabilir ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir arka süspansiyon",
        "Tekerlek Arası Mesafe": "1572,5 mm",
        "Ön Jant Ebatı": '3" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "320 mm çift disk, 4 pistonlu Brembo kaliper",
        "Arka Fren": "245 mm disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "830–850 mm ayarlanabilir",
        "Depo Kapasitesi": "19 L",
        "Kuru Ağırlık": "179 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v2-s-my2025-1/800/600",
        "https://picsum.photos/seed/multistrada-v2-s-my2025-2/800/600",
        "https://picsum.photos/seed/multistrada-v2-s-my2025-3/800/600",
        "https://picsum.photos/seed/multistrada-v2-s-my2025-4/800/600"
      ]
    },

    // Ducati Multistrada V4 – Standart donanım
    'multistrada-v4': {
      name: "Multistrada V4",
      brand: "ducati",
      description:
        "Multistrada V4; 4 silindirli V motoru, yüksek performans ve dinamik sürüş özellikleriyle öne çıkıyor.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/multistrada-v4-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-detail/1920/1080",
      hotspots: [
        {
          x: 40,
          y: 50,
          title: "Yüksek Performanslı Motor",
          description: "125 kW güç ve 170 HP ile etkileyici performans."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "83 mm x 53.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "125 kW (170 HP) @ 10500 rpm",
        "Maks. Tork": "125 nm @ 10500 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "162 g/km",
        "Yakıt Tüketimi": "7.0 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm tamamen ayarlanabilir USD amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir alüminyum amortisör",
        "Tekerlek Arası Mesafe": "1567 mm",
        "Ön Jant Ebatı": '3.0" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "320 mm çift disk, radyal Brembo Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm tek disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840–860 mm (amortisör ayarı ile)",
        "Sele Yükseltme Kiti": "855–875 mm",
        "Sele Alçaltma Kiti": "810–830 mm",
        "Depo Kapasitesi": "22 L",
        "Kuru Ağırlık": "215 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-4/800/600"
      ]
    },

    // Ducati Multistrada V4 MY (2025) – Güncellenmiş versiyon
    'multistrada-v4-my2025': {
      name: "Multistrada V4 MY (2025)",
      brand: "ducati",
      description:
        "2025 model güncellemesiyle gelen V4 MY; Ducati V4 Granturismo bloğu ile güç ve verimlilikte artış sunar.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/multistrada-v4-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 42,
          y: 50,
          title: "Granturismo Bloğu",
          description: "Yüksek verimlilik ve güç sağlayan yeni motor teknolojisi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 4 silindirli 4 zamanlı Ducati V4 Granturismo bloğu (4 supap)",
        "Çap": "83 mm x 53.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "170 HP @ 10750 dev/dak",
        "Maks. Tork": "124 Nm @ 9000 dev/dak",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "162 g/km",
        "Yakıt Tüketimi": "7.0 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm tamamen ayarlanabilir ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir arka süspansiyon",
        "Tekerlek Arası Mesafe": "1566 mm",
        "Ön Jant Ebatı": '3.0" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "320 mm çift disk, Brembo monobloc 4 pistonlu kaliper",
        "Arka Fren": "280 mm disk, 2 pistonlu Brembo kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840–860 mm ayarlanabilir",
        "Depo Kapasitesi": "22 L",
        "Kuru Ağırlık": "229 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-my2025-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-my2025-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-my2025-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-my2025-4/800/600"
      ]
    },

    // Ducati Multistrada V4 S MY (2025) – Üst seviye versiyon
    'multistrada-v4-s-my2025': {
      name: "Multistrada V4 S MY (2025)",
      brand: "ducati",
      description:
        "V4 S MY; Ducati V4 Granturismo bloğu ve Euro 5+ emisyon standardı ile üst seviye performans sunar.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/multistrada-v4-s-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-s-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 45,
          y: 52,
          title: "Euro 5+ Teknolojisi",
          description: "Daha düşük emisyon ve yüksek verimlilik."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 4 silindirli 4 zamanlı Ducati V4 Granturismo bloğu (4 valf)",
        "Çap": "83 mm x 53.3 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "170 HP @ 10750 dev/dak",
        "Maks. Tork": "124 Nm @ 9000 dev/dak",
        "Kompresyon Oranı": "14.0 :1",
        "CO2 Emisyonu": "152 g/km",
        "Yakıt Tüketimi": "6.6 l/100km",
        "Emisyon": "Euro 5+"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm tamamen ayarlanabilir ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir arka süspansiyon",
        "Tekerlek Arası Mesafe": "1566 mm",
        "Ön Jant Ebatı": '3.0" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "330 mm çift disk, BBrembo monobloc 4 pistonlu kaliper",
        "Arka Fren": "280 mm disk, 2 pistonlu Brembo kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840–860 mm ayarlanabilir",
        "Depo Kapasitesi": "22 L",
        "Kuru Ağırlık": "232 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-s-my2025-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-my2025-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-my2025-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-my2025-4/800/600"
      ]
    },

    // Ducati Multistrada V4 S Grand Tour
    'multistrada-v4-s-grand-tour': {
      name: "Multistrada V4 S Grand Tour",
      brand: "ducati",
      description:
        "Grand Tour versiyonu; konfor ve uzun mesafe performansını ön planda tutan, Öhlins süspansör donanımlı versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/multistrada-v4-s-grand-tour-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-s-grand-tour-detail/1920/1080",
      hotspots: [
        {
          x: 38,
          y: 48,
          title: "Öhlins Amortisör",
          description: "Yüksek konfor ve yol tutuşu sağlayan Öhlins teknolojisi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı V motor",
        "Çap": "94 mm x 67.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "81 kW (110 HP) @ 9000 rpm",
        "Maks. Tork": "93 nm @ 6500 rpm",
        "Kompresyon Oranı": "12.6:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "134 g/km",
        "Yakıt Tüketimi": "5.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "48 mm tamamen ayarlanabilir USD Öhlins Amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Öhlins monoshock amortisör",
        "Tekerlek Arası Mesafe": "1478 mm",
        "Ön Jant Ebatı": '3.50" x 17"',
        "Arka Jant Ebatı": '5.50" x 17"',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso III",
        "Arka Lastik": "180/55R 17 Pirelli Diablo Rosso III",
        "Ön Fren": "330 mm çift disk, Brembo Monobloc M4-32 4 pistonlu kaliper",
        "Arka Fren": "245 mm tek disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "810 mm",
        "Depo Kapasitesi": "16 L",
        "Kuru Ağırlık": "184 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-s-grand-tour-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-grand-tour-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-grand-tour-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-grand-tour-4/800/600"
      ]
    },

    // Ducati Multistrada V4 Rally
    'multistrada-v4-rally': {
      name: "Multistrada V4 Rally",
      brand: "ducati",
      description:
        "Rally versiyonu; zorlu arazi koşullarında üstün performans için optimize edilmiş, geniş depo kapasitesi ile uzun mesafeler kat edebilen model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/multistrada-v4-rally-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-rally-detail/1920/1080",
      hotspots: [
        {
          x: 44,
          y: 55,
          title: "Rally Süspansiyon",
          description: "Ayarlanabilir USD ve alüminyum amortisör ile zorlu arazilerde üstün konfor."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "83 mm x 53.3 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "125 kW (170 HP) @ 10750 rpm",
        "Maks. Tork": "121 nm @ 8750 rpm",
        "Kompresyon Oranı": "14.0:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "152 g/km",
        "Yakıt Tüketimi": "6.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm ayarlanabilir USD amortisör – Ducati SkyHook Suspension Evo",
        "Arka Çatal / Süspansiyon": "Tamamen alüminyum amortisör – Ducati SkyHook Suspension Evo",
        "Tekerlek Arası Mesafe": "1572 mm",
        "Ön Jant Ebatı": '3.0" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "330 mm çift disk, Brembo Stylema 4 pistonlu kaliper",
        "Arka Fren": "265 mm tek disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "870–890 mm (ayarlanabilir)",
        "Sele Yükseltme Kiti": "885–905 mm",
        "Sele Alçaltma Kiti": "855–875 mm",
        "Sele Alçaltma Kiti (Düşük Süspansiyon)": "805–825 mm",
        "Depo Kapasitesi": "30 L",
        "Kuru Ağırlık": "227 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-rally-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-rally-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-rally-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-rally-4/800/600"
      ]
    },

    // Ducati Multistrada V4 S Travel & Radar
    'multistrada-v4-s-travel-radar': {
      name: "Multistrada V4 S Travel & Radar",
      brand: "ducati",
      description:
        "Travel & Radar versiyonu; seyahat odaklı donanım ve gelişmiş navigasyon sistemleriyle uzun yolculuklarda güven sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/multistrada-v4-s-travel-radar-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-s-travel-radar-detail/1920/1080",
      hotspots: [
        {
          x: 48,
          y: 50,
          title: "Gelişmiş Navigasyon",
          description: "Radar ve seyahat odaklı dijital gösterge paneli."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "83 mm x 53.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "125 kW (170 HP) @ 10500 rpm",
        "Maks. Tork": "125 nm @ 10500 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "162 g/km",
        "Yakıt Tüketimi": "7.0 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm ayarlanabilir USD amortisör – Ducati SkyHook Suspension Evo",
        "Arka Çatal / Süspansiyon": "Tamamen alüminyum amortisör – Ducati SkyHook Suspension Evo",
        "Tekerlek Arası Mesafe": "1567 mm",
        "Ön Jant Ebatı": '3.0" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "330 mm çift disk, Brembo Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm tek disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840–860 mm (amortisör ayarı ile)",
        "Sele Yükseltme Kiti": "855–875 mm",
        "Sele Alçaltma Kiti": "810–830 mm",
        "Sele Alçaltma Kiti (Düşük Süspansiyon)": "790–810 mm",
        "Depo Kapasitesi": "22 L",
        "Kuru Ağırlık": "218 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-s-travel-radar-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-travel-radar-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-travel-radar-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-travel-radar-4/800/600"
      ]
    },

    // Ducati Multistrada V4 S Full
    'multistrada-v4-s-full': {
      name: "Multistrada V4 S Full",
      brand: "ducati",
      description:
        "V4 S Full; Travel & Radar ile aynı teknolojiyi sunarken, ekstra özellik ve detaylarla donatılmış tam donanım versiyonu.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/multistrada-v4-s-full-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-s-full-detail/1920/1080",
      hotspots: [
        {
          x: 50,
          y: 50,
          title: "Full Donanım Paketi",
          description: "En gelişmiş teknoloji ve donanım özellikleri."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "83 mm x 53.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "125 kW (170 HP) @ 10500 rpm",
        "Maks. Tork": "125 nm @ 10500 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "162 g/km",
        "Yakıt Tüketimi": "7.0 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm ayarlanabilir USD amortisör – Ducati SkyHook Suspension Evo",
        "Arka Çatal / Süspansiyon": "Tamamen alüminyum amortisör – Ducati SkyHook Suspension Evo",
        "Tekerlek Arası Mesafe": "1567 mm",
        "Ön Jant Ebatı": '3.0" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 19 Pirelli Scorpion Trail II",
        "Arka Lastik": "170/60R 17 Pirelli Scorpion Trail II",
        "Ön Fren": "330 mm çift disk, Brembo Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm tek disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840–860 mm (amortisör ayarı ile)",
        "Sele Yükseltme Kiti": "855–875 mm",
        "Sele Alçaltma Kiti": "810–830 mm",
        "Sele Alçaltma Kiti (Düşük Süspansiyon)": "790–810 mm",
        "Depo Kapasitesi": "22 L",
        "Kuru Ağırlık": "218 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-s-full-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-full-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-full-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-s-full-4/800/600"
      ]
    },

    // Ducati Multistrada V4 Pikes Peak
    'multistrada-v4-pikes-peak': {
      name: "Multistrada V4 Pikes Peak",
      brand: "ducati",
      description:
        "Pikes Peak versiyonu; ekstrem performans ve yarış teknolojileri ile donatılmış, zorlu pistler için optimize edilmiş model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/multistrada-v4-pikes-peak-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-pikes-peak-detail/1920/1080",
      hotspots: [
        {
          x: 52,
          y: 48,
          title: "Öhlins Akıllı Amortisör",
          description: "Öhlins Smart EC 2.0 teknolojisi ile üstün yol tutuşu."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "83 mm x 53.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "125 kW (170 HP) @ 10500 rpm",
        "Maks. Tork": "125 nm @ 8750 rpm",
        "Kompresyon Oranı": "14.0:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "162 g/km",
        "Yakıt Tüketimi": "7.0 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm ayarlanabilir Öhlins amortisör (Öhlins Smart EC 2.0)",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Öhlins TTX36 amortisör",
        "Tekerlek Arası Mesafe": "1595 mm",
        "Ön Jant Ebatı": '3.5" x 17"',
        "Arka Jant Ebatı": '6" x 17"',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV",
        "Arka Lastik": "190/55R 17 Pirelli Diablo Rosso IV",
        "Ön Fren": "330 mm çift disk, Brembo Stylema 4 Monobloc pistonlu kaliper",
        "Arka Fren": "265 mm tek disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840–860 mm (ayarlanabilir)",
        "Depo Kapasitesi": "22 L",
        "Kuru Ağırlık": "214 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-pikes-peak-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-pikes-peak-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-pikes-peak-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-pikes-peak-4/800/600"
      ]
    },

    // Ducati Multistrada V4 Pikes Peak MY (2025)
    'multistrada-v4-pikes-peak-my2025': {
      name: "Multistrada V4 Pikes Peak MY (2025)",
      brand: "ducati",
      description:
        "2025 güncellemesiyle gelen Pikes Peak versiyonu; Granturismo motor bloğu ve gelişmiş fren teknolojisiyle dikkat çekiyor.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/multistrada-v4-pikes-peak-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-pikes-peak-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 55,
          y: 50,
          title: "Granturismo Motor Bloğu",
          description: "Yüksek güç ve verimlilik sağlayan V4 Granturismo teknolojisi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 4 silindirli 4 zamanlı Ducati V4 Granturismo bloğu (4 supap)",
        "Çap": "83 mm x 53.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "170 HP @ 10750 dev/dak",
        "Maks. Tork": "124 Nm @ 9000 dev/dak",
        "Kompresyon Oranı": "14.0:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "162 g/km",
        "Yakıt Tüketimi": "7.0 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm tamamen ayarlanabilir ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir arka süspansiyon",
        "Tekerlek Arası Mesafe": "1595 mm",
        "Ön Jant Ebatı": '3" x 19"',
        "Arka Jant Ebatı": '4.5" x 17"',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV",
        "Arka Lastik": "190/55R 17 Pirelli Diablo Rosso IV",
        "Ön Fren": "330 mm çift disk, Brembo Stylema monobloc 4 pistonlu kaliper",
        "Arka Fren": "280 mm disk, 2 pistonlu Brembo kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840–860 mm ayarlanabilir",
        "Depo Kapasitesi": "22 L",
        "Kuru Ağırlık": "227 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-pikes-peak-my2025-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-pikes-peak-my2025-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-pikes-peak-my2025-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-pikes-peak-my2025-4/800/600"
      ]
    },

    // Ducati Multistrada V4 RS
    'multistrada-v4-rs': {
      name: "Multistrada V4 RS",
      brand: "ducati",
      description:
        "V4 RS; özel şasi tasarımı ve yüksek devre kesimi ile yarış teknolojilerini sokaklara taşıyan performans makinesi.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/multistrada-v4-rs-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/multistrada-v4-rs-detail/1920/1080",
      hotspots: [
        {
          x: 60,
          y: 55,
          title: "Yarış Odaklı Şasi",
          description: "Kısmen kendinden destekli, alüminyum kompozit şasi yapısı."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı sıralı motor (dört supap)",
        "Çap": "80 mm x 49.7 mm",
        "Motor Hacmi": "999 cc",
        "Motor Gücü": "121 kW (163 HP) @ 11000 rpm",
        "Maks. Tork": "114 nm @ 9250 rpm",
        "Kompresyon Oranı": "12.5 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "144 g/km",
        "Yakıt Tüketimi": "6.2 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Alüminyum kompozit köprülü şasi (kısmen kendinden destekli)",
        "Arka Çatal / Süspansiyon": "Teleskopik ters çatal, 45 mm çap",
        "Tekerlek Arası Mesafe": "1522 mm",
        "Ön Jant Ebatı": '3.50" x 17"',
        "Arka Jant Ebatı": '6.00" x 17"',
        "Ön Lastik": "120/70 ZR 17",
        "Arka Lastik": "190/55R 17",
        "Ön Fren": "320 mm çift disk, radyal 4 pistonlu sabit kaliper",
        "Arka Fren": "265 mm tek disk, çift pistonlu yüzer kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840 mm",
        "Depo Kapasitesi": "20 L",
        "Kuru Ağırlık": "205 kg"
      },
      gallery: [
        "https://picsum.photos/seed/multistrada-v4-rs-1/800/600",
        "https://picsum.photos/seed/multistrada-v4-rs-2/800/600",
        "https://picsum.photos/seed/multistrada-v4-rs-3/800/600",
        "https://picsum.photos/seed/multistrada-v4-rs-4/800/600"
      ]
    },

    // Ducati Panigale V2 – Standart versiyon
    'panigale-v2': {
      name: "Panigale V2",
      brand: "ducati",
      description:
        "Ducati Panigale V2; yüksek performans ve keskin dinamik sürüş deneyimi sunan standart versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/panigale-v2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v2-detail/1920/1080",
      hotspots: [
        {
          x: 30,
          y: 40,
          title: "Agresif Tasarım",
          description: "Özgün ve dinamik hatlar."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı V motor",
        "Çap": "106 mm x 60.8 mm",
        "Motor Hacmi": "955 cc",
        "Motor Gücü": "114 kW (155 HP) @ 10750 rpm",
        "Maks. Tork": "104 nm @ 9000 rpm",
        "Kompresyon Oranı": "12.5 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "139 g/km",
        "Yakıt Tüketimi": "6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa BPF amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Sachs amortisör",
        "Tekerlek Arası Mesafe": "1436 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '5.50″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV Corsa",
        "Arka Lastik": "180/60R 17 Pirelli Diablo Rosso IV Corsa",
        "Ön Fren": "320 mm çift diskli fren, radyal Brembo Monobloc M4 32 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "176 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v2-1/800/600",
        "https://picsum.photos/seed/panigale-v2-2/800/600",
        "https://picsum.photos/seed/panigale-v2-3/800/600",
        "https://picsum.photos/seed/panigale-v2-4/800/600"
      ]
    },

    // Ducati Panigale V2 2025 – Güncellenmiş versiyon (aynı teknikler)
    'panigale-v2-2025': {
      name: "Panigale V2 2025",
      brand: "ducati",
      description:
        "2025 model güncellemesiyle sunulan Panigale V2; orijinal teknik veriler korunmuş, modern detaylarla desteklenmiş.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/panigale-v2-2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v2-2025-detail/1920/1080",
      hotspots: [
        {
          x: 32,
          y: 42,
          title: "Yenilenen Detaylar",
          description: "Güncellenmiş tasarım dokunuşları."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı V motor",
        "Çap": "106 mm x 60.8 mm",
        "Motor Hacmi": "955 cc",
        "Motor Gücü": "114 kW (155 HP) @ 10750 rpm",
        "Maks. Tork": "104 nm @ 9000 rpm",
        "Kompresyon Oranı": "12.5 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "139 g/km",
        "Yakıt Tüketimi": "6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa BPF amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Sachs amortisör",
        "Tekerlek Arası Mesafe": "1436 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '5.50″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV Corsa",
        "Arka Lastik": "180/60R 17 Pirelli Diablo Rosso IV Corsa",
        "Ön Fren": "320 mm çift diskli fren, radyal Brembo Monobloc M4 32 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "176 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v2-2025-1/800/600",
        "https://picsum.photos/seed/panigale-v2-2025-2/800/600",
        "https://picsum.photos/seed/panigale-v2-2025-3/800/600",
        "https://picsum.photos/seed/panigale-v2-2025-4/800/600"
      ]
    },

    // Ducati Panigale V2 MY 2025 – My versiyonu
    'panigale-v2-my2025': {
      name: "Panigale V2 MY 2025",
      brand: "ducati",
      description:
        "My versiyonu; farklı motor bloğu (Ducati V2 Granturismo) ile optimize edilmiş performans sunuyor.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/panigale-v2-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v2-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 34,
          y: 44,
          title: "Granturismo Bloğu",
          description: "Yeni motor teknolojisi ile performans artışı."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 2 silindirli 4 zamanlı Ducati V2 bloğu, silindir başına 4 supap",
        "Çap": "96 mm x 61.5 mm",
        "Motor Hacmi": "890 cc",
        "Motor Gücü": "120 HP @ 10750 dev/dak",
        "Maks. Tork": "93.3 Nm @ 8250 dev/dak",
        "Kompresyon Oranı": "13:1.1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Öhlins NIX30 ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Öhlins arka süspansiyon",
        "Tekerlek Arası Mesafe": "1465 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″',
        "Ön Fren": "320 mm çapında çift disk, 4 pistonlu Brembo M50 kaliper",
        "Arka Fren": "245 mm çapında disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "837 mm",
        "Depo Kapasitesi": "15 L",
        "Kuru Ağırlık": "176 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v2-my2025-1/800/600",
        "https://picsum.photos/seed/panigale-v2-my2025-2/800/600",
        "https://picsum.photos/seed/panigale-v2-my2025-3/800/600",
        "https://picsum.photos/seed/panigale-v2-my2025-4/800/600"
      ]
    },

    // Ducati Panigale V2 Bayliss – Özel donanım
    'panigale-v2-bayliss': {
      name: "Panigale V2 Bayliss",
      brand: "ducati",
      description:
        "Bayliss versiyonu; özel sponsor ve yarış detaylarıyla öne çıkan donanım.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/panigale-v2-bayliss-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v2-bayliss-detail/1920/1080",
      hotspots: [
        {
          x: 33,
          y: 43,
          title: "Özel Grafikler",
          description: "Bayliss imzası taşıyan detaylar."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı V motor",
        "Çap": "106 mm x 60.8 mm",
        "Motor Hacmi": "955 cc",
        "Motor Gücü": "114 kW (155 HP) @ 10750 rpm",
        "Maks. Tork": "104 nm @ 9000 rpm",
        "Kompresyon Oranı": "12.5 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "139 g/km",
        "Yakıt Tüketimi": "6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa BPF amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Sachs amortisör",
        "Tekerlek Arası Mesafe": "1436 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '5.50″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV Corsa",
        "Arka Lastik": "180/60R 17 Pirelli Diablo Rosso IV Corsa",
        "Ön Fren": "320 mm çift diskli fren, radyal Brembo Monobloc M4 32 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "840 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "176 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v2-bayliss-1/800/600",
        "https://picsum.photos/seed/panigale-v2-bayliss-2/800/600",
        "https://picsum.photos/seed/panigale-v2-bayliss-3/800/600",
        "https://picsum.photos/seed/panigale-v2-bayliss-4/800/600"
      ]
    },

    // Panigale V2 Superquadro Final Edition
    'panigale-v2-superquadro-final': {
      name: "Panigale V2 Superquadro Final Edition",
      brand: "ducati",
      description:
        "Superquadro Final Edition; Desmodromic L twin motor bloğu ile farklılaşan özel final versiyonu.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/panigale-v2-superquadro-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v2-superquadro-detail/1920/1080",
      hotspots: [
        {
          x: 35,
          y: 45,
          title: "Superquadro Motor",
          description: "Özel motor bloğu ve performans artışı."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 2 silindirli 4 zamanlı Desmodromic L twin motor bloğu, silindir başına 4 supap",
        "Çap": "100 mm x 60.8 mm",
        "Motor Hacmi": "955 cc",
        "Motor Gücü": "155 HP @ 10750 dev/dak",
        "Maks. Tork": "104 Nm @ 9000 dev/dak",
        "Kompresyon Oranı": "13:1.1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Öhlins NIX30 ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Öhlins TTX36 arka süspansiyon",
        "Tekerlek Arası Mesafe": "1438 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV Corsa",
        "Arka Lastik": "180/60R 17 Pirelli Diablo Rosso IV Corsa",
        "Ön Fren": "320 mm çapında çift disk, 4 pistonlu Brembo Monobloc M4.32 kaliper",
        "Arka Fren": "245 mm çapında disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "835 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "190 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v2-superquadro-1/800/600",
        "https://picsum.photos/seed/panigale-v2-superquadro-2/800/600",
        "https://picsum.photos/seed/panigale-v2-superquadro-3/800/600",
        "https://picsum.photos/seed/panigale-v2-superquadro-4/800/600"
      ]
    },

    // Ducati Panigale V4 – Standart versiyon
    'panigale-v4': {
      name: "Panigale V4",
      brand: "ducati",
      description:
        "Ducati Panigale V4; 4 silindirli V motor ve üstün yarış teknolojileriyle donatılmış performans makinesi.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/panigale-v4-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v4-detail/1920/1080",
      hotspots: [
        {
          x: 40,
          y: 45,
          title: "V4 Teknolojisi",
          description: "Yüksek devre kesim ve agresif performans."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "158.5 kW (215.5 HP) @ 13000 rpm",
        "Maks. Tork": "123.6 nm @ 9500 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "175 g/km",
        "Yakıt Tüketimi": "7.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa BPF amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Sachs amortisör",
        "Tekerlek Arası Mesafe": "1469 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6.00″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Supercorsa SP",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Supercorsa SP",
        "Ön Fren": "330 mm çift diskli fren, radyal Brembo Monobloc Stylema 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "850 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "175 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v4-1/800/600",
        "https://picsum.photos/seed/panigale-v4-2/800/600",
        "https://picsum.photos/seed/panigale-v4-3/800/600",
        "https://picsum.photos/seed/panigale-v4-4/800/600"
      ]
    },

    // Ducati Panigale V4 MY 2025 – Güncellenmiş versiyon
    'panigale-v4-my2025': {
      name: "Panigale V4 MY 2025",
      brand: "ducati",
      description:
        "2025 güncellemesiyle sunulan V4 MY; gelişmiş fren teknolojisi ve motor performansı öne çıkıyor.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/panigale-v4-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v4-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 42,
          y: 46,
          title: "Yüksek Teknoloji",
          description: "Gelişmiş fren ve süspansiyon sistemleri."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 4 silindirli 4 zamanlı Desmosedici Stradale bloğu, silindir başına 4 supap",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "216 HP @ 13500 dev/dak",
        "Maks. Tork": "120.9 Nm @ 11250 dev/dak",
        "Kompresyon Oranı": "14.0 :1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Kayaba arka süspansiyon",
        "Tekerlek Arası Mesafe": "1485 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6″ x 17″',
        "Ön Fren": "330 mm çapında çift disk, 4 pistonlu Brembo Monobloc Hypure® kaliper",
        "Arka Fren": "245 mm çapında disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "850 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "191 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v4-my2025-1/800/600",
        "https://picsum.photos/seed/panigale-v4-my2025-2/800/600",
        "https://picsum.photos/seed/panigale-v4-my2025-3/800/600",
        "https://picsum.photos/seed/panigale-v4-my2025-4/800/600"
      ]
    },

    // Ducati Panigale V4 S – Standart donanım
    'panigale-v4-s': {
      name: "Panigale V4 S",
      brand: "ducati",
      description:
        "Panigale V4 S; yarış teknolojileri ve üstün süspansiyon sistemiyle öne çıkan üst seviye model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/panigale-v4-s-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v4-s-detail/1920/1080",
      hotspots: [
        {
          x: 44,
          y: 48,
          title: "Yarış Süspansiyonu",
          description: "Öhlins NPX25/30 ve TTX36 kombinasyonu."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "158.5 kW (215.5 HP) @ 13000 rpm",
        "Maks. Tork": "123.6 nm @ 9500 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "175 g/km",
        "Yakıt Tüketimi": "7.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm Öhlins NPX25/30 ayarlanabilir amortisör Öhlins Smart EC 2.0",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir TTX36 amortisör Öhlins Smart EC 2.0",
        "Tekerlek Arası Mesafe": "1469 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6.00″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Supercorsa SP",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Supercorsa SP",
        "Ön Fren": "330 mm çift diskli fren, radyal Brembo Monobloc Stylema 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "850 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "174 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v4-s-1/800/600",
        "https://picsum.photos/seed/panigale-v4-s-2/800/600",
        "https://picsum.photos/seed/panigale-v4-s-3/800/600",
        "https://picsum.photos/seed/panigale-v4-s-4/800/600"
      ]
    },

    // Ducati Panigale V4 S MY 2025 – Güncellenmiş My versiyonu
    'panigale-v4-s-my2025': {
      name: "Panigale V4 S MY 2025",
      brand: "ducati",
      description:
        "MY versiyonu; geliştirilmiş motor ve süspansiyon sistemleriyle performansı zirveye taşıyor.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/panigale-v4-s-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v4-s-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 46,
          y: 50,
          title: "Gelişmiş Teknoloji",
          description: "My versiyonuna özel optimizasyonlar."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 4 silindirli 4 zamanlı Desmosedici Stradale bloğu, silindir başına 4 supap",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "216 HP @ 13500 dev/dak",
        "Maks. Tork": "120.0 Nm @ 11250 dev/dak",
        "Kompresyon Oranı": "14.0:1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa BPF ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Sachs arka süspansiyon",
        "Tekerlek Arası Mesafe": "1496 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6.0″ x 17″',
        "Ön Fren": "330 mm çapında çift disk, 4 pistonlu Brembo Monobloc Hypure kaliper",
        "Arka Fren": "245 mm çapında disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "845 mm",
        "Depo Kapasitesi": "16 L",
        "Kuru Ağırlık": "189 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v4-s-my2025-1/800/600",
        "https://picsum.photos/seed/panigale-v4-s-my2025-2/800/600",
        "https://picsum.photos/seed/panigale-v4-s-my2025-3/800/600",
        "https://picsum.photos/seed/panigale-v4-s-my2025-4/800/600"
      ]
    },

    // Ducati Panigale V4 SP 2
    'panigale-v4-sp2': {
      name: "Panigale V4 SP 2",
      brand: "ducati",
      description:
        "Panigale V4 SP 2; yarış teknolojisi ve sportif sürüş için optimize edilmiş versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/panigale-v4-sp2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v4-sp2-detail/1920/1080",
      hotspots: [
        {
          x: 48,
          y: 52,
          title: "Yarış Odaklı",
          description: "Spor ve dinamik sürüş deneyimi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "158.5 kW (215.5 HP) @ 13000 rpm",
        "Maks. Tork": "123.6 nm @ 9500 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "160 g/km",
        "Yakıt Tüketimi": "6.9 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm Öhlins NPX25/30 ayarlanabilir amortisör Öhlins Smart EC 2.0",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir TTX36 amortisör Öhlins Smart EC 2.0",
        "Tekerlek Arası Mesafe": "1469 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6.00″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Supercorsa SP",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Supercorsa SP",
        "Ön Fren": "330 mm çift diskli fren, radyal Brembo Monobloc Stylema 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "850 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "174 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v4-sp2-1/800/600",
        "https://picsum.photos/seed/panigale-v4-sp2-2/800/600",
        "https://picsum.photos/seed/panigale-v4-sp2-3/800/600",
        "https://picsum.photos/seed/panigale-v4-sp2-4/800/600"
      ]
    },

    // Ducati Panigale V4 R
    'panigale-v4-r': {
      name: "Panigale V4 R",
      brand: "ducati",
      description:
        "Panigale V4 R; ultra performans ve hafiflik odaklı, pist performansını zirveye taşıyan model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/panigale-v4-r-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v4-r-detail/1920/1080",
      hotspots: [
        {
          x: 50,
          y: 50,
          title: "Racing Teknolojisi",
          description: "Pist odaklı detaylar ve geliştirilmiş şasi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "81 mm x 48.4 mm",
        "Motor Hacmi": "998 cc",
        "Motor Gücü": "160.4 kW (218 HP) @ 15500 rpm",
        "Maks. Tork": "111.3 nm @ 12000 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "169.4 g/km",
        "Yakıt Tüketimi": "7.3 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Tamamen ayarlanabilir 43 mm Öhlins NPX25/30 Amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Öhlins TTX36 amortisör",
        "Tekerlek Arası Mesafe": "1471 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6.00″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Supercorsa",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Supercorsa",
        "Ön Fren": "330 mm çift diskli fren, radyal Brembo Monobloc Stylema 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "850 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "172 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v4-r-1/800/600",
        "https://picsum.photos/seed/panigale-v4-r-2/800/600",
        "https://picsum.photos/seed/panigale-v4-r-3/800/600",
        "https://picsum.photos/seed/panigale-v4-r-4/800/600"
      ]
    },

    // Panigale V4 Tricolore
    'panigale-v4-tricolore': {
      name: "Panigale V4 Tricolore",
      brand: "ducati",
      description:
        "Tricolore; üç renk seçeneği ve özel kaplamalarıyla sınırlı sayıda üretilen premium versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/panigale-v4-tricolore-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/panigale-v4-tricolore-detail/1920/1080",
      hotspots: [
        {
          x: 47,
          y: 49,
          title: "Özel Kaplama",
          description: "Tricolore tasarım detayları."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 4 silindirli 4 zamanlı Desmosedici Stradale bloğu, silindir başına 4 supap",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "216 HP @ 13500 dev/dak",
        "Maks. Tork": "120.9 Nm @ 11250 dev/dak",
        "Kompresyon Oranı": "14.0 :1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Öhlins NPX25/30 ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Öhlins TTX36 arka süspansiyon",
        "Tekerlek Arası Mesafe": "1485 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Supercorsa SP-V4",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Supercorsa SP-V4",
        "Ön Fren": "338.5 mm çapında çift disk, 4 pistonlu Brembo Monobloc Hypure® kaliper",
        "Arka Fren": "245 mm çapında disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "850 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "188 kg"
      },
      gallery: [
        "https://picsum.photos/seed/panigale-v4-tricolore-1/800/600",
        "https://picsum.photos/seed/panigale-v4-tricolore-2/800/600",
        "https://picsum.photos/seed/panigale-v4-tricolore-3/800/600",
        "https://picsum.photos/seed/panigale-v4-tricolore-4/800/600"
      ]
    },

    // Ducati Street Fighter V2 – Standart versiyon
    'street-fighter-v2': {
      name: "Street Fighter V2",
      brand: "ducati",
      description:
        "Ducati Street Fighter V2; agresif tasarım ve sokak performansını ön plana çıkaran model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/street-fighter-v2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/street-fighter-v2-detail/1920/1080",
      hotspots: [
        {
          x: 35,
          y: 40,
          title: "Agresif Tasarım",
          description: "Sokak ve yarış ruhunu yansıtan detaylar."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı V motor",
        "Çap": "100 mm x 60.8 mm",
        "Motor Hacmi": "955 cc",
        "Motor Gücü": "112.3 kW (153 HP) @ 10750 rpm",
        "Maks. Tork": "101.4 nm @ 9000 rpm",
        "Kompresyon Oranı": "12.5 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "139 g/km",
        "Yakıt Tüketimi": "6.1 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa BPF amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Sachs amortisör",
        "Tekerlek Arası Mesafe": "1465 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.50″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV",
        "Arka Lastik": "180/60R 17 Pirelli Diablo Rosso IV",
        "Ön Fren": "330 mm çift diskli fren, radyal Brembo Monobloc M4 32 4 pistonlu kaliper",
        "Arka Fren": "265 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "845 mm",
        "Depo Kapasitesi": "17 L",
        "Kuru Ağırlık": "178 kg"
      },
      gallery: [
        "https://picsum.photos/seed/street-fighter-v2-1/800/600",
        "https://picsum.photos/seed/street-fighter-v2-2/800/600",
        "https://picsum.photos/seed/street-fighter-v2-3/800/600",
        "https://picsum.photos/seed/street-fighter-v2-4/800/600"
      ]
    },

    // Ducati Street Fighter V2 MY 2025
    'street-fighter-v2-my2025': {
      name: "Street Fighter V2 MY 2025",
      brand: "ducati",
      description:
        "MY versiyonu; optimize edilmiş motor ve süspansiyon özellikleriyle gelen sokak performans modeli.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/street-fighter-v2-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/street-fighter-v2-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 36,
          y: 42,
          title: "MY Teknolojisi",
          description: "Geliştirilmiş donanım ve performans."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 2 silindirli 4 zamanlı Ducati V2 bloğu, silindir başına 4 supap",
        "Çap": "96 mm x 61.5 mm",
        "Motor Hacmi": "890 cc",
        "Motor Gücü": "120 HP @ 10750 dev/dak",
        "Maks. Tork": "93.3 Nm @ 8250 dev/dak",
        "Kompresyon Oranı": "13:1.1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Marzocchi ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Kayaba arka süspansiyon",
        "Tekerlek Arası Mesafe": "1493 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '5.50″ x 17″',
        "Ön Fren": "320 mm çapında çift disk, 4 pistonlu Brembo M50 kaliper",
        "Arka Fren": "245 mm çapında disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "838 mm",
        "Depo Kapasitesi": "15 L",
        "Kuru Ağırlık": "178 kg"
      },
      gallery: [
        "https://picsum.photos/seed/street-fighter-v2-my2025-1/800/600",
        "https://picsum.photos/seed/street-fighter-v2-my2025-2/800/600",
        "https://picsum.photos/seed/street-fighter-v2-my2025-3/800/600",
        "https://picsum.photos/seed/street-fighter-v2-my2025-4/800/600"
      ]
    },

    // Ducati Street Fighter V2 S MY 2025
    'street-fighter-v2-s-my2025': {
      name: "Street Fighter V2 S MY 2025",
      brand: "ducati",
      description:
        "Street Fighter V2 S MY; Öhlins donanımlı versiyon ile sokak performansında ekstra konfor.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/street-fighter-v2-s-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/street-fighter-v2-s-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 37,
          y: 43,
          title: "Öhlins Süspansiyon",
          description: "Gelişmiş süspansiyon sistemi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 2 silindirli 4 zamanlı Ducati V2 bloğu, silindir başına 4 supap",
        "Çap": "96 mm x 61.5 mm",
        "Motor Hacmi": "890 cc",
        "Motor Gücü": "120 HP @ 10750 dev/dak",
        "Maks. Tork": "93.3 Nm @ 8250 dev/dak",
        "Kompresyon Oranı": "13:1.1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Öhlins NIX30 ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Öhlins arka süspansiyon",
        "Tekerlek Arası Mesafe": "1493 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '5.50″ x 17″',
        "Ön Fren": "320 mm çapında çift disk, 4 pistonlu Brembo M50 kaliper",
        "Arka Fren": "245 mm çapında disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "838 mm",
        "Depo Kapasitesi": "15 L",
        "Kuru Ağırlık": "178 kg"
      },
      gallery: [
        "https://picsum.photos/seed/street-fighter-v2-s-my2025-1/800/600",
        "https://picsum.photos/seed/street-fighter-v2-s-my2025-2/800/600",
        "https://picsum.photos/seed/street-fighter-v2-s-my2025-3/800/600",
        "https://picsum.photos/seed/street-fighter-v2-s-my2025-4/800/600"
      ]
    },

    // Ducati Street Fighter V4 – Standart versiyon
    'street-fighter-v4': {
      name: "Street Fighter V4",
      brand: "ducati",
      description:
        "Street Fighter V4; agresif tasarım ve üstün performans sunan 4 silindirli versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/street-fighter-v4-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/street-fighter-v4-detail/1920/1080",
      hotspots: [
        {
          x: 38,
          y: 44,
          title: "Güç ve Estetik",
          description: "Sokak ve pist tutkunları için."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "153 kW (208 HP) @ 13000 rpm",
        "Maks. Tork": "123 nm @ 9000 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "178 g/km",
        "Yakıt Tüketimi": "7.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa BPF amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Sachs amortisör",
        "Tekerlek Arası Mesafe": "1488 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV Corsa",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Rosso IV Corsa",
        "Ön Fren": "320 mm çift diskli fren, radyal Brembo Monobloc M4 32 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "845 mm",
        "Depo Kapasitesi": "16.5 L",
        "Kuru Ağırlık": "180 kg"
      },
      gallery: [
        "https://picsum.photos/seed/street-fighter-v4-1/800/600",
        "https://picsum.photos/seed/street-fighter-v4-2/800/600",
        "https://picsum.photos/seed/street-fighter-v4-3/800/600",
        "https://picsum.photos/seed/street-fighter-v4-4/800/600"
      ]
    },

    // Ducati Street Fighter V4 MY 2025
    'street-fighter-v4-my2025': {
      name: "Street Fighter V4 MY 2025",
      brand: "ducati",
      description:
        "MY versiyonu; optimize edilmiş motor ve süspansiyon ile sokak performansını zirveye taşıyor.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/street-fighter-v4-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/street-fighter-v4-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 39,
          y: 45,
          title: "MY Optimizasyon",
          description: "Geliştirilmiş fren ve şasi teknolojisi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "153 kW (208 HP) @ 13000 rpm",
        "Maks. Tork": "123 nm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "178 g/km",
        "Yakıt Tüketimi": "7.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Showa BPF amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Sachs amortisör",
        "Tekerlek Arası Mesafe": "1488 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV Corsa",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Rosso IV Corsa",
        "Ön Fren": "320 mm çift diskli fren, radyal Brembo Monobloc M4 32 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "845 mm",
        "Depo Kapasitesi": "16.5 L",
        "Kuru Ağırlık": "180 kg"
      },
      gallery: [
        "https://picsum.photos/seed/street-fighter-v4-my2025-1/800/600",
        "https://picsum.photos/seed/street-fighter-v4-my2025-2/800/600",
        "https://picsum.photos/seed/street-fighter-v4-my2025-3/800/600",
        "https://picsum.photos/seed/street-fighter-v4-my2025-4/800/600"
      ]
    },

    // Ducati Street Fighter V4 S – Standart donanım
    'street-fighter-v4-s': {
      name: "Street Fighter V4 S",
      brand: "ducati",
      description:
        "Street Fighter V4 S; üstün sokak performansı ve estetik tasarımıyla öne çıkan versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/street-fighter-v4-s-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/street-fighter-v4-s-detail/1920/1080",
      hotspots: [
        {
          x: 40,
          y: 46,
          title: "Dinamik Tasarım",
          description: "Agresif görünüm ve yol tutuş."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "153 kW (208 HP) @ 13000 rpm",
        "Maks. Tork": "123 nm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "178 g/km",
        "Yakıt Tüketimi": "7.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm Öhlins NIX30 ayarlanabilir amortisör Öhlins Smart EC 2.0",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir TTX36 amortisör Öhlins Smart EC 2.0",
        "Tekerlek Arası Mesafe": "1488 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV Corsa",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Rosso IV Corsa",
        "Ön Fren": "330 mm çift diskli fren, radyal Brembo Monobloc Stylema R 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "845 mm",
        "Depo Kapasitesi": "16.5 L",
        "Kuru Ağırlık": "178 kg"
      },
      gallery: [
        "https://picsum.photos/seed/street-fighter-v4-s-1/800/600",
        "https://picsum.photos/seed/street-fighter-v4-s-2/800/600",
        "https://picsum.photos/seed/street-fighter-v4-s-3/800/600",
        "https://picsum.photos/seed/street-fighter-v4-s-4/800/600"
      ]
    },

    // Ducati Street Fighter V4 S MY 2025
    'street-fighter-v4-s-my2025': {
      name: "Street Fighter V4 S MY 2025",
      brand: "ducati",
      description:
        "MY versiyonu; optimize edilmiş donanım ve performans ile sokak yarışçılarının tercihi.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/street-fighter-v4-s-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/street-fighter-v4-s-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 41,
          y: 47,
          title: "MY Performans",
          description: "Gelişmiş süspansiyon ve fren sistemi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı 2 silindirli 4 zamanlı Ducati V2 bloğu, silindir başına 4 supap",
        "Çap": "96 mm x 61.5 mm",
        "Motor Hacmi": "890 cc",
        "Motor Gücü": "120 HP @ 10750 dev/dak",
        "Maks. Tork": "93.3 Nm @ 8250 dev/dak",
        "Kompresyon Oranı": "13:1.1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Öhlins NIX30 ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir Öhlins arka süspansiyon",
        "Tekerlek Arası Mesafe": "1496 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6.0″ x 17″',
        "Ön Fren": "330 mm çapında çift disk, 4 pistonlu Brembo Monobloc Hypure kaliper",
        "Arka Fren": "245 mm çapında disk, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "845 mm",
        "Depo Kapasitesi": "16 L",
        "Kuru Ağırlık": "191 kg"
      },
      gallery: [
        "https://picsum.photos/seed/street-fighter-v4-s-my2025-1/800/600",
        "https://picsum.photos/seed/street-fighter-v4-s-my2025-2/800/600",
        "https://picsum.photos/seed/street-fighter-v4-s-my2025-3/800/600",
        "https://picsum.photos/seed/street-fighter-v4-s-my2025-4/800/600"
      ]
    },

    // Ducati Street Fighter V4 SP 2
    'street-fighter-v4-sp2': {
      name: "Street Fighter V4 SP 2",
      brand: "ducati",
      description:
        "Street Fighter V4 SP 2; yarış teknolojisi ve ultra spor donanım özellikleri sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/street-fighter-v4-sp2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/street-fighter-v4-sp2-detail/1920/1080",
      hotspots: [
        {
          x: 42,
          y: 48,
          title: "Yarış Odaklı Sistem",
          description: "Spor performansı artıran detaylar."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "81 mm x 53.5 mm",
        "Motor Hacmi": "1103 cc",
        "Motor Gücü": "153 kW (208 HP) @ 13000 rpm",
        "Maks. Tork": "123 nm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "178 g/km",
        "Yakıt Tüketimi": "7.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm Öhlins NIX30 ayarlanabilir amortisör Öhlins Smart EC 2.0",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir TTX36 amortisör Öhlins Smart EC 2.0",
        "Tekerlek Arası Mesafe": "1488 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '6″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV Corsa",
        "Arka Lastik": "200/60R 17 Pirelli Diablo Rosso IV Corsa",
        "Ön Fren": "330 mm çift diskli fren, radyal Brembo Monobloc Stylema R 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "845 mm",
        "Depo Kapasitesi": "16.5 L",
        "Kuru Ağırlık": "177 kg"
      },
      gallery: [
        "https://picsum.photos/seed/street-fighter-v4-sp2-1/800/600",
        "https://picsum.photos/seed/street-fighter-v4-sp2-2/800/600",
        "https://picsum.photos/seed/street-fighter-v4-sp2-3/800/600",
        "https://picsum.photos/seed/street-fighter-v4-sp2-4/800/600"
      ]
    },

    // Ducati Diavel V4
    'diavel-v4': {
      name: "Diavel V4",
      brand: "ducati",
      description:
        "Diavel V4; güçlü V motoru ve agresif tasarımıyla dikkat çeken roadster model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/diavel-v4-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/diavel-v4-detail/1920/1080",
      hotspots: [
        {
          x: 40,
          y: 50,
          title: "Agresif Performans",
          description: "Yüksek tork ve güçlü motor performansı."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 4 silindirli 4 zamanlı V motor",
        "Çap": "83 mm x 53.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "124 kW (168 HP) @ 10750 rpm",
        "Maks. Tork": "126 nm @ 7500 rpm",
        "Kompresyon Oranı": "14.0 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "154 g/km",
        "Yakıt Tüketimi": "6.4 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm ayarlı amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir monoshock amortisör",
        "Tekerlek Arası Mesafe": "1593 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '8.0″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso III",
        "Arka Lastik": "240/45R 17 Pirelli Diablo Rosso III",
        "Ön Fren": "330 mm çift diskli fren, radyal Brembo Stylema Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm çapında tek diskli fren, 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "790 mm",
        "Depo Kapasitesi": "20 L",
        "Kuru Ağırlık": "211 kg"
      },
      gallery: [
        "https://picsum.photos/seed/diavel-v4-1/800/600",
        "https://picsum.photos/seed/diavel-v4-2/800/600",
        "https://picsum.photos/seed/diavel-v4-3/800/600",
        "https://picsum.photos/seed/diavel-v4-4/800/600"
      ]
    },

    // Ducati XDiavel V4 MY 2025
    'xdiavel-v4-my2025': {
      name: "XDiavel V4 MY 2025",
      brand: "ducati",
      description:
        "XDiavel V4 MY 2025; Granturismo motor bloğu ve güncel teknolojiyle geliştirilmiş bir cruiser.",
      modelYear: "2025",
      heroImage: "https://picsum.photos/seed/xdiavel-v4-my2025-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/xdiavel-v4-my2025-detail/1920/1080",
      hotspots: [
        {
          x: 42,
          y: 47,
          title: "Granturismo Motor Bloğu",
          description: "Yüksek güç ve verimlilik."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı, 4 zamanlı, 4 valfli 90° V4 Granturismo motor bloğu",
        "Çap": "83 mm x 53.5 mm",
        "Motor Hacmi": "1158 cc",
        "Motor Gücü": "168 HP @ 10750 dev/dak",
        "Maks. Tork": "126 Nm @ 7500 dev/dak",
        "Kompresyon Oranı": "14.0:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "154 g/km",
        "Yakıt Tüketimi": "6.6 l/100km",
        "Emisyon": "Euro 5+"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "50 mm tamamen ayarlanabilir ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir arka süspansiyon",
        "Tekerlek Arası Mesafe": "1620 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '8″ x 17″',
        "Ön Lastik": "120/70 R17 Pirelli Diablo Ross III",
        "Arka Lastik": "240/45 R17 Pirelli Diablo Ross III",
        "Ön Fren": "330 mm çapında çift disk, 4 pistonlu Brembo Stylema monobloc kaliper",
        "Arka Fren": "265 mm çapında disk, 2 pistonlu Brembo kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "770 mm",
        "Depo Kapasitesi": "20 L",
        "Kuru Ağırlık": "229 kg"
      },
      gallery: [
        "https://picsum.photos/seed/xdiavel-v4-my2025-1/800/600",
        "https://picsum.photos/seed/xdiavel-v4-my2025-2/800/600",
        "https://picsum.photos/seed/xdiavel-v4-my2025-3/800/600",
        "https://picsum.photos/seed/xdiavel-v4-my2025-4/800/600"
      ]
    },

    // Ducati Monster
    'monster': {
      name: "Monster",
      brand: "ducati",
      description:
        "Ducati Monster; ikonik tasarım ve sokak performansını bir araya getiren efsanevi model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/monster-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/monster-detail/1920/1080",
      hotspots: [
        {
          x: 30,
          y: 42,
          title: "İkonik Tasarım",
          description: "Sadelik ve agresif görünümün birleşimi."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı V motor",
        "Çap": "94 mm x 67.5 mm",
        "Motor Hacmi": "937 cc",
        "Motor Gücü": "82 kW (111 HP) @ 9250 rpm",
        "Maks. Tork": "93 nm @ 6500 rpm",
        "Kompresyon Oranı": "13.3 :1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "120 g/km",
        "Yakıt Tüketimi": "5.2 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm USD amortisör",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı amortisör",
        "Tekerlek Arası Mesafe": "1474 mm",
        "Ön Jant Ebatı": '3.50″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso III",
        "Arka Lastik": "180/55R 17 Pirelli Diablo Rosso III",
        "Ön Fren": "320 mm çift diskli fren, radyal Brembo M4 32 Monobloc pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "820 mm",
        "Sele Alçaltma Kiti": "800 mm",
        "Sele Alçaltma Kiti + Düşük Süspansiyon Kiti": "775 mm",
        "Depo Kapasitesi": "14 L",
        "Kuru Ağırlık": "166 kg"
      },
      gallery: [
        "https://picsum.photos/seed/monster-1/800/600",
        "https://picsum.photos/seed/monster-2/800/600",
        "https://picsum.photos/seed/monster-3/800/600",
        "https://picsum.photos/seed/monster-4/800/600"
      ]
    },

    // Ducati DesertX Discovery
    'desertx-discovery': {
      name: "DesertX Discovery",
      brand: "ducati",
      description:
        "DesertX Discovery; zorlu arazi koşullarında üstün performans ve dayanıklılık sunan model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/desertx-discovery-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/desertx-discovery-detail/1920/1080",
      hotspots: [
        {
          x: 38,
          y: 50,
          title: "Arazide Güç",
          description: "Dayanıklı yapı ve yüksek konfor."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı L motor",
        "Çap": "94 mm x 67.5 mm",
        "Motor Hacmi": "937 cc",
        "Motor Gücü": "81 kW (110 HP) @ 9250 rpm",
        "Maks. Tork": "92 nm @ 6500 rpm",
        "Kompresyon Oranı": "13.3 :1",
        "Karışım Kontrolü": "Bosch elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "133 g/km",
        "Yakıt Tüketimi": "5.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "KYB 46 mm ayarlanabilir ters çatal",
        "Arka Çatal / Süspansiyon": "KYB ayarlanabilir amortisör",
        "Tekerlek Arası Mesafe": "1608 mm",
        "Ön Jant Ebatı": '2.15″ x 21″',
        "Arka Jant Ebatı": '4.5″ x 18″',
        "Ön Lastik": "90/90R 21 Pirelli Scorpion Rally STR",
        "Arka Lastik": "150/70R 18 Pirelli Scorpion Rally STR",
        "Ön Fren": "320 mm çapında çift diskli fren, Brembo Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "875 mm",
        "Sele Yükseltme Kiti": "890 mm",
        "Sele Alçaltma Kiti": "865 mm",
        "Sele Alçaltma Kiti + Düşük Süspansiyon Kiti": "845 mm",
        "Depo Kapasitesi": "21 L",
        "Kuru Ağırlık": "202 kg"
      },
      gallery: [
        "https://picsum.photos/seed/desertx-discovery-1/800/600",
        "https://picsum.photos/seed/desertx-discovery-2/800/600",
        "https://picsum.photos/seed/desertx-discovery-3/800/600",
        "https://picsum.photos/seed/desertx-discovery-4/800/600"
      ]
    },

    // Ducati DesertX Rally
    'desertx-rally': {
      name: "DesertX Rally",
      brand: "ducati",
      description:
        "DesertX Rally; arazi ve yolculuk performansını birleştiren, zorlu koşullara uygun model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/desertx-rally-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/desertx-rally-detail/1920/1080",
      hotspots: [
        {
          x: 39,
          y: 52,
          title: "Rally Konforu",
          description: "Arazide yüksek konfor ve kontrol."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı, 2 silindirli 4 zamanlı L motor",
        "Çap": "94 mm x 67.5 mm",
        "Motor Hacmi": "937 cc",
        "Motor Gücü": "81 kW (110 HP) @ 9250 rpm",
        "Maks. Tork": "92 nm @ 6500 rpm",
        "Kompresyon Oranı": "13.3 :1",
        "Karışım Kontrolü": "Bosch elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "133 g/km",
        "Yakıt Tüketimi": "5.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış KYB 48 mm amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir KYB amortisör",
        "Tekerlek Arası Mesafe": "1625 mm",
        "Ön Jant Ebatı": '2.15″ x 21″',
        "Arka Jant Ebatı": '4″ x 18″',
        "Ön Lastik": "90/90R 21 Pirelli Scorpion Rally STR",
        "Arka Lastik": "150/70R 18 Pirelli Scorpion Rally STR",
        "Ön Fren": "320 mm çapında çift diskli fren, Brembo Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "910 mm",
        "Depo Kapasitesi": "21 L"
      },
      gallery: [
        "https://picsum.photos/seed/desertx-rally-1/800/600",
        "https://picsum.photos/seed/desertx-rally-2/800/600",
        "https://picsum.photos/seed/desertx-rally-3/800/600",
        "https://picsum.photos/seed/desertx-rally-4/800/600"
      ]
    },

    // Ducati DesertX – Standart versiyon
    'desertx': {
      name: "DesertX",
      brand: "ducati",
      description:
        "DesertX; off-road performansını ve dayanıklılığıyla öne çıkan, macera tutkunlarına hitap eden model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/desertx-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/desertx-detail/1920/1080",
      hotspots: [
        {
          x: 40,
          y: 50,
          title: "Dayanıklı Yapı",
          description: "Zorlu arazi koşullarına uygun tasarım."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı L motor",
        "Çap": "94 mm x 67.5 mm",
        "Motor Hacmi": "937 cc",
        "Motor Gücü": "81 kW (110 HP) @ 9250 rpm",
        "Maks. Tork": "92 nm @ 6500 rpm",
        "Kompresyon Oranı": "13.3 :1",
        "Karışım Kontrolü": "Bosch elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "133 g/km",
        "Yakıt Tüketimi": "5.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "KYB 46 mm ayarlanabilir ters çatal",
        "Arka Çatal / Süspansiyon": "KYB ayarlanabilir amortisör",
        "Tekerlek Arası Mesafe": "1608 mm",
        "Ön Jant Ebatı": '2.15″ x 21″',
        "Arka Jant Ebatı": '4.5″ x 18″',
        "Ön Lastik": "90/90R 21 Pirelli Scorpion Rally STR",
        "Arka Lastik": "150/70R 18 Pirelli Scorpion Rally STR",
        "Ön Fren": "320 mm çapında çift diskli fren, Brembo Monobloc 4 pistonlu kaliper",
        "Arka Fren": "265 mm çapında tek diskli fren, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "875 mm",
        "Sele Yükseltme Kiti": "890 mm",
        "Sele Alçaltma Kiti": "865 mm",
        "Sele Alçaltma Kiti + Düşük Süspansiyon Kiti": "845 mm",
        "Depo Kapasitesi": "21 L",
        "Kuru Ağırlık": "202 kg"
      },
      gallery: [
        "https://picsum.photos/seed/desertx-1/800/600",
        "https://picsum.photos/seed/desertx-2/800/600",
        "https://picsum.photos/seed/desertx-3/800/600",
        "https://picsum.photos/seed/desertx-4/800/600"
      ]
    },

    // Ducati Hypermotard 698 Mono
    'hypermotard-698-mono': {
      name: "Hypermotard 698 Mono",
      brand: "ducati",
      description:
        "Hypermotard 698 Mono; tek silindirli Desmodromic Superquadro Mono motor bloğu ile şehir içi dinamik sürüş sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/hypermotard-698-mono-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/hypermotard-698-mono-detail/1920/1080",
      hotspots: [
        {
          x: 30,
          y: 45,
          title: "Şehir Performansı",
          description: "Dinamik ve çevik sürüş."
        }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli, 4 valf, Desmodromic, Superquadro Mono Motor Bloğu",
        "Çap": "116 mm x 62.4 mm",
        "Motor Hacmi": "659 cc",
        "Motor Gücü": "77.5 HP @ 9750 rpm",
        "Maks. Tork": "63 nm @ 8000 rpm",
        "Kompresyon Oranı": "13:1.1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "112 g/km",
        "Yakıt Tüketimi": "4.8 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ayarlanabilir 45 mm Marzocchi ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ayarlanabilir Sachs arka süspansiyon",
        "Tekerlek Arası Mesafe": "1443 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Rosso IV",
        "Arka Lastik": "160/60R 17 Pirelli Diablo Rosso IV",
        "Ön Fren": "330 mm çapında tek diskli fren, Brembo M4.32 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "904 mm",
        "Depo Kapasitesi": "12 L",
        "Islak Ağırlık": "151 kg"
      },
      gallery: [
        "https://picsum.photos/seed/hypermotard-698-mono-1/800/600",
        "https://picsum.photos/seed/hypermotard-698-mono-2/800/600",
        "https://picsum.photos/seed/hypermotard-698-mono-3/800/600",
        "https://picsum.photos/seed/hypermotard-698-mono-4/800/600"
      ]
    }
  },

  "triumph": {
    'daytona-660': {
      name: "Daytona 660",
      brand: "triumph",
      description:
        "Daytona 660; su/yağ soğutmalı 3 silindirli sıralı motor, yüksek performans ve ekonomik yakıt tüketimi sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/daytona660-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/daytona660-detail/1920/1080",
      hotspots: [
        { x: 30, y: 40, title: "Ön Süspansiyon", description: "Ters konumlandırılmış Showa 41 mm ön süspansiyon." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli sıralı motor, 12 valf, DOHC",
        "Çap": "94.04 mm x 51.1 mm",
        "Motor Hacmi": "660 cc",
        "Motor Gücü": "69.8 kW (95 HP) @ 11250 rpm",
        "Maks. Tork": "69 Nm @ 8250 rpm",
        "Kompresyon Oranı": "12.05",
        "CO2 Emisyonu": "113 g/km",
        "Yakıt Tüketimi": "4.9 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış Showa 41 mm ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı Showa süspansiyon",
        "Tekerlek Arası Mesafe": "1425.6 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "180/55R 17",
        "Ön Fren": "310 mm çapında çift diskli fren, 4 pistonlu kaliper",
        "Arka Fren": "220 mm çapında tek diskli fren, tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "–",
        "Depo Kapasitesi": "–",
        "Kuru Ağırlık": "–"
      }
    },

    // 2. TRIUMPH SCRAMBLER 400 X
    'scrambler-400x': {
      name: "Scrambler 400 X",
      brand: "triumph",
      description:
        "Scrambler 400 X; su/yağ soğutmalı tek silindirli, 4 valf, DOHC motoru ve araziye uygun jant/lastik kombinasyonu ile öne çıkar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/scrambler400x-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/scrambler400x-detail/1920/1080",
      hotspots: [
        { x: 35, y: 42, title: "Arazi Jantları", description: "Ön: 2.5″ x 19″, Arka: 3.5″ x 17″." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli, 4valf, DOHC",
        "Çap": "89.0 mm x 64.0 mm",
        "Motor Hacmi": "398.15 cc",
        "Motor Gücü": "29.4 kW (39.4 HP) @ 8000 rpm",
        "Maks. Tork": "37.5 Nm @ 6500 rpm",
        "Kompresyon Oranı": "12:1",
        "CO2 Emisyonu": "83.8 g/km",
        "Yakıt Tüketimi": "3.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış 43 mm ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı arka süspansiyon",
        "Tekerlek Arası Mesafe": "1418 mm",
        "Ön Jant Ebatı": '2.5″ x 19″',
        "Arka Jant Ebatı": '3.5″ x 17″',
        "Ön Lastik": "100/90R 19",
        "Arka Lastik": "140/80R 19",
        "Ön Fren": "320 mm çapında tek diskli fren, 4 pistonlu kaliper",
        "Arka Fren": "230 mm çapında tek diskli fren, ByBreTM tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "835 mm",
        "Depo Kapasitesi": "13 L",
        "Islak Ağırlık": "179 kg"
      }
    },

    // 3. TRIUMPH SPEED 400
    'speed-400': {
      name: "Speed 400",
      brand: "triumph",
      description:
        "Speed 400; sıvı soğutmalı, 4 valfli, DOHC, tek silindirli motoruyla hafif ve çevik şehir makinesi.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/speed400-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/speed400-detail/1920/1080",
      hotspots: [
        { x: 33, y: 45, title: "Kompakt Şasi", description: "Dinamik şasi ve modern fren sistemi." }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı, 4 valfli, DOHC, tek silindirli",
        "Çap": "89.0 mm x 64.0 mm",
        "Motor Hacmi": "398.15 cc",
        "Motor Gücü": "29.4 kW (39.5 HP) @ 8000 rpm",
        "Maks. Tork": "37.5 Nm @ 6500 rpm",
        "Kompresyon Oranı": "12:1",
        "CO2 Emisyonu": "83.8 g/km",
        "Yakıt Tüketimi": "3.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm ters Büyük Pistonlu çatallar",
        "Arka Çatal / Süspansiyon": "Harici rezervuarlı ve ön yük ayarlı gazlı monoşok RSU",
        "Tekerlek Arası Mesafe": "1377 mm",
        "Ön Jant Ebatı": '3″ x 17″',
        "Arka Jant Ebatı": '4″ x 17″',
        "Ön Lastik": "110/70R 17",
        "Arka Lastik": "150/60R 17",
        "Ön Fren": "300 mm sabit disk, dört pistonlu radyal kaliper, ABS",
        "Arka Fren": "230 mm sabit disk, yüzer kaliper, ABS",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "790 mm",
        "Depo Kapasitesi": "13 L",
        "Islak Ağırlık": "170 kg"
      }
    },

    // 4. TRIUMPH TIGER SPORT 660
    'tiger-sport-660': {
      name: "Tiger Sport 660",
      brand: "triumph",
      description:
        "Tiger Sport 660; su/yağ soğutmalı 3 silindirli sıralı motoruyla dinamik performans sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/tigersport660-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/tigersport660-detail/1920/1080",
      hotspots: [
        { x: 32, y: 44, title: "Agresif Motor Bloğu", description: "Yüksek devre kesim detayları." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli sıralı motor, 12 valf, DOHC",
        "Çap": "74.04 mm x 51.1 mm",
        "Motor Hacmi": "660 cc",
        "Motor Gücü": "59.6 kW (80 HP) @ 10250 rpm",
        "Maks. Tork": "64 Nm @ 6250 rpm",
        "Kompresyon Oranı": "11.95 :1",
        "CO2 Emisyonu": "107 g/km",
        "Yakıt Tüketimi": "4.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış Showa 41 mm çapında amortisör",
        "Arka Çatal / Süspansiyon": "Showa gazlı amortisörler (hidrolik yük ve sönümleme ayarı)",
        "Tekerlek Arası Mesafe": "1418 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "180/55R 17",
        "Ön Fren": "310 mm çapında çift diskli fren, Nissin iki pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek diskli fren, Nissin tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "835 mm",
        "Depo Kapasitesi": "17.2 L",
        "Islak Ağırlık": "206 kg"
      }
    },

    // 5. TRIUMPH TIGER SPORT 800
    'tiger-sport-800': {
      name: "Tiger Sport 800",
      brand: "triumph",
      description:
        "Tiger Sport 800; üç silindirli motor ve sportif şasi özellikleriyle performansı artırır.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/tigersport800-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/tigersport800-detail/1920/1080",
      hotspots: [
        { x: 33, y: 46, title: "Yüksek Performans", description: "Dinamik motor ve şasi yapısı." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli, 12 valf, DOHC",
        "Çap": "78.0 mm x 55.7 mm",
        "Motor Hacmi": "798 cc",
        "Motor Gücü": "115 HP @ 10750 rpm",
        "Maks. Tork": "84 Nm @ 8500 rpm",
        "Kompresyon Oranı": "13.2:1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "41 mm ayarlanabilir Showa ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ayarlanabilir Showa arka süspansiyon",
        "Tekerlek Arası Mesafe": "1422 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "180/55R 17",
        "Ön Fren": "310 mm çapında çift diskli fren, Triumph 4 pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek diskli fren, Triumph kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "835 mm",
        "Depo Kapasitesi": "18.6 L",
        "Islak Ağırlık": "214 kg"
      }
    },

    // 6. TRIUMPH SPEED TRIPLE 1200 RS – Versiyon 1
    'speed-triple-1200-rs': {
      name: "Speed Triple 1200 RS",
      brand: "triumph",
      description:
        "Speed Triple 1200 RS; yüksek devirlerde etkileyici güç ve performans sunan yarış odaklı model (Versiyon 1).",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/speedtriple1200rs-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/speedtriple1200rs-detail/1920/1080",
      hotspots: [
        { x: 40, y: 50, title: "Yarış Şasi", description: "Optimum yol tutuşu için geliştirilmiş şasi." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli sıralı motor, 12 valf, DOHC",
        "Çap": "90.0 mm x 60.8 mm",
        "Motor Hacmi": "1160 cc",
        "Motor Gücü": "180 HP @ 10750 rpm",
        "Maks. Tork": "128 Nm @ 8750 rpm",
        "Kompresyon Oranı": "13.2 :1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm tamamen ayarlanabilir Öhlins SmartEC3 ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir 120mm Öhlins arka süspansiyon",
        "Tekerlek Arası Mesafe": "1445 mm",
        "Ön Jant Ebatı": '3″ x 17″',
        "Arka Jant Ebatı": '6″ x 17″',
        "Ön Lastik": "120/70R 17 Pirelli Diablo Supercorsa SP V3",
        "Arka Lastik": "190/55R 17 Pirelli Diablo Supercorsa SP V3"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "830 mm",
        "Depo Kapasitesi": "15.5 L",
        "Islak Ağırlık": "199 kg"
      }
    },

    // 7. TRIUMPH SPEED TRIPLE 1200 RS – Versiyon 2
    'speed-triple-1200-rs-2': {
      name: "Speed Triple 1200 RS",
      brand: "triumph",
      description:
        "Speed Triple 1200 RS (Güncellenmiş versiyon); daha fazla detay ve optimize edilmiş performans.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/speedtriple1200rs2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/speedtriple1200rs2-detail/1920/1080",
      hotspots: [
        { x: 41, y: 51, title: "Geliştirilmiş Frenler", description: "Optimum fren performansı için yenilenen fren kaliperleri." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli sıralı motor, 12 valf, DOHC",
        "Çap": "90.0 mm x 60.8 mm",
        "Motor Hacmi": "1160 cc",
        "Motor Gücü": "177.5 HP @ 10750 rpm",
        "Maks. Tork": "125 Nm @ 9000 rpm",
        "Kompresyon Oranı": "13.2 :1",
        "CO2 Emisyonu": "130 g/km",
        "Yakıt Tüketimi": "6.3 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters Öhlins 43 mm NIX30 ayarlanabilir amortisör",
        "Arka Çatal / Süspansiyon": "Öhlins TTX36 çift tüplü mono amortisör",
        "Tekerlek Arası Mesafe": "1445 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '6.0″ x 17″'
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "830 mm",
        "Depo Kapasitesi": "15.5 L",
        "Islak Ağırlık": "198 kg"
      }
    },

    // 8. TRIUMPH SPEED TRIPLE 1200 RR
    'speed-triple-1200-rr': {
      name: "Speed Triple 1200 RR",
      brand: "triumph",
      description:
        "Speed Triple 1200 RR; yarış teknolojileri ve ultra hafif şasiyle öne çıkan yarış versiyonu.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/speedtriple1200rr-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/speedtriple1200rr-detail/1920/1080",
      hotspots: [
        { x: 42, y: 50, title: "Ultra Hafif Şasi", description: "Yarış performansını artıran optimize edilmiş şasi." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli sıralı motor, 12 valf, DOHC",
        "Çap": "90.0 mm x 60.8 mm",
        "Motor Hacmi": "1160 cc",
        "Motor Gücü": "180 HP @ 10750 rpm",
        "Maks. Tork": "128 Nm @ 8750 rpm",
        "Kompresyon Oranı": "13.2 :1"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "–",
        "Arka Çatal / Süspansiyon": "–",
        "Tekerlek Arası Mesafe": "–"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "–",
        "Depo Kapasitesi": "–",
        "Islak Ağırlık": "–"
      }
    },

    // 9. TRIUMPH STREET TRIPLE RS
    'street-triple-rs': {
      name: "Street Triple RS",
      brand: "triumph",
      description:
        "Street Triple RS; sıvı soğutmalı 3 silindirli, 12 valfli, DOHC motor bloğu ile yüksek performans sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/streettripleRS-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/streettripleRS-detail/1920/1080",
      hotspots: [
        { x: 38, y: 44, title: "Agresif Tasarım", description: "Sokak ve pist performansını harmanlayan detaylar." }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı, 12 valfli, DOHC, sıralı 3 silindirli",
        "Çap": "90.0 mm x 60.8 mm",
        "Motor Hacmi": "765 cc",
        "Motor Gücü": "95.6 kW (128 HP) @ 12000 rpm",
        "Maks. Tork": "80 Nm @ 9500 rpm",
        "Kompresyon Oranı": "13.25:1",
        "Yakıt Tüketimi": "4.7 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Showa 41 mm baş aşağı Büyük Pistonlu çatallar",
        "Arka Çatal / Süspansiyon": "Öhlins STX40 bindirme rezervuar mono amortisörü",
        "Tekerlek Arası Mesafe": "1405 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″',
        "Ön Lastik": "120/70ZR 17",
        "Arka Lastik": "180/55ZR 17",
        "Ön Fren": "310 mm disk, Brembo M4.32 4 pistonlu monoblok kaliper",
        "Arka Fren": "220 mm disk, Brembo 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "836 mm",
        "Depo Kapasitesi": "15 L",
        "Islak Ağırlık": "188 kg"
      }
    },

    // 10. TRIUMPH STREET TRIPLE R
    'street-triple-r': {
      name: "Street Triple R",
      brand: "triumph",
      description:
        "Street Triple R; daha hafif ve dinamik sürüş için optimize edilmiş versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/streettripleR-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/streettripleR-detail/1920/1080",
      hotspots: [
        { x: 38, y: 45, title: "Dinamik Şasi", description: "Yüksek performans için optimize edilmiş şasi yapısı." }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı soğutmalı, 12 valfli, DOHC, sıralı 3 silindirli",
        "Çap": "77 mm x 99 mm",
        "Motor Hacmi": "765 cc",
        "Motor Gücü": "86.5 kW (116 HP) @ 12000 rpm",
        "Maks. Tork": "80 Nm @ 9400 rpm",
        "Kompresyon Oranı": "12.5:1",
        "Yakıt Tüketimi": "5.4 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Showa 41 mm ayrı fonksiyonlu büyük piston çatallar",
        "Arka Çatal / Süspansiyon": "Showa sırtlama rezervuar mono amortisörü",
        "Tekerlek Arası Mesafe": "1405 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″'
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "825 mm",
        "Depo Kapasitesi": "17.4 L"
      }
    },

    // 11. TRIUMPH TRIDENT 660
    'trident-660': {
      name: "Trident 660",
      brand: "triumph",
      description:
        "Trident 660; su/yağ soğutmalı 3 silindirli sıralı motor ve kompakt şasi ile sportif sürüş keyfi sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/trident660-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/trident660-detail/1920/1080",
      hotspots: [
        { x: 34, y: 42, title: "Kompakt Tasarım", description: "Şehir içi dinamik sürüş için ideal ölçüler." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli sıralı motor, 12 valf, DOHC",
        "Çap": "74.00 mm x 51.1 mm",
        "Motor Hacmi": "660 cc",
        "Motor Gücü": "60 kW (80 HP) @ 10250 rpm",
        "Maks. Tork": "64 Nm @ 6250 rpm",
        "Kompresyon Oranı": "11.95 :1",
        "CO2 Emisyonu": "107 g/km",
        "Yakıt Tüketimi": "4.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters Showa 41 mm süspansiyon",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı Showa süspansiyon",
        "Tekerlek Arası Mesafe": "1401 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.5″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "180/55R 17",
        "Ön Fren": "310 mm çapında çift disk, Nissin iki pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek disk, Nissin tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "805 mm",
        "Depo Kapasitesi": "14 L",
        "Islak Ağırlık": "189 kg"
      }
    },

    // 12. TRIUMPH TIGER 900 RALLY PRO
    'tiger-900-rally-pro': {
      name: "Tiger 900 Rally Pro",
      brand: "triumph",
      description:
        "Tiger 900 Rally Pro; su/yağ soğutmalı 3 silindirli sıralı motor, yüksek tork ve zorlu araziler için optimize edilmiş şasi.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/tiger900rallypro-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/tiger900rallypro-detail/1920/1080",
      hotspots: [
        { x: 36, y: 48, title: "Rally Konforu", description: "Özel süspansiyon ayarları." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli, 12 valf, DOHC",
        "Çap": "78.0 mm x 55.7 mm", // (Ortak ölçü kullanılabilir, tam veriler girilebilir)
        "Motor Hacmi": "798 cc",       // (Veriler orijinalden uyarlanabilir)
        "Motor Gücü": "–",             // Veriler eksik; ihtiyaca göre tamamlayın.
        "Maks. Tork": "–",
        "Kompresyon Oranı": "–"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "–",
        "Arka Çatal / Süspansiyon": "–",
        "Tekerlek Arası Mesafe": "–"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "–",
        "Depo Kapasitesi": "–",
        "Islak Ağırlık": "–"
      }
    },

    // 13. TRIUMPH TIGER 900 GT PRO
    'tiger-900-gt-pro': {
      name: "Tiger 900 GT Pro",
      brand: "triumph",
      description:
        "Tiger 900 GT Pro; yarış teknolojileri ve konforu bir araya getiren üst seviye model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/tiger900gtpro-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/tiger900gtpro-detail/1920/1080",
      hotspots: [
        { x: 37, y: 48, title: "GT Konforu", description: "Gelişmiş süspansiyon ve fren teknolojisi." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 3 silindirli, 12 valf, DOHC",
        "Çap": "78.0 mm x 55.7 mm",
        "Motor Hacmi": "798 cc",
        "Motor Gücü": "–",  // Eksik; tamamlanabilir.
        "Maks. Tork": "–",
        "Kompresyon Oranı": "–"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "–",
        "Arka Çatal / Süspansiyon": "–",
        "Tekerlek Arası Mesafe": "–"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "–",
        "Depo Kapasitesi": "–",
        "Islak Ağırlık": "–"
      }
    },

    // 14. TRIUMPH TIGER 900 GT
    'tiger-900-gt': {
      name: "Tiger 900 GT",
      brand: "triumph",
      description:
        "Tiger 900 GT; GT Pro ile benzer donanım, ancak farklı fiyat/konfigürasyon seçeneği.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/tiger900gt-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/tiger900gt-detail/1920/1080",
      hotspots: [
        { x: 37, y: 48, title: "GT Performans", description: "Konfor ve performans dengesi." }
      ],
      engineSpecs: { /* Benzer motor verileri */ },
      chassisSpecs: { /* Benzer şasi verileri */ },
      dimensionSpecs: { /* Boyut verileri */ }
    },

    // 15. TRIUMPH BONNEVILLE SPEED TWIN 1200 RS
    'bonnevile-speed-twin-1200-rs': {
      name: "Bonnevile Speed Twin 1200 RS",
      brand: "triumph",
      description:
        "Speed Twin 1200 RS; çift silindirli, 8 valf SOHC motor ve premium fren/süspansiyon sistemleri.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevile1200rs-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevile1200rs-detail/1920/1080",
      hotspots: [
        { x: 38, y: 46, title: "Çift Motor Bloğu", description: "Efsanevi Bonneville karakteri." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı çift silindirli, 8 valf, SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "77 HP @ 6100 rpm",
        "Maks. Tork": "106 Nm @ 4000 rpm",
        "Kompresyon Oranı": "10.0:1",
        "CO2 Emisyonu": "60.9 g/km",
        "Yakıt Tüketimi": "4.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "47 mm Showa kartuşlu çatallar",
        "Arka Çatal / Süspansiyon": "Bağlantı ve ön yük ayarlı mono-şok RSU",
        "Tekerlek Arası Mesafe": "1500 mm",
        "Ön Jant Ebatı": '2.5″ x 16″',
        "Arka Jant Ebatı": '3.5″ x 16″',
        "Ön Lastik": "MT90B16",
        "Arka Lastik": "150/80 R16",
        "Ön Fren": "310 mm tek disk Brembo 2 pistonlu kaliper",
        "Arka Fren": "255 mm tek disk, Nissin tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "705 mm",
        "Depo Kapasitesi": "12 L",
        "Islak Ağırlık": "263 kg"
      }
    },

    // 16. TRIUMPH THRUXTON 1200 RS
    'thruxton-1200-rs': {
      name: "ThruxTon 1200 RS",
      brand: "triumph",
      description:
        "ThruxTon 1200 RS; su/yağ soğutmalı 2 silindirli 8 Valf SOHC motor bloğu, yüksek performans ve düşük yakıt tüketimi sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/thruxton1200rs-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/thruxton1200rs-detail/1920/1080",
      hotspots: [
        { x: 40, y: 47, title: "Performans Odaklı", description: "Özel ayarlı süspansiyon ve fren sistemi." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "77 kW (104 HP) @ 7500 rpm",
        "Maks. Tork": "112 Nm @ 4250 rpm",
        "Kompresyon Oranı": "12.1:1",
        "Yakıt Tüketimi": "4.4 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Showa 43 mm USD büyük pistonlu çatallar",
        "Arka Çatal / Süspansiyon": "Piggyback rezervuarlı, tamamen ayarlanabilir Öhlins ikiz amortisörler",
        "Tekerlek Arası Mesafe": "1415 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5″ x 17″',
        "Ön Fren": "310 mm çapında çift diskli, Brembo M50 4 pistonlu kaliper",
        "Arka Fren": "250 mm çapında tek diskli, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "810 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "197 kg"
      }
    },

    // 17. TRIUMPH BONNEVILLE T100
    'bonnevile-t100': {
      name: "Bonnevile T100",
      brand: "triumph",
      description:
        "Bonnevile T100; su/yağ soğutmalı 2 silindirli 8 Valf SOHC motor bloğu ile klasik Bonneville ruhunu yansıtır.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevileT100-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevileT100-detail/1920/1080",
      hotspots: [
        { x: 36, y: 45, title: "Klasik Tasarım", description: "Zarif ve retro çizgiler." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "57.5 kW (77 HP) @ 6100 rpm",
        "Maks. Tork": "106 Nm @ 4000 rpm",
        "Kompresyon Oranı": "10.0:1",
        "CO2 Emisyonu": "60.9 g/km",
        "Yakıt Tüketimi": "4.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "47 mm Showa kartuşlu çatallar",
        "Arka Çatal / Süspansiyon": "Bağlantı ve ön yük ayarlı mono-şok RSU",
        "Tekerlek Arası Mesafe": "1500 mm",
        "Ön Jant Ebatı": '2.5″ x 16″',
        "Arka Jant Ebatı": '3.5″ x 16″',
        "Ön Lastik": "MT90B16",
        "Arka Lastik": "150/80 R16",
        "Ön Fren": "310 mm çapında tek disk, Brembo 2 pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek disk, Nissin tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "705 mm",
        "Depo Kapasitesi": "12 L",
        "Islak Ağırlık": "263 kg"
      }
    },

    // 18. TRIUMPH BONNEVILLE T120
    'bonnevile-t120': {
      name: "Bonnevile T120",
      brand: "triumph",
      description:
        "Bonnevile T120; T100 modelinin geliştirilmiş versiyonu, daha fazla güç ve konfor sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevileT120-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevileT120-detail/1920/1080",
      hotspots: [
        { x: 36, y: 45, title: "Geliştirilmiş Performans", description: "Daha yüksek tork ve güç çıkışı." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "66.65 kW (~90 HP) @ 6650 rpm", // Örnek veri
        "Maks. Tork": "105 Nm @ 3500 rpm",          // Örnek veri
        "Kompresyon Oranı": "11.0:1",
        "CO2 Emisyonu": "107 g/km",
        "Yakıt Tüketimi": "4.7 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "41 mm kartuş çatallar",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı ikiz RSU’lar",
        "Tekerlek Arası Mesafe": "1450 mm",
        "Ön Jant Ebatı": '2.75″ x 18″',
        "Arka Jant Ebatı": '4.25″ x 17″',
        "Ön Lastik": "100/90R 18",
        "Arka Lastik": "150/70R 17",
        "Ön Fren": "310 mm çapında çift disk, Brembo 2 pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek disk, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "790 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "228 kg"
      }
    },

    // 19. TRIUMPH BONNEVILLE SCRAMBLER 900
    'bonnevile-scrambler-900': {
      name: "Bonnevile Scrambler 900",
      brand: "triumph",
      description:
        "Bonnevile Scrambler 900; klasik Bonneville stilini modern dokunuşlarla harmanlar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevileScrambler900-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevileScrambler900-detail/1920/1080",
      hotspots: [
        { x: 37, y: 47, title: "Retro Tasarım", description: "Klasik çizgilerle modern performans." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "57.5 kW (77 HP) @ 6100 rpm",
        "Maks. Tork": "106 Nm @ 4000 rpm",
        "Kompresyon Oranı": "10.0:1",
        "CO2 Emisyonu": "60.9 g/km",
        "Yakıt Tüketimi": "4.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "47 mm Showa süspansiyon",
        "Arka Çatal / Süspansiyon": "Bağlantı ve ön yük ayarlı mono-şok RSU",
        "Tekerlek Arası Mesafe": "1500 mm",
        "Ön Jant Ebatı": '2.5″ x 16″',
        "Arka Jant Ebatı": '3.5″ x 16″',
        "Ön Lastik": "MT90B16",
        "Arka Lastik": "150/80 R16",
        "Ön Fren": "310 mm tek disk Brembo 2 pistonlu kaliper",
        "Arka Fren": "255 mm tek disk, Nissin tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "690–700 mm",
        "Depo Kapasitesi": "12 L",
        "Islak Ağırlık": "251 kg"
      }
    },

    // 20. TRIUMPH TF 250-X
    'tf-250-x': {
      name: "TF 250-X",
      brand: "triumph",
      description:
        "TF 250-X; tek silindirli DOCH motor bloğuyla şehir ve hafif arazi kullanımına uygun model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/tf250x-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/tf250x-detail/1920/1080",
      hotspots: [
        { x: 40, y: 45, title: "Off-Road Adaptasyonu", description: "Özel süspansiyon ve jant yapısı." }
      ],
      engineSpecs: {
        "Motor Tipi": "Tek silindirli, DOCH",
        "Çap": "78 mm x 52.3 mm",
        "Motor Hacmi": "249.95 cc",
        "Motor Gücü": "–",
        "Maks. Tork": "–",
        "Kompresyon Oranı": "14.4",
        "CO2 Emisyonu": "–",
        "Yakıt Tüketimi": "–",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "KYB 48 mm Helezon Yaylı Geri Tepme Ayarlı Ön Süspansiyon",
        "Arka Çatal / Süspansiyon": "KYB Sıkıştırma Ayarlı Arka Süspansiyon",
        "Tekerlek Arası Mesafe": "1492 mm",
        "Ön Jant Ebatı": '1.6″ x 21″',
        "Arka Jant Ebatı": '1.85″ x 19″',
        "Ön Lastik": "80/100R 21",
        "Arka Lastik": "100/90R 19",
        "Ön Fren": "360 mm çapında çift diskli, çift pistonlu Brembo kaliper",
        "Arka Fren": "220 mm çapında tek diskli, tek pistonlu Brembo kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "960 mm",
        "Depo Kapasitesi": "7 L",
        "Islak Ağırlık": "104 kg"
      }
    },

    // 21. TRIUMPH BONNEVILLE SPEEDMASTER
    'bonnevile-speedmaster': {
      name: "Bonnevile Speedmaster",
      brand: "triumph",
      description:
        "Bonnevile Speedmaster; su/yağ soğutmalı 2 silindirli 8 Valf SOHC motor bloğu ile klasik Bonneville mirasını yaşatır.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/speedmaster-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/speedmaster-detail/1920/1080",
      hotspots: [
        { x: 38, y: 46, title: "Klasik Ruhu", description: "Retro tasarım ve modern teknoloji birleşimi." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "57.5 kW (77 HP) @ 6100 rpm",
        "Maks. Tork": "106 Nm @ 4000 rpm",
        "Kompresyon Oranı": "10.0:1",
        "CO2 Emisyonu": "60.9 g/km",
        "Yakıt Tüketimi": "4.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "47 mm Showa kartuşlu çatallar",
        "Arka Çatal / Süspansiyon": "Bağlantı ve ön yük ayarlı mono-şok RSU",
        "Tekerlek Arası Mesafe": "1500 mm",
        "Ön Jant Ebatı": '2.5″ x 16″',
        "Arka Jant Ebatı": '3.5″ x 16″',
        "Ön Lastik": "MT90B16",
        "Arka Lastik": "150/80 R16",
        "Ön Fren": "310 mm çapında tek disk, Brembo 2 pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek disk, Nissin tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "705 mm",
        "Depo Kapasitesi": "12 L",
        "Islak Ağırlık": "263 kg"
      }
    },

    // 22. TRIUMPH THRUXTON 1200 RS (Yeniden eklenen versiyon, örnek)
    'thruxton-1200-rs-2': {
      name: "ThruxTon 1200 RS",
      brand: "triumph",
      description:
        "ThruxTon 1200 RS; yüksek performans, düşük yakıt tüketimi ve özel ayarlı süspansiyon sistemi sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/thruxton1200rs2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/thruxton1200rs2-detail/1920/1080",
      hotspots: [
        { x: 40, y: 47, title: "Performans Odaklı", description: "Özel ayarlı süspansiyon ve fren sistemi." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "77 kW (104 HP) @ 7500 rpm",
        "Maks. Tork": "112 Nm @ 4250 rpm",
        "Kompresyon Oranı": "12.1:1",
        "Yakıt Tüketimi": "4.4 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Showa 43 mm USD büyük pistonlu çatallar",
        "Arka Çatal / Süspansiyon": "Piggyback rezervuarlı, tamamen ayarlanabilir Öhlins ikiz amortisörler",
        "Tekerlek Arası Mesafe": "1415 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5″ x 17″',
        "Ön Fren": "310 mm çapında çift diskli, Brembo M50 4 pistonlu kaliper",
        "Arka Fren": "250 mm çapında tek diskli, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "810 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "197 kg"
      }
    },

    // 23. TRIUMPH BONNEVILLE SPEED TWIN 900
    'bonnevile-speed-twin-900': {
      name: "Bonnevile Speed Twin 900",
      brand: "triumph",
      description:
        "Speed Twin 900; su/yağ soğutmalı çift silindirli motor ve kompakt şasi ile klasik Bonneville tarzı sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevile900-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevile900-detail/1920/1080",
      hotspots: [
        { x: 38, y: 46, title: "Klasik Çift Motor", description: "Efsanevi Bonneville mirası." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı çift silindirli, 8 valf, SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "73.6 kW (99 HP) @ 7250 rpm",
        "Maks. Tork": "112 Nm @ 4250 rpm",
        "Kompresyon Oranı": "12.1:1",
        "CO2 Emisyonu": "116 g/km",
        "Yakıt Tüketimi": "5.1 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm USD Marzocchi süspansiyon",
        "Arka Çatal / Süspansiyon": "Ayarlanabilir ön yüklemeye sahip ikiz RSU’lar",
        "Tekerlek Arası Mesafe": "1413 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.0″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "160/60R 17",
        "Ön Fren": "310 mm çapında çift disk, Brembo M50 4 pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek disk, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "809 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "216 kg"
      }
    },

    // 24. TRIUMPH BONNEVILLE SPEED TWIN 1200
    'bonnevile-speed-twin-1200': {
      name: "Bonnevile Speed Twin 1200",
      brand: "triumph",
      description:
        "Bonnevile Speed Twin 1200; çift silindirli motor, üstün fren ve süspansiyon sistemleri ile klasik Bonneville karakterini taşır.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevile1200-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevile1200-detail/1920/1080",
      hotspots: [
        { x: 38, y: 46, title: "Efsanevi Stil", description: "Retro tasarım, modern performans." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı çift silindirli, 8 valf, SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "77 HP @ 7250 rpm",
        "Maks. Tork": "112 Nm @ 4250 rpm",
        "Kompresyon Oranı": "12.1:1",
        "CO2 Emisyonu": "116 g/km",
        "Yakıt Tüketimi": "5.1 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm Marzocchi ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı ikiz RSU’lar",
        "Tekerlek Arası Mesafe": "1413 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.0″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "160/60R 17",
        "Ön Fren": "320 mm çapında çift disk, Triumph 4 pistonlu kaliper",
        "Arka Fren": "220 mm çapında tek disk, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "805 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "216 kg"
      }
    },

    // 25. TRIUMPH SCRAMBLER 1200 XE
    'scrambler-1200-xe': {
      name: "Scrambler 1200 XE",
      brand: "triumph",
      description:
        "Scrambler 1200 XE; su soğutmalı 2 silindirli 8 Valf SOHC motor bloğu ile off-road karakterini vurgular.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/scrambler1200xe-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/scrambler1200xe-detail/1920/1080",
      hotspots: [
        { x: 40, y: 48, title: "Off-Road Yapı", description: "Dayanıklı şasi ve özel süspansiyon." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "–", // Eksik, ihtiyaca göre ekleyin
        "Maks. Tork": "–",
        "Kompresyon Oranı": "–"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Kartuş sönümlemeli KYB 41 mm çatallar",
        "Arka Çatal / Süspansiyon": "Ayarlanabilir ön yüklemeli KYB ikiz amortisörler",
        "Tekerlek Arası Mesafe": "1445 mm",
        "Ön Jant Ebatı": '2.75″ x 19″',
        "Arka Jant Ebatı": '4.25″ x 17″',
        "Ön Lastik": "100/90R 19",
        "Arka Lastik": "150/70R 17",
        "Ön Fren": "310 mm çapında çift disk, Brembo 4 pistonlu kaliper",
        "Arka Fren": "Tek disk, 255 mm, Nissin kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "809 mm",
        "Depo Kapasitesi": "12 L",
        "Islak Ağırlık": "198 kg"
      }
    },

    // 26. TRIUMPH BONNEVILLE BOBBER
    'bonnevile-bobber': {
      name: "Bonnevile Bobber",
      brand: "triumph",
      description:
        "Bonnevile Bobber; klasik Bonneville tarzını agresif bobber görünümleriyle sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevilebobber-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevilebobber-detail/1920/1080",
      hotspots: [
        { x: 37, y: 45, title: "Bobber Tarzı", description: "Düşük sele ve agresif görünüm." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "57.5 kW (77 HP) @ 6100 rpm",
        "Maks. Tork": "106 Nm @ 4000 rpm",
        "Kompresyon Oranı": "10.0:1",
        "CO2 Emisyonu": "60.9 g/km",
        "Yakıt Tüketimi": "4.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "47 mm Showa süspansiyon",
        "Arka Çatal / Süspansiyon": "Bağlantı ve ön yük ayarlı mono-şok RSU",
        "Tekerlek Arası Mesafe": "1500 mm",
        "Ön Jant Ebatı": '2.5″ x 16″',
        "Arka Jant Ebatı": '3.5″ x 16″',
        "Ön Lastik": "MT90B16",
        "Arka Lastik": "150/80 R16",
        "Ön Fren": "310 mm çapında tek disk, Brembo 2 pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek disk, Nissin tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "690–700 mm",
        "Depo Kapasitesi": "12 L",
        "Islak Ağırlık": "251 kg"
      }
    },

    // 27. TRIUMPH BONNEVILLE SPEED TWIN 1200 (Yeniden)
    'bonnevile-speed-twin-1200-2': {
      name: "Bonnevile Speed Twin 1200",
      brand: "triumph",
      description:
        "Speed Twin 1200; çift silindirli motor ve modern fren/süspansiyon sistemleriyle Bonneville geleneğini devam ettirir.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevile1200-2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevile1200-2-detail/1920/1080",
      hotspots: [
        { x: 38, y: 46, title: "Retro Tasarım", description: "Klasik Bonneville çizgileri." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı çift silindirli, 8 valf, SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "77 HP @ 7250 rpm",
        "Maks. Tork": "112 Nm @ 4250 rpm",
        "Kompresyon Oranı": "12.1:1",
        "CO2 Emisyonu": "116 g/km",
        "Yakıt Tüketimi": "5.1 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm Marzocchi ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı ikiz RSU’lar",
        "Tekerlek Arası Mesafe": "1413 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.0″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "160/60R 17",
        "Ön Fren": "320 mm çapında çift disk, Triumph 4 pistonlu kaliper",
        "Arka Fren": "220 mm çapında tek disk, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "805 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "216 kg"
      }
    },

    // 28. TRIUMPH SPEED TRIPLE 1200 RS – (Ek model örneği, yukarıdakiler tamamlandı)
    // (Bu model için veriler benzer şekilde eklenebilir.)

    // 29. TRIUMPH SCRAMBLER 1200 X
    'scrambler-1200-x': {
      name: "Scrambler 1200 X",
      brand: "triumph",
      description:
        "Scrambler 1200 X; su soğutmalı 2 silindirli 8 Valf SOHC motor bloğu ile off-road performansı sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/scrambler1200x-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/scrambler1200x-detail/1920/1080",
      hotspots: [
        { x: 40, y: 48, title: "Off-Road Yapı", description: "Özel jant ve süspansiyon ayarları." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "66.2 kW (89 HP)",
        "Maks. Tork": "110 Nm @ 4250 rpm",
        "Kompresyon Oranı": "11.0:1",
        "CO2 Emisyonu": "105 g/km",
        "Yakıt Tüketimi": "4.4 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Marzocchi™ 45mm tamamen ayarlanabilir çatallar",
        "Arka Çatal / Süspansiyon": "Marzocchi ikiz RSU’lar tamamen ayarlanabilir 250 mm",
        "Tekerlek Arası Mesafe": "1570 mm",
        "Ön Jant Ebatı": 'Tubeless 36 kollu 21 x 2.15 inç, alüminyum',
        "Arka Jant Ebatı": 'Tubeless 32 kollu 17 x 4.25 inç, alüminyum',
        "Ön Lastik": "90/90R 21",
        "Arka Lastik": "150/70R 17",
        "Ön Fren": "320 mm Brembo disk, M4.30 4 pistonlu kaliper, ABS",
        "Arka Fren": "Tek 255 mm disk, Bissin yüzer tip kaliper, ABS",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "870 mm",
        "Depo Kapasitesi": "15 L",
        "Islak Ağırlık": "230 kg"
      }
    },

    // 30. TRIUMPH BONNEVILLE SPEED TWIN 1200 RS (Tekrar, farklı varyant)
    'bonnevile-speed-twin-1200-rs-2': {
      name: "Bonnevile Speed Twin 1200 RS",
      brand: "triumph",
      description:
        "Speed Twin 1200 RS; çift silindirli motor, üstün fren ve süspansiyon özellikleri sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevile1200rs2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevile1200rs2-detail/1920/1080",
      hotspots: [
        { x: 38, y: 46, title: "Retro Tasarım", description: "Klasik Bonneville çizgileri." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı çift silindirli, 8 valf, SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "77 HP @ 7250 rpm",
        "Maks. Tork": "112 Nm @ 4250 rpm",
        "Kompresyon Oranı": "12.1:1",
        "CO2 Emisyonu": "116 g/km",
        "Yakıt Tüketimi": "5.1 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm Marzocchi ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı ikiz RSU’lar",
        "Tekerlek Arası Mesafe": "1413 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.0″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "160/60R 17",
        "Ön Fren": "320 mm çift disk, Triumph 4 pistonlu kaliper",
        "Arka Fren": "220 mm tek disk, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "805 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "216 kg"
      }
    },

    // 31. TRIUMPH BONNEVILLE SPEED TWIN 900 (Tekrar, varyantı)
    'bonnevile-speed-twin-900-2': {
      name: "Bonnevile Speed Twin 900",
      brand: "triumph",
      description:
        "Speed Twin 900; klasik Bonneville ruhunu modern dokunuşlarla yeniden yorumlar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevile900-2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevile900-2-detail/1920/1080",
      hotspots: [
        { x: 38, y: 46, title: "Klasik Çift Motor", description: "Efsanevi Bonneville mirası." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı çift silindirli, 8 valf, SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "73.6 kW (99 HP) @ 7250 rpm",
        "Maks. Tork": "112 Nm @ 4250 rpm",
        "Kompresyon Oranı": "12.1:1",
        "CO2 Emisyonu": "116 g/km",
        "Yakıt Tüketimi": "5.1 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm USD Marzocchi süspansiyon",
        "Arka Çatal / Süspansiyon": "Ayarlanabilir ön yüklemeye sahip ikiz RSU’lar",
        "Tekerlek Arası Mesafe": "1413 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.0″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "160/60R 17",
        "Ön Fren": "310 mm çift disk, Brembo M50 4 pistonlu kaliper",
        "Arka Fren": "255 mm tek disk, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "809 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "216 kg"
      }
    },

    // 32. TRIUMPH BONNEVILLE SCRAMBLER 900 (Tekrar, varyantı)
    'bonnevile-scrambler-900-2': {
      name: "Bonnevile Scrambler 900",
      brand: "triumph",
      description:
        "Bonnevile Scrambler 900; retro tasarımı modern teknolojilerle birleştirir.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevileScrambler900-2-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevileScrambler900-2-detail/1920/1080",
      hotspots: [
        { x: 37, y: 47, title: "Retro Tasarım", description: "Klasik çizgilerle modern performans." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 8 Valf SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "57.5 kW (77 HP) @ 6100 rpm",
        "Maks. Tork": "106 Nm @ 4000 rpm",
        "Kompresyon Oranı": "10.0:1",
        "CO2 Emisyonu": "60.9 g/km",
        "Yakıt Tüketimi": "4.5 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "47 mm Showa süspansiyon",
        "Arka Çatal / Süspansiyon": "Bağlantı ve ön yük ayarlı mono-şok RSU",
        "Tekerlek Arası Mesafe": "1500 mm",
        "Ön Jant Ebatı": '2.5″ x 16″',
        "Arka Jant Ebatı": '3.5″ x 16″',
        "Ön Lastik": "MT90B16",
        "Arka Lastik": "150/80 R16",
        "Ön Fren": "310 mm çapında tek disk, Brembo 2 pistonlu kaliper",
        "Arka Fren": "255 mm çapında tek disk, Nissin tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "690–700 mm",
        "Depo Kapasitesi": "12 L",
        "Islak Ağırlık": "251 kg"
      }
    },

    // 33. TRIUMPH BONNEVILLE SPEED TWIN 1200 (Son model varyantı)
    'bonnevile-speed-twin-1200-3': {
      name: "Bonnevile Speed Twin 1200",
      brand: "triumph",
      description:
        "Speed Twin 1200; çift silindirli motor, modern süspansiyon ve fren sistemleriyle efsanevi Bonneville ruhunu yaşatır.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/bonnevile1200-3-hero/1920/1080",
      detailImage: "https://picsum.photos/seed/bonnevile1200-3-detail/1920/1080",
      hotspots: [
        { x: 38, y: 46, title: "Klasik ve Modern", description: "Retro tasarım, güncel teknoloji." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı çift silindirli, 8 valf, SOHC",
        "Çap": "97.6 mm x 80 mm",
        "Motor Hacmi": "1200 cc",
        "Motor Gücü": "77 HP @ 7250 rpm",
        "Maks. Tork": "112 Nm @ 4250 rpm",
        "Kompresyon Oranı": "12.1:1",
        "CO2 Emisyonu": "116 g/km",
        "Yakıt Tüketimi": "5.1 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "43 mm Marzocchi ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ön yük ayarlı ikiz RSU’lar",
        "Tekerlek Arası Mesafe": "1413 mm",
        "Ön Jant Ebatı": '3.5″ x 17″',
        "Arka Jant Ebatı": '5.0″ x 17″',
        "Ön Lastik": "120/70R 17",
        "Arka Lastik": "160/60R 17",
        "Ön Fren": "320 mm çapında çift disk, Triumph 4 pistonlu kaliper",
        "Arka Fren": "220 mm çapında tek disk, Nissin 2 pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "805 mm",
        "Depo Kapasitesi": "14.5 L",
        "Islak Ağırlık": "216 kg"
      }
    }
  },

  "scrambler-ducati": {
    // 1. SCRAMBLER DUCATI ICON
    'scrambler-ducati-icon': {
      name: "Scrambler Ducati ICON",
      brand: "ducati",
      description:
        "Scrambler Ducati ICON; hava soğutmalı 2 silindirli 4 zamanlı L motor, silindir başına iki supap.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/scrambler-ducati-icon/1920/1080",
      detailImage: "https://picsum.photos/seed/scrambler-ducati-icon-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Ön Detay", description: "Standart ön detay." }
      ],
      engineSpecs: {
        "Motor Tipi": "Hava soğutmalı 2 silindirli 4 zamanlı L motor, silindir başına iki supap",
        "Çap": "88 x 66 mm",
        "Motor Hacmi": "803 cc",
        "Motor Gücü": "73 hp (53.6 kW) @ 8250 rpm",
        "Maks. Tork": "65.2 Nm @ 7000 dev/dak",
        "Kompresyon Oranı": "11:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "120 g/km",
        "Yakıt Tüketimi": "5.2 L",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters bağlantılı 41 mm Kayaba Amortisör",
        "Arka Çatal / Süspansiyon": "Kayaba ön yük ayarlı amortisör",
        "Tekerlek Arası Mesafe": "1449 mm",
        "Ön Lastik": "110/80 R18 Pirelli MT 60 RS",
        "Arka Lastik": "180/55 R17 Pirelli MT 60 RS",
        "Ön Fren": "320 mm çapında çift diskli fren, radyal konumlandırılmış 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "795 mm",
        "Sele Yükseltme Kiti": "810 mm",
        "Sele Alçaltma Kiti": "780 mm",
        "Depo Kapasitesi": "13.5 L",
        "Kuru Ağırlık": "170 kg"
      }
    },

    // 2. SCRAMBLER DUCATI NIGHTSHIFT
    'scrambler-ducati-nightshift': {
      name: "Scrambler Ducati NIGHTSHIFT",
      brand: "ducati",
      description:
        "Scrambler Ducati NIGHTSHIFT; ICON ile aynı teknik özelliklere sahip, farklı grafik ve detay seçenekleri sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/scrambler-ducati-nightshift/1920/1080",
      detailImage: "https://picsum.photos/seed/scrambler-ducati-nightshift-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Ön Detay", description: "Standart ön detay." }
      ],
      engineSpecs: {
        "Motor Tipi": "Hava soğutmalı 2 silindirli 4 zamanlı L motor, silindir başına iki supap",
        "Çap": "88 x 66 mm",
        "Motor Hacmi": "803 cc",
        "Motor Gücü": "73 hp (53.6 kW) @ 8250 rpm",
        "Maks. Tork": "65.2 Nm @ 7000 dev/dak",
        "Kompresyon Oranı": "11:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "120 g/km",
        "Yakıt Tüketimi": "5.2 L",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters bağlantılı 41 mm Kayaba Amortisör",
        "Arka Çatal / Süspansiyon": "Kayaba ön yük ayarlı amortisör",
        "Tekerlek Arası Mesafe": "1449 mm",
        "Ön Lastik": "110/80 R18 Pirelli MT 60 RS",
        "Arka Lastik": "180/55 R17 Pirelli MT 60 RS",
        "Ön Fren": "320 mm çapında çift diskli fren, radyal konumlandırılmış 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "795 mm",
        "Sele Yükseltme Kiti": "810 mm",
        "Sele Alçaltma Kiti": "780 mm",
        "Depo Kapasitesi": "13.5 L",
        "Kuru Ağırlık": "170 kg"
      }
    },

    // 3. SCRAMBLER DUCATI FULL THROTTLE
    'scrambler-ducati-full-throttle': {
      name: "Scrambler Ducati FULL THROTTLE",
      brand: "ducati",
      description:
        "Scrambler Ducati FULL THROTTLE; ICON ile aynı temel teknik özelliklere sahip, farklı donanım paketleri sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/scrambler-ducati-full-throttle/1920/1080",
      detailImage: "https://picsum.photos/seed/scrambler-ducati-full-throttle-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Ön Detay", description: "Standart ön detay." }
      ],
      engineSpecs: {
        "Motor Tipi": "Hava soğutmalı 2 silindirli 4 zamanlı L motor, silindir başına iki supap",
        "Çap": "88 x 66 mm",
        "Motor Hacmi": "803 cc",
        "Motor Gücü": "73 hp (53.6 kW) @ 8250 rpm",
        "Maks. Tork": "65.2 Nm @ 7000 dev/dak",
        "Kompresyon Oranı": "11:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "120 g/km",
        "Yakıt Tüketimi": "5.2 L",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters bağlantılı 41 mm Kayaba Amortisör",
        "Arka Çatal / Süspansiyon": "Kayaba ön yük ayarlı amortisör",
        "Tekerlek Arası Mesafe": "1449 mm",
        "Ön Lastik": "110/80 R18 Pirelli MT 60 RS",
        "Arka Lastik": "180/55 R17 Pirelli MT 60 RS",
        "Ön Fren": "320 mm çapında çift diskli fren, radyal konumlandırılmış 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında tek diskli fren, tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "795 mm",
        "Sele Yükseltme Kiti": "810 mm",
        "Sele Alçaltma Kiti": "780 mm",
        "Depo Kapasitesi": "13.5 L",
        "Kuru Ağırlık": "170 kg"
      }
    },

    // 4. SCRAMBLER DUCATI 10° ANNIVERSARIO RIZOMA EDITION
    'scrambler-ducati-anniversario-rizoma': {
      name: "Scrambler Ducati 10° Anniversario Rizoma Edition",
      brand: "ducati",
      description:
        "10° Anniversario Rizoma Edition; özel grafik ve detaylarla donatılmış sınırlı üretim versiyonu.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/scrambler-ducati-anniversario/1920/1080",
      detailImage: "https://picsum.photos/seed/scrambler-ducati-anniversario-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Özel Grafikler", description: "Özel Rizoma detayları." }
      ],
      engineSpecs: {
        "Motor Tipi": "Hava soğutmalı 2 silindirli 4 zamanlı L motor, silindir başına iki supap",
        "Çap": "88 mm x 66 mm",
        "Motor Hacmi": "803 cc",
        "Motor Gücü": "73 hp (53.6 kW) @ 8250 rpm",
        "Maks. Tork": "65.2 Nm @ 7000 dev/dak",
        "Kompresyon Oranı": "11:1",
        "Karışım Kontrolü": "Elektronik yakıt enjeksiyonu",
        "CO2 Emisyonu": "120 g/km",
        "Yakıt Tüketimi": "5.2 L",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "41 mm Kayaba ön süspansiyon",
        "Arka Çatal / Süspansiyon": "Ayarlanabilir Kayaba arka süspansiyon",
        "Tekerlek Arası Mesafe": "1449 mm",
        "Ön Lastik": "110/80R 18 Pirelli MT 60 RS",
        "Arka Lastik": "180/55R 17 Pirelli MT 60 RS",
        "Ön Fren": "330 mm çapında disk, 4 pistonlu kaliper",
        "Arka Fren": "245 mm çapında disk, tek pistonlu kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "795 mm",
        "Sele Yükseltme Kiti": "–",
        "Sele Alçaltma Kiti": "–",
        "Depo Kapasitesi": "14.5 L",
        "Kuru Ağırlık": "176 kg"
      }
    },
  },

  "moto-morini": {
    // 5. MOTO MORINI X-CAPE
    'moto-morini-x-cape': {
      name: "Moto Morini X-Cape",
      brand: "moto morini",
      description:
        "X-Cape; su/yağ soğutmalı 2 silindirli 4 zamanlı sıralı motor, modern dijital sistemler ve agresif şasi özellikleri sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/moto-morini-x-cape/1920/1080",
      detailImage: "https://picsum.photos/seed/moto-morini-x-cape-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Dijital Gösterge", description: "Modern dijital sistemler." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı sıralı motor",
        "Çap": "83 mm x 60 mm",
        "Motor Hacmi": "649 cc",
        "Motor Gücü": "44 kW (60 hp) @ 8250 rpm",
        "Maks. Tork": "56 Nm @ 7000 dev/dak",
        "Kompresyon Oranı": "11.3:1",
        "Karışım Kontrolü": "BOSCH EFI",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ayarlı Marzocchi 50 mm amortisör",
        "Arka Çatal / Süspansiyon": "Ayarlı Kayaba Amortisör",
        "Tekerlek Arası Mesafe": "1490 mm",
        "Ön Lastik": "110/80R 19 PirelliScorpion Rally STR",
        "Arka Lastik": "150/70R 17 PirelliScorpion Rally STR",
        "Ön Fren": "Çift diskli fren, 2 pistonlu kaliper (298 mm)",
        "Arka Fren": "Tek diskli fren, 1 pistonlu kaliper (255 mm)",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "820 mm / 845 mm",
        "Uzunluk": "2200 mm",
        "Yükseklik": "1390 mm",
        "Genişlik": "900 mm",
        "Depo Kapasitesi": "18 L",
        "Kuru Ağırlık": "213 kg"
      }
    },

    // 6. MOTO MORINI SEIEMMEZZO SCR
    'moto-morini-seiemmezzo-scr': {
      name: "Moto Morini Seiemmezzo SCR",
      brand: "moto morini",
      description:
        "Seiemmezzo SCR; su/yağ soğutmalı 2 silindirli 4 zamanlı sıralı motor, kompakt ölçüler ve sportif şasi sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/moto-morini-seiemmezzo-scr/1920/1080",
      detailImage: "https://picsum.photos/seed/moto-morini-seiemmezzo-scr-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Sportif Şasi", description: "Kompakt ve hafif şasi yapısı." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı 2 silindirli 4 zamanlı sıralı motor",
        "Çap": "83 mm x 60 mm",
        "Motor Hacmi": "649 cc",
        "Motor Gücü": "44.5 kW (61 hp) @ 8250 rpm",
        "Maks. Tork": "54 Nm @ 7000 dev/dak",
        "Kompresyon Oranı": "11.3:1",
        "Karışım Kontrolü": "BOSCH EFI",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ayarlı Kayaba 43 mm amortisör",
        "Arka Çatal / Süspansiyon": "Ayarlı Kayaba Amortisör",
        "Tekerlek Arası Mesafe": "1425 mm",
        "Ön Lastik": "120/70R 18 Pirelli MT60RS",
        "Arka Lastik": "160/60R 17 Pirelli MT60RS",
        "Ön Fren": "Çift diskli fren, 2 pistonlu kaliper (298 mm)",
        "Arka Fren": "Tek diskli fren, 2 pistonlu kaliper (255 mm)",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "810 mm",
        "Uzunluk": "2150 mm",
        "Yükseklik": "1155 mm",
        "Genişlik": "890 mm",
        "Depo Kapasitesi": "16 L",
        "Kuru Ağırlık": "200 kg"
      }
    },
  },

  "italjet": {
    // 7. ITALJET DRAGSTER 300
    'italjet-dragster-300': {
      name: "Italjet Dragster 300",
      brand: "italjet",
      description:
        "Dragster 300; sıvı soğutmalı, tek silindir, 4 zamanlı, 4 valfli DOHC motor bloğu ile yüksek performans sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/italjet-dragster-300/1920/1080",
      detailImage: "https://picsum.photos/seed/italjet-dragster-300-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Yaylı Süspansiyon", description: "Tek kollu ayarlanabilir yaylı amortisör." }
      ],
      engineSpecs: {
        "Motor Tipi": "Sıvı Soğutmalı, Tek silindir, 4 Zamanlı, 4 Valfli DOHC Motor Bloğu",
        "Çap": "75×63 mm",
        "Motor Hacmi": "278 cc",
        "Motor Gücü": "23.8 HP (17.5 KW) @ 8250 RPM",
        "Maks. Tork": "26 Nm @ 6250 RPM"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Tek kollu ayarlanabilir yaylı amortisör",
        "Arka Çatal / Süspansiyon": "Monoshock ayarlanabilir yaylı tek amortisör",
        "Tekerlek Arası Mesafe": "1345 mm",
        "Ön Lastik": "120-70-12’’",
        "Arka Lastik": "140-60-13’’",
        "Ön Fren": "240 mm hidrolik tek disk fren, Brembo kaliperler",
        "Arka Fren": "175 mm hidrolik tek disk fren, Brembo kaliperler",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "770 mm",
        "Uzunluk": "1870 mm",
        "Depo Kapasitesi": "11 L",
        "Kuru Ağırlık": "128 kg"
      }
    },

    // 8. ITALJET DRAGSTER 200 ABS
    'italjet-dragster-200-abs': {
      name: "Italjet Dragster 200 ABS",
      brand: "italjet",
      description:
        "Dragster 200 ABS; su/yağ soğutmalı tek silindirli 4 zamanlı motor, silindir başına iki supap, üstten çift eksantrik.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/italjet-dragster-200-abs/1920/1080",
      detailImage: "https://picsum.photos/seed/italjet-dragster-200-abs-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Hafif Yapı", description: "Tek ayarlanabilir amortisör sistemi." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı Tek silindirli 4 zamanlı, silindir başına iki supap, üstten çift eksantrik",
        "Çap": "63 mm x 58 mm",
        "Motor Hacmi": "181 cc",
        "Motor Gücü": "14.6 kW (19.8 PS) @ 8250 rpm",
        "Maks. Tork": "15.5 Nm @ 8250 dev/dak",
        "Kompresyon Oranı": "11.6:1",
        "Karışım Kontrolü": "MAGNETI MARELLI",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Tek ayarlanabilir amortisör",
        "Arka Çatal / Süspansiyon": "Tek ayarlanabilir amortisör",
        "Tekerlek Arası Mesafe": "1350 mm",
        "Ön Lastik": "120/70R 12",
        "Arka Lastik": "140/60R 13",
        "Ön Fren": "200 mm disk, Brembo kaliper",
        "Arka Fren": "190 mm disk, Brembo kaliper",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "770 mm",
        "Uzunluk": "1890 mm",
        "Genişlik": "750 mm",
        "Depo Kapasitesi": "9 L",
        "Kuru Ağırlık": "124 kg"
      }
    },
  },

  "royal-alloy": {
    // 9. ROYAL ALLOY TG 300 S LC ABS
    'royal-alloy-tg-300-s-lc-abs': {
      name: "Royal Alloy TG 300 S LC ABS",
      brand: "royal alloy",
      description:
        "TG 300 S LC ABS; su/yağ soğutmalı tek silindir, 4 zamanlı motor, çift hidrolik amortisörlü şasi.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/royal-alloy-tg300-s-lc/1920/1080",
      detailImage: "https://picsum.photos/seed/royal-alloy-tg300-s-lc-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Çift Amortisör", description: "Çift hidrolik amortisörlü süspansiyon." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı Tek Silindir, 4 Zamanlı",
        "Çap": "75.0 mm x 63.0 mm",
        "Motor Hacmi": "278 cc",
        "Motor Gücü": "24.8 HP",
        "Maks. Tork": "23.0 Nm @ 5000 rpm",
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
        "Sele Yüksekliği": "770 mm",
        "Uzunluk": "1845 mm",
        "Yükseklik": "1115 mm",
        "Yerden Yükseklik": "160 mm",
        "Genişlik": "670 mm",
        "Depo Kapasitesi": "11 L",
        "Kuru Ağırlık": "152 kg"
      }
    },

    // 10. ROYAL ALLOY GP 300 S ABS
    'royal-alloy-gp-300-s-abs': {
      name: "Royal Alloy GP 300 S ABS",
      brand: "royal alloy",
      description:
        "GP 300 S ABS; su/yağ soğutmalı tek silindirli 4 zamanlı motor, enjeksiyon sistemi ve ayarlanabilir süspansiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/royal-alloy-gp300-s/1920/1080",
      detailImage: "https://picsum.photos/seed/royal-alloy-gp300-s-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Yakıt Verimliliği", description: "Düşük yakıt tüketimi ile öne çıkar." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı Tek silindirli 4 zamanlı",
        "Çap": "75.0 mm x 63.0 mm",
        "Motor Hacmi": "278 cc",
        "Motor Gücü": "18.5 kW @ 7500 rpm",
        "Maks. Tork": "23.0 Nm @ 5000 rpm",
        "Kompresyon Oranı": "11.0:1",
        "Karışım Kontrolü": "Enjeksiyon",
        "Yakıt Tüketimi": "3.5 L/100 Km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Çift Hidrolik Amortisör",
        "Arka Çatal / Süspansiyon": "Ayarlanabilir Çift Amortisör",
        "Tekerlek Arası Mesafe": "1390 mm",
        "Ön Lastik": "110/70R 12",
        "Arka Lastik": "120/70R 12",
        "Ön Fren": "220 mm Disk",
        "Arka Fren": "220 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "770 mm",
        "Uzunluk": "1845 mm",
        "Yükseklik": "1115 mm",
        "Yerden Yükseklik": "160 mm",
        "Genişlik": "670 mm",
        "Depo Kapasitesi": "10.5 L",
        "Kuru Ağırlık": "152 kg"
      }
    },
  },

  "fantic": {
    // 11. FANTIC CABALLERO 500 ANNIVERSARY
    'fantic-caballero-500-anniversary': {
      name: "Fantic Caballero 500 Anniversary",
      brand: "fantic",
      description:
        "Caballero 500 Anniversary; su/yağ soğutmalı tek silindirli 4 zamanlı motor, klasik tasarım ve modern teknoloji.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-caballero-500-anniversary/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-caballero-500-anniversary-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Retro Tasarım", description: "Klasik Bonneville ruhu." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli 4 zamanlı motor",
        "Çap": "94.5 mm x 64 mm",
        "Motor Hacmi": "449 cc",
        "Motor Gücü": "40 HP (29.8 kW) @7500 rpm",
        "Maks. Tork": "43 Nm @6000 rpm",
        "Karışım Kontrolü": "Elektronik Yakıt enjeksiyonu",
        "CO2 Emisyonu": "97 g/km",
        "Yakıt Tüketimi": "4.2 l/100 km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış 41 mm amortisör",
        "Arka Çatal / Süspansiyon": "Rebound Damping Regulation",
        "Tekerlek Arası Mesafe": "1425 mm",
        "Ön Lastik": "110/80 R19",
        "Arka Lastik": "140/80 R17",
        "Ön Fren": "320 mm Disk",
        "Arka Fren": "230 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "820 mm",
        "Uzunluk": "2080 mm",
        "Depo Kapasitesi": "12 L",
        "Kuru Ağırlık": "150 kg"
      }
    },

    // 12. FANTIC CABALLERO 500 DELUXE
    'fantic-caballero-500-deluxe': {
      name: "Fantic Caballero 500 Deluxe",
      brand: "fantic",
      description:
        "Caballero 500 Deluxe; Anniversary modeline ek olarak daha farklı donanım seçenekleri sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-caballero-500-deluxe/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-caballero-500-deluxe-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Deluxe Paketi", description: "Özel detaylar ve konfor özellikleri." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli 4 zamanlı motor",
        "Çap": "94.5 mm x 64 mm",
        "Motor Hacmi": "449 cc",
        "Motor Gücü": "40 HP (29.8 kW) @7500 rpm",
        "Maks. Tork": "43 Nm @6000 rpm",
        "Kompresyon Oranı": "13.3:1",
        "Karışım Kontrolü": "Elektronik Yakıt enjeksiyonu",
        "CO2 Emisyonu": "97 g/km",
        "Yakıt Tüketimi": "4.2 l/100 km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış 41 mm amortisör",
        "Arka Çatal / Süspansiyon": "Rebound Damping Regulation",
        "Tekerlek Arası Mesafe": "1425 mm",
        "Ön Lastik": "110/80 R19",
        "Arka Lastik": "140/80 R17",
        "Ön Fren": "320 mm Disk",
        "Arka Fren": "230 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "820 mm",
        "Uzunluk": "2080 mm",
        "Depo Kapasitesi": "–",  // Belirtilmemiş; Deluxe varyantında depo kapasitesi artmış olabilir.
        "Kuru Ağırlık": "176 kg"
      }
    },

    // 13. FANTIC CABALLERO 500 EXPLORER
    'fantic-caballero-500-explorer': {
      name: "Fantic Caballero 500 Explorer",
      brand: "fantic",
      description:
        "Caballero 500 Explorer; off-road odaklı, dayanıklı ve macera tutkunlarına yönelik bir versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-caballero-500-explorer/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-caballero-500-explorer-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Explorer Modu", description: "Off-road performansı için optimize edilmiştir." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli 4 zamanlı motor",
        "Çap": "94.5 mm x 64 mm",
        "Motor Hacmi": "449 cc",
        "Motor Gücü": "40 HP (29.8 kW) @7500 rpm",
        "Maks. Tork": "43 Nm @6000 rpm",
        "Kompresyon Oranı": "13.3:1",
        "Karışım Kontrolü": "Elektronik Yakıt enjeksiyonu",
        "CO2 Emisyonu": "97 g/km",
        "Yakıt Tüketimi": "4.2 l/100 km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış 41 mm amortisör",
        "Arka Çatal / Süspansiyon": "Benzer sistem",
        "Tekerlek Arası Mesafe": "1425 mm",
        "Ön Lastik": "110/80 R19",
        "Arka Lastik": "140/80 R17",
        "Ön Fren": "320 mm Disk",
        "Arka Fren": "230 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "820 mm",
        "Uzunluk": "2080 mm",
        "Depo Kapasitesi": "12 L",
        "Kuru Ağırlık": "150 kg"
      }
    },

    // 14. FANTIC CABALLERO 500 FLAT TRACK
    'fantic-caballero-500-flat-track': {
      name: "Fantic Caballero 500 Flat Track",
      brand: "fantic",
      description:
        "Caballero 500 Flat Track; yarış odaklı ve hafif yapısıyla pist performansı sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-caballero-500-flat-track/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-caballero-500-flat-track-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Flat Track", description: "Yarış pistleri için optimize edilmiş." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli 4 zamanlı motor",
        "Çap": "94.5 mm x 64 mm",
        "Motor Hacmi": "449 cc",
        "Motor Gücü": "40 HP (29.8 kW) @7500 rpm",
        "Maks. Tork": "43 Nm @6000 rpm",
        "Karışım Kontrolü": "Elektronik Yakıt enjeksiyonu",
        "CO2 Emisyonu": "97 g/km",
        "Yakıt Tüketimi": "4.2 l/100 km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış 41 mm amortisör",
        "Arka Çatal / Süspansiyon": "Benzer sistem",
        "Tekerlek Arası Mesafe": "1425 mm",
        "Ön Lastik": "110/80 R19",
        "Arka Lastik": "140/80 R17",
        "Ön Fren": "320 mm Disk",
        "Arka Fren": "230 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "820 mm",
        "Uzunluk": "2080 mm",
        "Depo Kapasitesi": "12 L",
        "Kuru Ağırlık": "150 kg"
      }
    },

    // 15. FANTIC CABALLERO 500 RALLY
    'fantic-caballero-500-rally': {
      name: "Fantic Caballero 500 Rally",
      brand: "fantic",
      description:
        "Caballero 500 Rally; arazi performansına yönelik, off-road özellikleriyle donatılmış versiyon.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-caballero-500-rally/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-caballero-500-rally-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Rally Modu", description: "Arazide yüksek konfor ve kontrol." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli 4 zamanlı motor",
        "Çap": "94.5 mm x 64 mm",
        "Motor Hacmi": "449 cc",
        "Motor Gücü": "39.5 HP (29.5 kW) @7100 rpm",
        "Maks. Tork": "43 Nm @6000 rpm",
        "Karışım Kontrolü": "Elektronik Yakıt enjeksiyonu",
        "CO2 Emisyonu": "97 g/km",
        "Yakıt Tüketimi": "4.2 L/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters monte edilmiş 43 mm amortisör",
        "Arka Çatal / Süspansiyon": "Hidrolik düzenleme ile",
        "Tekerlek Arası Mesafe": "1435 mm",
        "Ön Lastik": "110/80R 19",
        "Arka Lastik": "140/70R 17",
        "Ön Fren": "320 mm Disk",
        "Arka Fren": "230 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "860 mm",
        "Uzunluk": "2080 mm",
        "Depo Kapasitesi": "12 L",
        "Kuru Ağırlık": "150 kg"
      }
    },

    // 16. FANTIC CABALLERO 500 SCRAMBLER
    'fantic-caballero-500-scrambler': {
      name: "Fantic Caballero 500 Scrambler",
      brand: "fantic",
      description:
        "Caballero 500 Scrambler; klasik tasarımın spor ve off-road unsurlarıyla harmanlandığı model.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-caballero-500-scrambler/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-caballero-500-scrambler-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Scrambler Detay", description: "Agresif görünüm ve off-road detaylar." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli 4 zamanlı motor",
        "Çap": "94.5 mm x 64 mm",
        "Motor Hacmi": "449 cc",
        "Motor Gücü": "40 HP (29.8 kW) @7500 rpm",
        "Maks. Tork": "43 Nm @6000 rpm",
        "Karışım Kontrolü": "Elektronik Yakıt enjeksiyonu",
        "CO2 Emisyonu": "97 g/km",
        "Yakıt Tüketimi": "4.2 l/100 km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış 41 mm amortisör",
        "Arka Çatal / Süspansiyon": "Rebound Damping Regulation",
        "Tekerlek Arası Mesafe": "1425 mm",
        "Ön Lastik": "110/80 R19",
        "Arka Lastik": "140/80 R17",
        "Ön Fren": "320 mm Disk",
        "Arka Fren": "230 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "820 mm",
        "Uzunluk": "2080 mm",
        "Depo Kapasitesi": "12 L",
        "Kuru Ağırlık": "150 kg"
      }
    },

    // 17. FANTIC XEF 450 4T MY23
    'fantic-xef-450-4t-my23': {
      name: "Fantic XEF 450 4T MY23",
      brand: "fantic",
      description:
        "XEF 450 4T MY23; su/yağ soğutmalı tek silindirli motor, modern teknolojik donanım ve sportif şasi.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-xef-450-4t-my23/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-xef-450-4t-my23-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Yüksek Verim", description: "Verimli ve dinamik motor performansı." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli motor",
        "Çap": "97.0 mm x 60.8 mm",
        "Motor Hacmi": "450 cc",
        "Motor Gücü": "53 hp (29.8 kW) @8250 rpm",
        "CO2 Emisyonu": "93 g/km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Tamamen ayarlanabilir KYB 48 mm amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir KYB amortisör",
        "Tekerlek Arası Mesafe": "1480 mm",
        "Ön Lastik": "90/90×21",
        "Arka Lastik": "140/90×18",
        "Ön Fren": "270 mm Disk",
        "Arka Fren": "245 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "955 mm",
        "Uzunluk": "2175 mm",
        "Depo Kapasitesi": "7.9 L",
        "Kuru Ağırlık": "119 kg"
      }
    },

    // 18. FANTIC XEF 250 4T MY23
    'fantic-xef-250-4t-my23': {
      name: "Fantic XEF 250 4T MY23",
      brand: "fantic",
      description:
        "XEF 250 4T MY23; sıvı soğutmalı, 4 valfli, DOHC tek silindir motor ile kompakt performans sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-xef-250-4t-my23/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-xef-250-4t-my23-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Şehir Performansı", description: "Hafif ve çevik." }
      ],
      engineSpecs: {
        "Motor Tipi": "Tek silindirli, sıvı soğutmalı, 4 valfli, DOHC",
        "Motor Hacmi": "250 cc",
        "Kompresyon Oranı": "13.8:1",
        "Yakıt Tüketimi": "5.6 l/100km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "KYB ø48 mm, tamamen ayarlanabilir, tekerlek hareketi 310 mm",
        "Arka Çatal / Süspansiyon": "KYB, tamamen ayarlanabilir, tekerlek hareketi 317 mm",
        "Tekerlek Arası Mesafe": "1480 mm",
        "Ön Lastik": "90/90×21",
        "Arka Lastik": "140/90×18",
        "Ön Fren": "Hidrolik disk ø270 mm",
        "Arka Fren": "Hidrolik disk ø245 mm",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "955 mm",
        "Depo Kapasitesi": "7.9 L",
        "Islak Ağırlık": "115 kg"
      }
    },

    // 19. FANTIC XEF 250 ENDURO TRAIL 4T
    'fantic-xef-250-enduro-trail-4t': {
      name: "Fantic XEF 250 Enduro Trail 4T",
      brand: "fantic",
      description:
        "XEF 250 Enduro Trail 4T; off-road performansı için optimize edilmiş tek silindirli motor.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-xef-250-enduro/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-xef-250-enduro-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Enduro Modu", description: "Arazi performansı ve dayanıklılık." }
      ],
      engineSpecs: {
        "Motor Tipi": "Su/yağ soğutmalı tek silindirli motor",
        "Çap": "77 mm x 53.6 mm",
        "Motor Hacmi": "249.6 cc",
        "Maks. Tork": "18.6 Nm @6750 rpm",
        "CO2 Emisyonu": "84 g/km",
        "Yakıt Tüketimi": "3.6 l/100 km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Ters konumlandırılmış FANTIC FRS ø43 mm amortisör",
        "Arka Çatal / Süspansiyon": "Ön yükleme ayarlı FANTIC FRS 125 Piggyback",
        "Tekerlek Arası Mesafe": "1608 mm",
        "Ön Lastik": "90/90×21",
        "Arka Lastik": "120/90×18",
        "Ön Fren": "260 mm Disk",
        "Arka Fren": "220 mm Disk",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "915 mm",
        "Depo Kapasitesi": "7.5 L",
        "Kuru Ağırlık": "122 kg"
      }
    },

    // 20. FANTIC XE 125 ENDURO 2T
    'fantic-xe-125-enduro-2t': {
      name: "Fantic XE 125 Enduro 2T",
      brand: "fantic",
      description:
        "XE 125 Enduro 2T; tek silindirli karbüratörlü 2 zamanlı motor ile hafif ve çevik performans sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/fantic-xe-125-enduro-2t/1920/1080",
      detailImage: "https://picsum.photos/seed/fantic-xe-125-enduro-2t-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "2 Zamanlı Motor", description: "Hafif ve çevik performans." }
      ],
      engineSpecs: {
        "Motor Tipi": "Tek silindirli karbüratörlü 2 zamanlı motor",
        "Çap": "54 mm x 54.5 mm",
        "Motor Hacmi": "125 cc",
        "Ateşleme Sistemi": "CDI",
        "Karbüratör": "Keihin PWK38S/1",
        "CO2 Emisyonu": "63 g/km",
        "Emisyon": "Euro 5"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "Tamamen ayarlanabilir KYB 48 mm amortisör",
        "Arka Çatal / Süspansiyon": "Tamamen ayarlanabilir KYB amortisör",
        "Tekerlek Arası Mesafe": "1455 mm",
        "Ön Jant Ebatı": '1.85″ x 17″',
        "Arka Jant Ebatı": '2.15″ x 17″',
        "Ön Lastik": "80/90R 17",
        "Arka Lastik": "90/90R 17",
        "Ön Fren": "220 mm çapında tek disk",
        "Arka Fren": "Kampana fren",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "760 mm",
        "Depo Kapasitesi": "3.8 L",
        "Islak Ağırlık": "110 kg"
      }
    },
  },

  "kamax": {
    // 21. KAMAX CUB PRO 125
    'kamax-cub-pro-125': {
      name: "Kamax Cub Pro 125",
      brand: "kamax",
      description:
        "Cub Pro 125; hava soğutmalı, tek silindirli motor, kompakt boyut ve zincir tahrikli şanzıman.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/kamax-cub-pro-125/1920/1080",
      detailImage: "https://picsum.photos/seed/kamax-cub-pro-125-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Kompakt Yapı", description: "Hafif ve çevik tasarım." }
      ],
      engineSpecs: {
        "Motor Tipi": "Hava soğutmalı, tek silindirli",
        "Çap": "52.4 mm x 57.8 mm",
        "Motor Hacmi": "125 cc",
        "Motor Gücü": "8.5 HP @ 8000 rpm",
        "Maks. Tork": "9.3 Nm @ 5000 rpm",
        "Kompresyon Oranı": "9.56:1",
        "Şanzıman": "4 Vites",
        "Tahrik": "Zincir"
      },
      chassisSpecs: {
        "Kaster": "26.5º",
        "Tekerlek Arası Mesafe": "1245 mm",
        "Ön Jant Ebatı": '1.85″ x 17″',
        "Arka Jant Ebatı": '2.15″ x 17″',
        "Ön Lastik": "80/90R 17",
        "Arka Lastik": "90/90R 17",
        "Ön Fren": "220 mm çapında tek disk",
        "Arka Fren": "Kampana fren",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "760 mm",
        "Depo Kapasitesi": "3.8 L",
        "Islak Ağırlık": "110 kg"
      }
    },
  },

  "electric-motion": {
    // 22. ELECTRIC MOTION ESCAPE XR
    'electric-motion-escape-xr': {
      name: "Electric Motion Escape XR",
      brand: "electric motion",
      description:
        "Escape XR; elektrikli motosiklet, Li-ion batarya ile güçlü performans ve kısa şarj süresi sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/escape-xr/1920/1080",
      detailImage: "https://picsum.photos/seed/escape-xr-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Batarya Özellikleri", description: "Escape XR batarya bilgileri." }
      ],
      engineSpecs: {
        "Batarya": "Escape XR",
        "Enerji": "Li-ion",
        "Voltaj": "50.4V",
        "Kapasite": "3500Wh",
        "Batarya Ağırlığı": "16 kg",
        "Şarj Kapasitesi": "25A",
        "Şarj Süresi": "150 Dakika",
        "Normal Güç": "6 kW",
        "Maksimum Güç": "12 kW"
      },
      chassisSpecs: {
        "Ön Çatal / Süspansiyon": "UPD Inverted 35mm",
        "Arka Çatal / Süspansiyon": "R16V Racing",
        "Tekerlek Arası Mesafe": "1330 mm",
        "Kaster": "27.9º",
        "Ön Jant": '1.6″ x 21″',
        "Arka Jant": '1.85″ x 18″',
        "Ön Fren": "260 mm çapında tek disk Nissin kaliperler",
        "Arka Fren": "220 mm çapında tek disk Nissin kaliperler",
        "ABS": "Var"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "850 mm",
        "Ağırlık": "317 kg"
      }
    },

    // 23. ELECTRIC MOTION E PURE RACE
    'electric-motion-e-pure-race': {
      name: "Electric Motion E Pure Race",
      brand: "electric motion",
      description:
        "E Pure Race; elektrikli motosiklet, Li-ion batarya ile yüksek performans ve yarış odaklı özellikler sunar.",
      modelYear: "–",
      heroImage: "https://picsum.photos/seed/e-pure-race/1920/1080",
      detailImage: "https://picsum.photos/seed/e-pure-race-detail/1920/1080",
      hotspots: [
        { x: 50, y: 50, title: "Yüksek Performans", description: "E Pure Race batarya ve motor teknolojisi." }
      ],
      engineSpecs: {
        "Batarya": "E-Pure Race",
        "Enerji": "Li-ion",
        "Voltaj": "50.4V",
        "Kapasite": "1875Wh",
        "Batarya Ağırlığı": "10.5 kg",
        "Şarj Kapasitesi": "15A",
        "Şarj Süresi": "150 Dakika",
        "Normal Güç": "6 kW",
        "Maksimum Güç": "11 kW"
      },
      chassisSpecs: {
        "Arka Çatal / Süspansiyon": "Reiger",
        "Tekerlek Arası Mesafe": "1325 mm",
        "Ön Jant": '1.6″ x 21″ Michelin X11',
        "Arka Jant": '2.15″ x 18″ Michelin X11',
        "Ön Fren": "182 mm çapında tek disk 4 pistonlu kaliperler",
        "Arka Fren": "150 mm çapında tek disk 2 pistonlu kaliperler"
      },
      dimensionSpecs: {
        "Sele Yüksekliği": "670 mm"
      }
    }
  }
};
