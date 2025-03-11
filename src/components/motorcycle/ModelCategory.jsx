import React from 'react';
import { cn } from "@/lib/utils";
import MotorcycleCard from './MotorcycleCard';
import { motion } from "framer-motion";

/**
 * @component ModelCategory
 * @description Displays a category of motorcycle models in a modern catalog-style layout
 * @param {Object} props - Component props
 * @param {string} props.title - Category title to display
 * @param {Array<Object>} props.models - Array of motorcycle models to display
 */
const ModelCategory = React.memo(({ title, models }) => {
  return (
    <section 
      className="relative"
      aria-label={`${title} Models`}
    >
      <h2 className={cn(
        "text-3xl font-bold mb-12",
        "relative inline-block",
        "after:content-[''] after:absolute",
        "after:bottom-0 after:left-0",
        "after:w-1/2 after:h-1",
        "after:bg-primary"
      )}>
        {title}
      </h2>
      
      <div className={cn(
        "grid gap-8",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        "relative z-10"
      )}>
        {models.map((model, index) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <MotorcycleCard model={model} />
          </motion.div>
        ))}
      </div>
    </section>
  );
});

ModelCategory.displayName = 'ModelCategory';

export default ModelCategory;
