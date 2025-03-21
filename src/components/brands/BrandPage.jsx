import { useEffect } from "react";
import ModelCategory from "@/components/motorcycle/ModelCategory";

/**
 * @typedef {Object} Model
 * @property {string|number} id - Model ID
 * @property {string} name - Model name
 * @property {string} description - Model description
 * @property {string} image - Model image URL
 * @property {string} [modelYear] - Model year (optional)
 * @property {string} brand - Brand slug for routing (e.g., 'ducati', 'triumph')
 * @property {string} slug - URL-friendly model identifier
 * @property {boolean} [comingSoon] - Whether the model is coming soon (optional)
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
const BrandPage = ({ brandName, description, categories, img }) => {

  return (
    <div className="container mx-auto px-4 py-4 pt-16">
      <div className="text-center justify-items-center mb-6 space-y-4">
        {img && <img src={`/logos/${img}`} alt="" className="max-w-[200px] h-auto max-h-[115px]" />}
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <ModelCategory
            key={category.title}
            title={category.title}
            models={category.models}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;

