import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

/**
 * @typedef {Object} BrandCardProps
 * @property {string} name - Brand name
 * @property {string} description - Brand description/slogan
 * @property {string} image - Brand image URL
 * @property {string} path - Brand page path
 */

/**
 * BrandCard component displays a brand with image, name, description and a link
 * @param {BrandCardProps} props
 */
const BrandCard = ({ name, description, image, path }) => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center">
        <Link to={path} className="w-full">
          <img
            src={image}
            alt={`${name} Banner`}
            className={cn(
              "w-full h-[250px] object-cover rounded-lg transition-transform duration-300",
              "hover:scale-105"
            )}
          />
        </Link>
        <h2 className="text-2xl font-bold mt-4 mb-2">{name}</h2>
        <p className="text-lg text-gray-600 mb-4 text-center">{description}</p>
        <Link
          to={path}
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
            "bg-primary text-white hover:bg-primary/90 transition-colors",
            "text-sm font-medium"
          )}
        >
          <i className="fas fa-motorcycle" />
          <span>Modelleri İncele</span>
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
