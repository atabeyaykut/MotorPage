"use client"

import { useState, useEffect, useCallback, useMemo, Suspense } from "react"
import { cn } from "../lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TRANSITION_DURATION = 100
const ANIMATION_DURATION = 7000

const news = [
  {
    title: "Yeni Model Duyurusu",
    description: "2024 model Ducati Streetfighter V4 S artık showroomlarımızda!",
    image: "https://picsum.photos/id/233/1200/800"
  },
  {
    title: "Özel Servis Kampanyası", 
    description: "Kış bakım kampanyamızdan yararlanmak için acele edin.",
    image: "https://picsum.photos/id/334/1200/800"
  },
  {
    title: "MotoGP Başarısı",
    description: "Ducati takımı, 2024 sezonuna zaferle başladı!",
    image: "https://picsum.photos/id/435/1200/800"
  }
]

const ImageFallback = () => (
  <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
    <span className="text-gray-400">Yükleniyor...</span>
  </div>
)

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isKenburnsActive, setIsKenburnsActive] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hasError, setHasError] = useState(false)

  const slideTransition = useMemo(
    () => ({
      start: () => {
        setIsTransitioning(true)
        setIsKenburnsActive(false)
      },
      end: (newIndex) => {
        setCurrentSlide(newIndex)
        setIsTransitioning(false)
        setTimeout(() => {
          setIsKenburnsActive(true)
        }, 50)
      },
    }),
    []
  )

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    slideTransition.start()
    setTimeout(() => {
      slideTransition.end((currentSlide - 1 + news.length) % news.length)
    }, TRANSITION_DURATION)
  }, [currentSlide, isTransitioning, slideTransition])

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    slideTransition.start()
    setTimeout(() => {
      slideTransition.end((currentSlide + 1) % news.length)
    }, TRANSITION_DURATION)
  }, [currentSlide, isTransitioning, slideTransition])

  useEffect(() => {
    setIsKenburnsActive(false)
    const timer = setTimeout(() => {
      setIsKenburnsActive(true)
    }, 50)

    const slideTimer = setInterval(() => {
      nextSlide()
    }, ANIMATION_DURATION)
    
    return () => {
      clearTimeout(timer)
      clearInterval(slideTimer)
    }
  }, [currentSlide, nextSlide])

  const currentSlideData = news[currentSlide]

  return (
    <section className="relative w-[80%] mx-auto h-[600px] mt-20 overflow-hidden bg-black">
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <Suspense fallback={<ImageFallback />}>
          <div 
  className={cn(
    "absolute inset-0 w-full h-full",
    "transform-gpu",
    "transition-opacity duration-800 ease-in-out", 
    isTransitioning ? "opacity-0" : "opacity-100", 
    isKenburnsActive ? [
      "scale-[1.15]",
      "animate-kenburns",
      "brightness-110",
      "contrast-110"
    ].join(" ") : [
      "scale-100",
      "brightness-100",
      "contrast-100"
    ].join(" ")
  )}
>
              <img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-full object-cover"
                onError={() => setHasError(true)}
              />
            </div>
          </Suspense>

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-7xl mx-auto px-8 py-16">
              <div
                className={cn(
                  "transition-all duration-[300ms] ease",
                  isTransitioning && "opacity-0 translate-y-[150px]"
                )}
              >
                <h2 className="text-4xl font-bold text-white mb-4">{currentSlideData.title}</h2>
                <p className="text-white/80 text-lg mb-8">{currentSlideData.description}</p>
                <Button
                  variant="ghost"
                  className="group inline-flex items-center bg-transparent text-white hover:text-red-500 transition-colors w-fit p-0 h-auto hover:bg-transparent"
                >
                  <span className="mr-2">DEVAMINI OKU</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="transition-transform group-hover:translate-x-1"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSlider