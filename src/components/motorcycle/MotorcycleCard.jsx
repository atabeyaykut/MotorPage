import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bike } from "lucide-react";
import { motion } from "framer-motion";

/**
 * @component ModelBadge
 * @description Displays a badge for new model year motorcycles
 */
const ModelBadge = React.memo(({ year }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className={cn(
      "absolute top-4 right-4 z-10",
      "px-3 py-1.5",
      "bg-primary text-white",
      "text-sm font-semibold",
      "rounded-full shadow-lg backdrop-blur-sm"
    )}
  >
    {year}
  </motion.div>
));

ModelBadge.displayName = 'ModelBadge';

/**
 * @component ModelImage
 * @description Displays a motorcycle model image with hover effect and lazy loading
 */
const ModelImage = React.memo(({ name, src }) => (
  <div className="relative w-full h-full overflow-hidden rounded-xl">
    <img
      src={src}
      alt={name}
      className={cn(
        "w-full h-full",
        "object-cover",
        "group-hover:scale-105",
        "transition-transform duration-500 ease-out"
      )}
      loading="lazy"
      width={800}
      height={600}
    />
    <div className={cn(
      "absolute inset-0",
      "bg-gradient-to-t from-black/60 via-black/20 to-transparent",
      "opacity-0 group-hover:opacity-100",
      "transition-opacity duration-300"
    )} />
  </div>
));

ModelImage.displayName = 'ModelImage';

/**
 * @component MotorcycleCard
 * @description Displays a motorcycle model card with modern hover effects and animations
 * @param {Object} model - The motorcycle model data
 * @param {string} model.name - The name of the motorcycle
 * @param {string} model.description - A short description of the motorcycle
 * @param {string} model.image - The URL of the motorcycle image
 * @param {string} [model.modelYear] - The model year if it's a new model
 * @param {string} [model.link] - The link to the motorcycle's detail page
 * @param {boolean} [model.comingSoon] - Whether the motorcycle is coming soon
 */
const MotorcycleCard = React.memo(({ model }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative",
        "bg-white rounded-xl",
        "shadow-md hover:shadow-xl",
        "transition-all duration-300"
      )}
    >
      <div className="relative aspect-[4/3] mb-4">
        {model.modelYear && <ModelBadge year={model.modelYear} />}
        <ModelImage name={model.name} src={model.image} />
        
        <div className={cn(
          "absolute bottom-0 left-0 right-0",
          "p-6 text-white",
          "transform translate-y-full group-hover:translate-y-0",
          "transition-transform duration-300 ease-out"
        )}>
          <h3 className="text-xl font-bold mb-2">
            {model.name}
          </h3>
          <p className="text-sm opacity-90 line-clamp-2">
            {model.description}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {model.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {model.description}
        </p>

        {model.comingSoon ? (
          <div className={cn(
            "inline-flex items-center",
            "px-3 py-1.5 rounded-full",
            "bg-gray-100 text-gray-600",
            "text-sm font-medium"
          )}>
            <span className="mr-2">•</span>
            Çok Yakında
          </div>
        ) : (
          <Button
            asChild
            variant="default"
            className={cn(
              "w-full bg-primary hover:bg-primary/90",
              "group/btn"
            )}
          >
            <a
              href={model.link}
              aria-label={`${model.name} detaylarını incele`}
              className="inline-flex items-center justify-center"
            >
              <Bike className={cn(
                "w-4 h-4 mr-2",
                "transform group-hover/btn:translate-x-1",
                "transition-transform duration-300"
              )} />
              Detaylı İncele
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
});

MotorcycleCard.displayName = 'MotorcycleCard';

export default MotorcycleCard;
