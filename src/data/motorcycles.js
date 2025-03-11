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
  }
};
