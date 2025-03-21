import React, { useState, useEffect, useCallback } from 'react';
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * @component VehicleSpecs
 * @description Displays vehicle specifications in a table format
 */
const VehicleSpecs = React.memo(({ specs = {} }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full border-collapse">
      <tbody>
        {[
          { key: "İlan Tarihi", value: specs.listingDate },
          { key: "Marka", value: specs.brand },
          { key: "Model", value: specs.model },
          { key: "Tipi", value: specs.type },
          { key: "Yıl", value: specs.year },
          { key: "Araç Durumu", value: specs.condition },
          { key: "Km", value: specs.mileage }
        ].filter(({ value }) => value).map(({ key, value }) => (
          <tr key={key} className="border-b border-border/50">
            <td className="p-4 font-medium">{key}</td>
            <td className="p-4 text-muted-foreground">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

VehicleSpecs.displayName = 'VehicleSpecs';

/**
 * @component EngineSpecs
 * @description Displays engine specifications in a table format
 */
const EngineSpecs = React.memo(({ specs = {} }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full border-collapse">
      <tbody>
        {[
          { key: "Motor Hacmi", value: specs.displacement },
          { key: "Motor Gücü", value: specs.power },
          { key: "Zamanlama Tipi", value: specs.timing },
          { key: "Silindir Sayısı", value: specs.cylinders },
          { key: "Vites", value: specs.transmission },
          { key: "Soğutma", value: specs.cooling },
          { key: "Renk", value: specs.color },
          { key: "Menşei", value: specs.origin }
        ].filter(({ value }) => value).map(({ key, value }) => (
          <tr key={key} className="border-b border-border/50">
            <td className="p-4 font-medium">{key}</td>
            <td className="p-4 text-muted-foreground">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

EngineSpecs.displayName = 'EngineSpecs';

/**
 * @component UserDetails
 * @description Displays user-provided details in a formatted text block
 */
const UserDetails = React.memo(({ details = {} }) => (
  <div className="w-full">
    <div className="space-y-4 p-4 text-base leading-relaxed">
      {details.Not?.split('\n').map((paragraph, index) => (
        <p key={index} className="text-muted-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  </div>
));

UserDetails.displayName = 'UserDetails';

/**
 * @component MotorcycleDetail
 * @description Displays detailed information about a motorcycle model
 */
const MotorcycleDetail = React.memo(({ model }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: false,
    skipSnaps: false,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(true);
    setNextBtnEnabled(true);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Auto-advance slides
    let intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    const handlePointerDown = () => {
      clearInterval(intervalId);
    };

    const handlePointerUp = () => {
      intervalId = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 5000);
    };

    emblaApi.on('pointerDown', handlePointerDown);
    emblaApi.on('pointerUp', handlePointerUp);

    return () => {
      clearInterval(intervalId);
      if (emblaApi) {
        emblaApi.off('pointerDown', handlePointerDown);
        emblaApi.off('pointerUp', handlePointerUp);
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  // Create an infinite array of images
  const images = [...(model.gallery || [model.heroImage])];
  if (images.length === 1) {
    images.push(model.heroImage);
  }

  return (
    <article className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className={cn(
        "relative w-full min-h-[60vh]",
        "mb-12 rounded-xl overflow-hidden"
      )}>
        <div className="relative w-full group" ref={emblaRef}>
          <div className="flex touch-pan-y select-none">
            {images.map((image, index) => (
              <div
                key={`${index}-${image}`}
                className="relative flex-[0_0_100%] min-w-0 transition-transform duration-300 ease-out"
              >
                <img
                  src={image}
                  alt={`${model.name} - Görsel ${index + 1}`}
                  className="w-full h-[60vh] object-cover"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm",
              "flex items-center justify-center",
              "text-white transition-all duration-200",
              "opacity-0 group-hover:opacity-100",
              "hover:bg-black/50 disabled:opacity-0",
              "focus:outline-none focus:ring-2 focus:ring-white/50"
            )}
            aria-label="Önceki görsel"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm",
              "flex items-center justify-center",
              "text-white transition-all duration-200",
              "opacity-0 group-hover:opacity-100",
              "hover:bg-black/50 disabled:opacity-0",
              "focus:outline-none focus:ring-2 focus:ring-white/50"
            )}
            aria-label="Sonraki görsel"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  selectedIndex === index
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/75"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Tabs */}
      <section className="mb-12">
        <Tabs defaultValue="arac" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="arac">Araç</TabsTrigger>
            <TabsTrigger value="motor">Motor</TabsTrigger>
            <TabsTrigger value="detaylar">Detaylar</TabsTrigger>
          </TabsList>
          <TabsContent value="arac">
            <VehicleSpecs specs={model.vehicleSpecs || {}} />
          </TabsContent>
          <TabsContent value="motor">
            <EngineSpecs specs={model.engineSpecs || {}} />
          </TabsContent>
          <TabsContent value="detaylar">
            <UserDetails details={model.userDetails || {}} />
          </TabsContent>
        </Tabs>
      </section>
    </article>
  );
});

MotorcycleDetail.displayName = 'MotorcycleDetail';

export default MotorcycleDetail;
