import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PriceList = () => {
  const [loadingImages, setLoadingImages] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const [loadingPdfs, setLoadingPdfs] = useState({});

  const brands = [
    {
      name: "Ducati",
      logo: "/logos/ducati.png",
      pdfUrl: "/price-list/Ducati_2025_Perakende-Fiyat_Listesi_10.03.2025-1.pdf",
      buttonText: "Ducati Fiyat Listesi",
    },
    {
      name: "Triumph",
      logo: "/logos/triumph.png",
      pdfUrl: "/price-list/TRIUMPH_Perakende-Fiyat_Listesi_10.03.2025.pdf",
      buttonText: "Triumph Fiyat Listesi",
    },
    {
      name: "Royal Alloy",
      logo: "/logos/royal-alloy.png",
      pdfUrl: "/price-list/ROYAL-ALLOY_PriceList_04.02.2025.pdf",
      buttonText: "Royal Alloy Fiyat Listesi",
    },
    {
      name: "Fantic",
      logo: "/logos/fantic.svg",
      pdfUrl: "/price-list/FANTIC_MY24-Fiyat-Listesi_04.02.2025.pdf",
      buttonText: "Fantic Fiyat Listesi",
    },
    {
      name: "Italjet",
      logo: "/logos/italjet.png",
      pdfUrl: "/price-list/ITALJET_-PriceList_04.02.2025.pdf",
      buttonText: "Italjet Fiyat Listesi",
    },
    {
      name: "Scrambler",
      logo: "/logos/ducati-scrambler.svg",
      pdfUrl: "/price-list/Ducati_2025_Perakende-Fiyat_Listesi_10.03.2025-1.pdf",
      buttonText: "Scrambler Ducati Fiyat Listesi",
    },
    {
      name: "Kamax",
      logo: "/logos/kamax.png",
      pdfUrl: "/price-list/KAMAX_Fiyat-Listesi_04.02.2025-Guncel.pdf",
      buttonText: "Kamax Fiyat Listesi",
    },
    {
      name: "Electric Motion",
      logo: "/logos/electric-motion.png",
      pdfUrl: "/price-list/em-price-list.pdf",
      buttonText: "Electric Motion Fiyat Listesi",
    },
    {
      name: "Moto Morini",
      logo: "/logos/moto-morini.webp",
      pdfUrl: "/price-list/Moto-Morini_MY23-Fiyat-Listesi_05.02.2025.pdf",
      buttonText: "Moto Morini Fiyat Listesi",
    },
  ];

  const handleImageLoad = (brandName) => {
    setLoadingImages((prev) => ({ ...prev, [brandName]: false }));
  };

  const handleImageError = (brandName) => {
    setImageErrors((prev) => ({ ...prev, [brandName]: true }));
  };

  const handlePdfClick = async (brand) => {
    try {
      setLoadingPdfs((prev) => ({ ...prev, [brand.name]: true }));

      const response = await fetch(brand.pdfUrl);

      if (!response.ok) {
        throw new Error("PDF not found");
      }

      window.open(brand.pdfUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error accessing PDF:", error);
      alert("Fiyat listesi şu anda mevcut değil. Lütfen daha sonra tekrar deneyiniz.");
    } finally {
      setLoadingPdfs((prev) => ({ ...prev, [brand.name]: false }));
    }
  };

  return (
    <>
      

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Card
              key={brand.name}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border-gray-200"
            >
              <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6 border-b">
                {!imageErrors[brand.name] ? (
                  <>
                    {loadingImages[brand.name] !== false && <Skeleton className="absolute inset-0 m-6 rounded-md" />}
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      className={`max-h-full max-w-full object-contain transition-opacity duration-300 ${
                        loadingImages[brand.name] === false ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(brand.name)}
                      onError={() => handleImageError(brand.name)}
                    />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-500 gap-2">
                    <AlertCircle className="h-8 w-8" />
                    <span className="text-sm">Görsel Yüklenemedi</span>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <h2 className="font-medium text-lg text-center">{brand.name}</h2>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => handlePdfClick(brand)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  disabled={loadingPdfs[brand.name]}
                  aria-label={`${brand.buttonText} indir`}
                >
                  {loadingPdfs[brand.name] ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Yükleniyor...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      {brand.buttonText}
                    </span>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceList;
