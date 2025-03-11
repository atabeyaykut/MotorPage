import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import MotorcycleCard from './MotorcycleCard';

/**
 * @component ModelCategory
 * @description Displays a category of motorcycle models with lazy loading and staggered fade-in animations
 * @param {Object} props - Component props
 * @param {string} props.title - Category title to display
 * @param {Array<Object>} props.models - Array of motorcycle models to display
 */
const ModelCategory = React.memo(({ title, models }) => {
  const categoryRef = useRef(null);

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
        rootMargin: '50px'
      }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={categoryRef}
      className={cn(
        "mb-16",
        "opacity-0 translate-y-4",
        "transition-all duration-700 ease-out"
      )}
      aria-label={`${title} Models`}
    >
      <h2 className={cn(
        "text-2xl font-bold pb-4 mb-8",
        "text-[#D4001A] border-b border-gray-800"
      )}>
        {title}
      </h2>

      <div className={cn(
        "grid gap-y-12",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        "gap-x-6"
      )}>
        {models.map((model, index) => (
          <div
            key={model.id}
            className={cn(
              "transition-all duration-700",
              "animate-fadeIn"
            )}
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            <MotorcycleCard model={model} />
          </div>
        ))}
      </div>
    </section>
  );
});

ModelCategory.displayName = 'ModelCategory';

export default ModelCategory;
