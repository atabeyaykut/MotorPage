import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * @component ModelBadge
 * @description Displays a model year badge for new motorcycle models
 */
const ModelBadge = React.memo(({ year }) => (
  <span 
    className={cn(
      "absolute top-2 right-2 z-10",
      "bg-[#D4001A] text-white",
      "px-2 py-0.5",
      "text-sm font-medium"
    )}
    role="status" 
    aria-label={`${year} model`}
  >
    Model Yılı {year}
  </span>
));

ModelBadge.displayName = 'ModelBadge';

/**
 * @component ModelImage
 * @description Displays a motorcycle model image with hover effects
 */
const ModelImage = React.memo(({ name, src }) => (
  <img
    src={src}
    alt={`${name} motosiklet`}
    className={cn(
      "w-full h-full object-contain",
      "mix-blend-multiply hover:mix-blend-normal",
      "transition-all duration-300 group-hover:scale-105"
    )}
    loading="lazy"
    width="800"
    height="600"
  />
));

ModelImage.displayName = 'ModelImage';

const buttonBaseStyles = cn(
  "min-w-32 text-sm font-medium",
  "px-4 py-1 h-8",
  "rounded-none",
  "transition-colors duration-200"
);

const buttonVariants = {
  default: cn(
    buttonBaseStyles,
    "bg-[#D4001A] hover:bg-[#B30016] text-white"
  ),
  disabled: cn(
    buttonBaseStyles,
    "bg-gray-300 text-gray-600 cursor-not-allowed"
  )
};

/**
 * @component MotorcycleCard
 * @description Displays a motorcycle model card with image, details, and action button
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
    <div className="flex flex-col items-center group">
      <div className="relative w-full aspect-[4/3] mb-4 bg-white">
        {model.modelYear && <ModelBadge year={model.modelYear} />}
        <ModelImage name={model.name} src={model.image} />
      </div>
      
      <h3 className="text-base font-semibold text-center mb-1">{model.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
        {model.description}
      </p>
      
      {model.comingSoon ? (
        <Button 
          className={buttonVariants.disabled}
          disabled 
          variant="outline"
          aria-label="Bu model henüz satışta değil"
        >
          Çok Yakında
        </Button>
      ) : (
        <Button 
          className={buttonVariants.default}
          asChild
          variant="default"
        >
          <a 
            href={model.link}
            aria-label={`${model.name} detaylarını incele`}
            className="text-center"
          >
            Detaylı İncele
          </a>
        </Button>
      )}
    </div>
  );
});

MotorcycleCard.displayName = 'MotorcycleCard';

export default MotorcycleCard;
