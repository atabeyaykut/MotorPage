import { useEffect } from "react";
import ModelCategory from "@/components/motorcycle/ModelCategory";

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
    // Update page title and meta description for SEO
    document.title = `${brandName} | Daric Motor`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [brandName, description]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{brandName}</h1>
        <p className="text-xl text-gray-600">{description}</p>
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
