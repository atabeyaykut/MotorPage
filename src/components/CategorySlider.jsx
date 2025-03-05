import React from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = {
  sport: {
    title: "Spor Motosikletler",
    description: "Yüksek performans ve heyecan arayanlar için tasarlandı",
    items: [
      { name: "Ducati Panigale V4", image: "/categories/sport-1.jpg", path: "/kategoriler/spor/panigale" },
      { name: "Triumph Daytona", image: "/categories/sport-2.jpg", path: "/kategoriler/spor/daytona" },
      { name: "Ducati SuperSport", image: "/categories/sport-3.jpg", path: "/kategoriler/spor/supersport" },
      { name: "Ducati Streetfighter", image: "/categories/sport-4.jpg", path: "/kategoriler/spor/streetfighter" },
      { name: "Triumph Speed Triple", image: "/categories/sport-5.jpg", path: "/kategoriler/spor/speed-triple" }
    ]
  },
  naked: {
    title: "Naked Motosikletler",
    description: "Şehir içi kullanım için ideal, çevik ve konforlu",
    items: [
      { name: "Ducati Monster", image: "/categories/naked-1.jpg", path: "/kategoriler/naked/monster" },
      { name: "Triumph Street Triple", image: "/categories/naked-2.jpg", path: "/kategoriler/naked/street-triple" },
      { name: "Ducati Diavel", image: "/categories/naked-3.jpg", path: "/kategoriler/naked/diavel" },
      { name: "Triumph Trident", image: "/categories/naked-4.jpg", path: "/kategoriler/naked/trident" },
      { name: "Moto Morini Corsaro", image: "/categories/naked-5.jpg", path: "/kategoriler/naked/corsaro" }
    ]
  },
  adventure: {
    title: "Adventure Motosikletler",
    description: "Her türlü yol koşulunda mükemmel performans",
    items: [
      { name: "Ducati Multistrada", image: "/categories/adv-1.jpg", path: "/kategoriler/adventure/multistrada" },
      { name: "Triumph Tiger", image: "/categories/adv-2.jpg", path: "/kategoriler/adventure/tiger" },
      { name: "Ducati Desert X", image: "/categories/adv-3.jpg", path: "/kategoriler/adventure/desert-x" },
      { name: "Triumph Scrambler", image: "/categories/adv-4.jpg", path: "/kategoriler/adventure/scrambler" },
      { name: "Moto Morini X-Cape", image: "/categories/adv-5.jpg", path: "/kategoriler/adventure/x-cape" }
    ]
  },
  cruiser: {
    title: "Cruiser Motosikletler",
    description: "Konforlu sürüş ve klasik tasarımın birleşimi",
    items: [
      { name: "Triumph Rocket 3", image: "/categories/cruiser-1.jpg", path: "/kategoriler/cruiser/rocket" },
      { name: "Triumph Bonneville", image: "/categories/cruiser-2.jpg", path: "/kategoriler/cruiser/bonneville" },
      { name: "Triumph Speedmaster", image: "/categories/cruiser-3.jpg", path: "/kategoriler/cruiser/speedmaster" },
      { name: "Ducati XDiavel", image: "/categories/cruiser-4.jpg", path: "/kategoriler/cruiser/xdiavel" },
      { name: "Moto Morini Milano", image: "/categories/cruiser-5.jpg", path: "/kategoriler/cruiser/milano" }
    ]
  },
  scooter: {
    title: "Scooter",
    description: "Pratik ve ekonomik günlük ulaşım çözümü",
    items: [
      { name: "Italjet Dragster", image: "/categories/scooter-1.jpg", path: "/kategoriler/scooter/dragster" },
      { name: "Royal Alloy GT", image: "/categories/scooter-2.jpg", path: "/kategoriler/scooter/gt" },
      { name: "Italjet Velocifero", image: "/categories/scooter-3.jpg", path: "/kategoriler/scooter/velocifero" },
      { name: "Royal Alloy TG", image: "/categories/scooter-4.jpg", path: "/kategoriler/scooter/tg" },
      { name: "Italjet Duke", image: "/categories/scooter-5.jpg", path: "/kategoriler/scooter/duke" }
    ]
  }
};

const CategoryCarousel = ({ category, items, description }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{category}</h2>
          <p className="text-white/80">{description}</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative group h-[400px] rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <Link
                      to={item.path}
                      className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 w-fit"
                    >
                      İncele
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

const CategorySlider = () => {
  return (
    <div className="space-y-4">
      {Object.entries(categories).map(([key, { title, description, items }]) => (
        <CategoryCarousel
          key={key}
          category={title}
          description={description}
          items={items}
        />
      ))}
    </div>
  );
};

export default CategorySlider;
