import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    season: "SUMMER 2024",
    title: "NEW COLLECTION",
    description: "Experience the thrill of the open road with our latest models",
    buttonText: "SHOP NOW",
    image: "/slides/slide1.jpg"
  },
  {
    season: "SPRING 2024",
    title: "ADVENTURE SERIES",
    description: "Discover new horizons with our adventure lineup",
    buttonText: "EXPLORE NOW",
    image: "/slides/slide2.jpg"
  },
  {
    season: "WINTER 2024",
    title: "URBAN RIDERS",
    description: "Perfect companions for your daily commute",
    buttonText: "VIEW MORE",
    image: "/slides/slide3.jpg"
  },
  {
    season: "FALL 2024",
    title: "SPORT EDITION",
    description: "Push your limits with our performance series",
    buttonText: "DISCOVER",
    image: "/slides/slide4.jpg"
  },
  {
    season: "LIMITED EDITION",
    title: "EXCLUSIVE SERIES",
    description: "Premium models for the distinguished rider",
    buttonText: "LEARN MORE",
    image: "/slides/slide5.jpg"
  }
];

const HeroSlider = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-full relative"
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
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        <CarouselPrevious className="relative translate-y-0 left-0 right-0 h-8 w-8" />
        <CarouselNext className="relative translate-y-0 left-0 right-0 h-8 w-8" />
      </div>
    </Carousel>
  );
};

export default HeroSlider;
