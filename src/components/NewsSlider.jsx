import React, { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";

const news = [
  {
    id: 1,
    title: "Yeni Ducati Multistrada V2 Valencia'da Tanıtıldı!",
    description: "Ducati, motor modellerini tutkunlarıyla paylaşmak için Valencia'da özel bir etkinlik düzenledi.",
    image: "https://picsum.photos/id/133/1200/800",
    date: "06/08"
  },
  {
    id: 2,
    title: "Yeni BMW R 1300 GS Performansıyla Büyülüyor",
    description: "BMW'nin efsanevi GS serisinin yeni üyesi, gelişmiş teknolojisi ve üstün performansıyla dikkat çekiyor.",
    image: "https://picsum.photos/id/134/1200/800",
    date: "05/08"
  },
  {
    id: 3,
    title: "Triumph Tiger 900 Rally Pro Test Sürüşü",
    description: "Triumph'un macera tutkunları için geliştirdiği yeni modeli zorlu arazi koşullarında test edildi.",
    image: "https://picsum.photos/id/135/1200/800",
    date: "04/08"
  }
];

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % news.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section className="relative bg-[#1C1F26] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">HABERLERİMİZ</h2>
        
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
          {/* Main Content */}
          <div className="absolute inset-0">
            <img
              src={news[currentSlide].image}
              alt=""
              className={cn(
                "w-full h-full object-cover",
                isAnimating && "scale-110 transition-transform duration-5000"
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="text-red-500">Yeni</span> {news[currentSlide].title}
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl">
              {news[currentSlide].description}
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full w-fit hover:bg-red-600">
              DEVAMINI OKU
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {news.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentSlide(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentSlide === index ? "bg-white h-4" : "bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
            aria-label="Previous slide"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
            aria-label="Next slide"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          {/* Date */}
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm px-4 py-2 rounded">
            <span className="text-white font-medium">{news[currentSlide].date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSlider;
