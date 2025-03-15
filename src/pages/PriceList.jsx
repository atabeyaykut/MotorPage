import AboutHero from "@/components/about/AboutHero";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import { Link } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PriceList = () => {
  const [loadingImages, setLoadingImages] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  const brands = [
    {
      name: "Ducati",
      logo: "/logos/ducati.png",
      pdfUrl: "/price-list/Ducati_2025_Perakende-Fiyat_Listesi_10.03.2025-1.pdf",
      buttonText: "Ducati Fiyat Listesi İçin Tıklayınız",
    },
    {
      name: "Triumph",
      logo: "/logos/triumph.png",
      pdfUrl: "/price-list/TRIUMPH_Perakende-Fiyat_Listesi_10.03.2025.pdf",
      buttonText: "Triumph Fiyat Listesi İçin Tıklayınız",
    },
    {
      name: "Royal Alloy",
      logo: "/logos/royal-alloy.png",
      pdfUrl: "/price-list/ROYAL-ALLOY_PriceList_04.02.2025.pdf",
      buttonText: "Royal Alloy Fiyat Listesi İçin Tıklayınız",
    },
    {
      name: "Fantic",
      logo: "/logos/fantic.svg",
      pdfUrl: "/price-list/FANTIC_MY24-Fiyat-Listesi_04.02.2025.pdf",
      buttonText: "Fantic Fiyat Listesi İçin Tıklayınız",
    },
    {
      name: "Italjet",
      logo: "/logos/italjet.png",
      pdfUrl: "/price-list/ITALJET_-PriceList_04.02.2025.pdf",
      buttonText: "Italjet Fiyat Listesi İçin Tıklayınız",
    },
    {
      name: "Scrambler",
      logo: "/logos/ducati-scrambler.svg",
      pdfUrl: "/price-list/Ducati_2025_Perakende-Fiyat_Listesi_10.03.2025-1.pdf",
      buttonText: "Scrambler Ducati Fiyat Listesi İçin Tıklayınız",
    },
    {
      name: "Kamax",
      logo: "/logos/kamax.png",
      pdfUrl: "/price-list/KAMAX_Fiyat-Listesi_04.02.2025-Guncel.pdf",
      buttonText: "Kamax Fiyat Listesi İçin Tıklayınız",
    },
    {
      name: "Electric Motion",
      logo: "/logos/electric-motion.png",
      pdfUrl: "/price-list/em-price-list.pdf",
      buttonText: "Electric Motion Fiyat Listesi İçin Tıklayınız",
    },
    {
      name: "Moto Morini",
      logo: "/logos/moto-morini.webp",
      pdfUrl: "/price-list/Moto-Morini_MY23-Fiyat-Listesi_05.02.2025.pdf",
      buttonText: "Moto Morini Fiyat Listesi İçin Tıklayınız",
    },
  ];

  const handleImageLoad = (brandName) => {
    setLoadingImages((prev) => ({ ...prev, [brandName]: false }));
  };

  const handleImageError = (brandName) => {
    setImageErrors((prev) => ({ ...prev, [brandName]: true }));
  };

  const handlePdfClick = (pdfUrl) => {
    fetch(pdfUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("PDF not found");
        }
        window.open(pdfUrl, "_blank");
      })
      .catch((error) => {
        console.error("Error accessing PDF:", error);
        alert("Fiyat listesi şu anda mevcut değil. Lütfen daha sonra tekrar deneyiniz.");
      });
  };

  return (
    <>
      <section className="relative min-h-[40vh] bg-[url('https://picsum.photos/2200')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative flex h-full min-h-[40vh] items-center justify-start">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Hakkımızda
            </h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    to="/"
                    className={cn(
                      "inline-flex items-center text-sm font-medium text-white/80",
                      "hover:text-white"
                    )}
                  >
                    Anasayfa
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-white/60">/</span>
                    <span className="text-sm font-medium text-white">
                      Fiyat Listeleri
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col shadow-2xl min-h-full justify-items-center  justify-center p-6 bg-white rounded-lg duration-300">
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg  flex items-center justify-center">
                {loadingImages[brand.name] !== false && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                  </div>
                )}

                {!imageErrors[brand.name] ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={`w-full h-full object-contain transition-opacity duration-300 ${loadingImages[brand.name] === false ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => handleImageLoad(brand.name)}
                    onError={() => handleImageError(brand.name)}
                  />
                ) : (
                  <span className="text-gray-500 text-sm">Görsel Yüklenemedi</span>
                )}
              </div>

              <button
                onClick={() => handlePdfClick(brand.pdfUrl)}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors duration-300 text-sm font-medium"
              >
                {brand.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceList;
