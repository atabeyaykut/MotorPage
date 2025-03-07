import React from 'react';
import { cn } from "@/lib/utils";
import MotorcycleCard from "./MotorcycleCard";

/**
 * @component ModelCategory
 * @description Displays a category of motorcycle models with a title and grid layout
 * @param {Object} props - Component props
 * @param {string} props.title - Category title to display
 * @param {Array<Object>} props.models - Array of motorcycle models to display
 */
const ModelCategory = React.memo(({ title, models }) => (
  <section className="mb-16">
    <h2 className={cn(
      "text-2xl font-bold pb-4 mb-8",
      "text-[#D4001A] border-b border-gray-200"
    )}>
      {title}
    </h2>
    <div className={cn(
      "grid gap-y-12",
      "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      "gap-x-6"
    )}>
      {models.map((model) => (
        <MotorcycleCard key={model.id} model={model} />
      ))}
    </div>
  </section>
));

ModelCategory.displayName = 'ModelCategory';

export default ModelCategory;
