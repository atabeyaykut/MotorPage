/**
 * @fileoverview Updated motorcycle data store with new specification structure
 * Contains detailed information about each motorcycle model
 */

export const motorcycles = {
  "ducati": {
    "multistrada-v2": {
      name: "Multistrada V2",
      brand: "ducati",
      description: "Ducati Multistrada V2; macera ve performansı buluşturan, üstün teknolojiyle donatılmış temel versiyon.",
      modelYear: "2024",
      heroImage: "https://picsum.photos/seed/multistrada-v2-hero/1920/1080",
      gallery: [
        "https://picsum.photos/seed/multistrada-v2-1/800/600",
        "https://picsum.photos/seed/multistrada-v2-2/800/600",
        "https://picsum.photos/seed/multistrada-v2-3/800/600",
        "https://picsum.photos/seed/multistrada-v2-4/800/600"
      ],
      
      // New specification structure
      vehicleSpecs: {
        listingDate: "18.03.2024",
        brand: "Ducati",
        model: "Multistrada V2",
        type: "Sport Touring",
        year: "2024",
        condition: "Sıfır",
        mileage: "0 km"
      },
      
      engineSpecs: {
        displacement: "937 cc",
        power: "113 HP @ 9000 rpm",
        timing: "4 zamanlı",
        cylinders: "2 silindirli L tipi",
        transmission: "6 ileri",
        cooling: "Su/yağ soğutmalı",
        color: "Ducati Kırmızı",
        origin: "İtalya"
      },
      
      userDetails: {
        "Özel Donanım": "Ducati Performance by Akrapovic egzoz sistemi",
        "Garanti Durumu": "2 yıl resmi Ducati garantisi",
        "Ek Notlar": "Touring paketi dahil"
      },

      // Keeping hotspots for feature highlights
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
      ]
    }
  }
};
