import React from 'react';
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

/**
 * @component SpecTable
 * @description Displays a table of motorcycle specifications
 */
const SpecTable = React.memo(({ specs }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-primary/5">
          <th colSpan="2" className="p-4 text-left font-semibold">
            Teknik Özellikler
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(specs).map(([key, value]) => (
          <tr key={key} className="border-b border-border/50">
            <td className="p-4 font-medium">{key}</td>
            <td className="p-4 text-muted-foreground">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

SpecTable.displayName = 'SpecTable';

/**
 * @component ImageHotspot
 * @description Displays an image with interactive hotspots
 */


/**
 * @component MotorcycleDetail
 * @description Displays detailed information about a motorcycle model
 */
const MotorcycleDetail = React.memo(({ model }) => {
  return (
    <article className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className={cn(
        "relative w-full min-h-[60vh]",
        "flex items-center justify-center",
        "mb-12 rounded-xl overflow-hidden"
      )}>
        <div className="absolute inset-0">
          <img
            src={model.heroImage}
            alt={model.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white text-center">
          {model.name}
        </h1>
      </section>


      {/* Specifications Tabs */}
      <section className="mb-12">
        <Tabs defaultValue="motor" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="motor">Motor</TabsTrigger>
            <TabsTrigger value="sasi">Şasi</TabsTrigger>
            <TabsTrigger value="olculer">Ölçüler</TabsTrigger>
          </TabsList>
          <TabsContent value="motor">
            <SpecTable specs={model.engineSpecs} />
          </TabsContent>
          <TabsContent value="sasi">
            <SpecTable specs={model.chassisSpecs} />
          </TabsContent>
          <TabsContent value="olculer">
            <SpecTable specs={model.dimensionSpecs} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Image Gallery */}
      <section>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {model.gallery?.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${model.name} - ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </article>
  );
});

MotorcycleDetail.displayName = 'MotorcycleDetail';

export default MotorcycleDetail;
