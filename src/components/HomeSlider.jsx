import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HomeSlider = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    {
      season: "SUMMER 2024",
      title: "NEW COLLECTION",
      description: "We know how large objects will act, but things on a small scale.",
      buttonText: "SHOP NOW",
      image: "https://picsum.photos/1920/600?random=1"
    },
    {
      season: "SPRING 2024",
      title: "ADVENTURE SERIES",
      description: "We know how large objects will act, but things on a small scale.",
      buttonText: "EXPLORE NOW",
      image: "https://picsum.photos/1920/600?random=2"
    },
    {
      season: "WINTER 2024",
      title: "URBAN RIDERS",
      description: "We know how large objects will act, but things on a small scale.",
      buttonText: "VIEW MORE",
      image: "https://picsum.photos/1920/600?random=3"
    },
    {
      season: "FALL 2024",
      title: "SPORT EDITION",
      description: "We know how large objects will act, but things on a small scale.",
      buttonText: "DISCOVER",
      image: "https://picsum.photos/1920/600?random=4"
    },
    {
      season: "LIMITED EDITION",
      title: "EXCLUSIVE SERIES",
      description: "We know how large objects will act, but things on a small scale.",
      buttonText: "LEARN MORE",
      image: "https://picsum.photos/1920/600?random=5"
    }
  ];

  const scrollTo = (index) => api?.scrollTo(index);

  return (
    <div className="relative w-full">
      <Carousel 
        setApi={setApi} 
        className="w-full"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[600px] overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                  <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
                    <div className="max-w-xl">
                      <p className="text-white mb-2">{slide.season}</p>
                      <h2 className="text-5xl font-bold text-white mb-4">{slide.title}</h2>
                      <p className="text-white/80 text-lg mb-8">{slide.description}</p>
                      <button className="bg-green-500 text-white px-8 py-3 rounded hover:bg-green-600 transition-colors">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-none" />
      </Carousel>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
