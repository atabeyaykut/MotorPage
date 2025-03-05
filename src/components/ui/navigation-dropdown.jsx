import React from 'react';
import { Link } from "react-router-dom";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const backgrounds = {
  markalar: "/dropdownBackground.jpeg",
  kurumsal: "/dropdownBackground2.jpeg",
  bayilerimiz: "/dropdownBackground3.jpg"
};

const NavigationDropdown = ({ title, items, columns = 1, type = "markalar" }) => {
  const bgImage = backgrounds[type];

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="dropdown-content">
        <div
          className={`relative w-100 ${columns > 1 ? 'md:w-100 lg:w-100' : ''}`}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
          <ul className={`relative z-10 grid gap-1 p-4 py-6 ${columns > 1 ? `md:grid-cols-${columns}` : ''}`}>
            {items.map((item, index) => (
              <li key={item.path} className="dropdown-item">
                <Link
                  to={item.path}
                  className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 text-white hover:bg-white/10 data-[active]:bg-white/10 data-[state=open]:bg-white/10"
                >
                  <div className="text-md font-medium leading-none">{item.name}</div>
                  <div className="mt-1 h-px w-full transform transition-all duration-300 group-hover:scale-x-100"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavigationDropdown;
