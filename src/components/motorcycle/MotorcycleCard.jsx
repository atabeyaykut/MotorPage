import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bike } from "lucide-react";
import { Link } from 'react-router-dom';

/**
 * @component ModelBadge
 * @description Displays a badge for new model year motorcycles
 */
const ModelBadge = React.memo(({ year }) => (
  <div className={cn(
    "absolute top-2 right-2 z-10",
    "px-2 py-1",
    "bg-primary text-primary-foreground",
    "text-xs font-medium",
    "rounded-md"
  )}>
    {year}
  </div>
));

ModelBadge.displayName = 'ModelBadge';

/**
 * @component ModelImage
 * @description Displays a motorcycle model image with hover effect and lazy loading
 */
const ModelImage = React.memo(({ name, src }) => (
  <div className="relative w-full h-full overflow-hidden">
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
  </div>
));

ModelImage.displayName = 'ModelImage';

/**
 * @component MotorcycleCard
 * @description Displays a motorcycle model card with image, details, and lazy loading animation
 * @param {Object} model - The motorcycle model data
 * @param {string} model.name - The name of the motorcycle
 * @param {string} model.description - A short description of the motorcycle
 * @param {string} model.image - The URL of the motorcycle image
 * @param {string} [model.modelYear] - The model year if it's a new model
 * @param {string} [model.brand] - The brand of the motorcycle
 * @param {string} [model.slug] - URL-friendly version of the model name
 * @param {boolean} [model.comingSoon] - Whether the motorcycle is coming soon
 */
const MotorcycleCard = React.memo(({ model }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '30px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Create URL-friendly slug if not provided
  const slug = model.slug || model.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      ref={cardRef}
      className={cn(
        "group",
        "flex flex-col items-center",
        "opacity-0 translate-y-4",
        "transition-all duration-700 ease-out",
        "p-4 rounded-lg",
        "bg-card text-card-foreground",
      )}
    >
      <div className="relative w-full aspect-[4/3] mb-4 rounded-md overflow-hidden bg-muted">
        {model.modelYear && <ModelBadge year={model.modelYear} />}
        <ModelImage name={model.name} src={model.image} />
      </div>

      <h3 className="text-base font-semibold text-center mb-1">
        {model.name}
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">
        {model.description}
      </p>

      {model.comingSoon ? (
        <Button
          disabled
          variant="outline"
          className="w-full"
          aria-label="Bu model henüz satışta değil"
        >
          Çok Yakında
        </Button>
      ) : (
        <Button
          asChild
          variant="default"
          className="w-60 bg-primary/90 text-white rounded-full  
          hover:bg-transparent hover:text-primary transition-colors hover:border-2"
        >
          <Link
            to={`/markalar/${model.brand}/${slug}`}
            aria-label={`${model.name} detaylarını incele`}
            className="inline-flex items-center justify-center"
          >
            <Bike className="w-4 h-4 mr-2" />
            Detaylı İncele
          </Link>
        </Button>
      )}
    </div>
  );
});

MotorcycleCard.displayName = 'MotorcycleCard';

export default MotorcycleCard;
