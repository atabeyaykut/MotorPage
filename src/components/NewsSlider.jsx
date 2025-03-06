import React, { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";

const news = [
  {
    id: 1,
    title: "Triumph ile 2024 Yenilikleri",
    description: "Triumph Motorcycles, 2024 yılında motosiklet dünyasında büyük bir ivme yakalayarak hem küresel çapta hem de Türkiye'de dikkat çekici başarılara imza attı. Yepyeni segmentlere giriş yapan marka, küçük hacimli modellerden motocross dünyasına kadar genişleyen ürün gamıyla her sürüş tarzına hitap eden seçenekler sundu.",
    image: "https://picsum.photos/id/133/1200/800",
    date: "06/08"
  },
  {
    id: 2,
    title: "BMW R 1300 GS Lansman",
    description: "BMW'nin efsanevi GS serisinin yeni üyesi, gelişmiş teknolojisi ve üstün performansıyla dikkat çekiyor. Yeni nesil elektronik sistemler ve daha hafif şasi yapısıyla sınıfının standartlarını yeniden belirliyor.",
    image: "https://picsum.photos/id/134/1200/800",
    date: "05/08"
  },
  {
    id: 3,
    title: "Ducati Multistrada V2",
    description: "Ducati'nin çok yönlü modeli Multistrada V2, yeni özellikleriyle macera tutkunlarının gözdesi olmaya aday. Geliştirilmiş ergonomi ve yeni elektronik paket ile hem şehir içi hem de uzun yol kullanımında maksimum konfor sunuyor.",
    image: "https://picsum.photos/id/135/1200/800",
    date: "04/08"
  }
];

const ANIMATION_DURATION = 8000; // 8 seconds for the full kenburns effect
const TRANSITION_DURATION = 822; // 822ms for slide transitions

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startKenburnsAnimation = useCallback(() => {
    setIsAnimating(true);
    // After animation completes, move to next slide
    setTimeout(() => {
      setIsTransitioning(true);
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % news.length);
        setIsTransitioning(false);
        setIsAnimating(true);
      }, TRANSITION_DURATION);
    }, ANIMATION_DURATION);
  }, []);

  const changeSlide = useCallback((index) => {
    if (currentSlide === index) return;
    setIsTransitioning(true);
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
      setIsAnimating(true);
    }, TRANSITION_DURATION);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
      setIsTransitioning(false);
      setIsAnimating(true);
    }, TRANSITION_DURATION);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
      setIsTransitioning(false);
      setIsAnimating(true);
    }, TRANSITION_DURATION);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, ANIMATION_DURATION + TRANSITION_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative bg-[#1C1F26] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">HABERLERİMİZ</h2>

        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg group">
          {/* Main Content */}
          <div className="absolute inset-0">
            <div className={cn(
              "absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%]",
              "transition-all duration-[8000ms] ease-linear origin-center-left",
              isAnimating && "scale-110 translate-x-[8.33%]",
              isTransitioning && "opacity-0 duration-[822ms]"
            )}>
              <img
                src={news[currentSlide].image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 left-8 flex gap-4">
            <button
              onClick={prevSlide}
              className={cn(
                "w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm",
                "flex items-center justify-center",
                "text-white hover:text-red-500 hover:bg-white/20 transition-all",
                "focus:outline-none focus:ring-2 focus:ring-white/50",
                isTransitioning && "pointer-events-none opacity-50"
              )}
              aria-label="Önceki haber"
              disabled={isTransitioning}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="transition-transform group-hover:-translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className={cn(
                "w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm",
                "flex items-center justify-center",
                "text-white hover:text-red-500 hover:bg-white/20 transition-all",
                "focus:outline-none focus:ring-2 focus:ring-white/50",
                isTransitioning && "pointer-events-none opacity-50"
              )}
              aria-label="Sonraki haber"
              disabled={isTransitioning}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="transition-transform group-hover:translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 bdt-prime-slider-content">
            <div className="bdt-prime-slider-desc">
              <h3 className={cn(
                "text-3xl font-bold text-white mb-4 transition-all duration-[822ms] ease",
                isTransitioning && "opacity-0 translate-y-20"
              )}>
                <span className="text-red-500 first-word">{news[currentSlide].title.split(' ')[0]}</span>
                {' ' + news[currentSlide].title.split(' ').slice(1).join(' ')}
              </h3>
              <div className={cn(
                "transition-all duration-[822ms] ease",
                isTransitioning && "opacity-0 translate-y-[60px]"
              )}>
                <p className="text-white/80 mb-6 max-w-2xl">
                  {news[currentSlide].description}
                </p>
              </div>
              <div className={cn(
                "transition-all duration-[822ms] ease",
                isTransitioning && "opacity-0 translate-y-[150px]"
              )}>
                <a
                  href="#"
                  className="group inline-flex items-center bg-transparent text-white hover:text-red-500 transition-colors w-fit"
                >
                  <span className="mr-2">DEVAMINI OKU</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="10 5 15 9.5 10 14"
                      strokeWidth="1.5"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      x1="4"
                      y1="9.5"
                      x2="15"
                      y2="9.5"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className={cn(
            "absolute top-8 right-8 bg-white/10 backdrop-blur-sm px-4 py-2 rounded transition-all duration-[822ms]",
            isTransitioning && "opacity-0"
          )}>
            <span className="text-white font-medium">{news[currentSlide].date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSlider;
