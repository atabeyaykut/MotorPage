import { useEffect } from "react";
import ModelCategory from "@/components/motorcycle/ModelCategory";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * @typedef {Object} Model
 * @property {string} id - Model ID
 * @property {string} name - Model name
 * @property {string} description - Model description
 * @property {string} image - Model image URL
 * @property {string} modelYear - Model year
 * @property {string} [link] - External link for the model
 */

/**
 * @typedef {Object} Category
 * @property {string} title - Category title
 * @property {Model[]} models - List of models in the category
 */

/**
 * @typedef {Object} BrandPageProps
 * @property {string} brandName - Name of the brand
 * @property {string} description - Brand description/slogan
 * @property {Category[]} categories - List of model categories
 */

/**
 * BrandPage component displays motorcycle models organized by categories
 * @param {BrandPageProps} props
 */
const BrandPage = ({ brandName, description, categories }) => {
  useEffect(() => {
    document.title = `${brandName} | Daric Motor`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [brandName, description]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-5xl font-bold mb-6",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-primary to-primary/80"
            )}
          >
            {brandName}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="space-y-24">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ModelCategory
                title={category.title}
                models={category.models}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BrandPage;
