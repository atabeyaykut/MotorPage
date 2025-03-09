import React, { memo, useMemo } from 'react';
import { Link } from "react-router-dom";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

// Constants moved to a separate object
const BACKGROUNDS = {
  markalar: "/dropdownBackground.jpeg",
  kurumsal: "/dropdownBackground2.jpeg",
  bayilerimiz: "/dropdownBackground3.jpg"
};

const DropdownItem = memo(({ item }) => (
  <li className="dropdown-item">
    <Link
      to={item.path}
      className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10 data-[active]:bg-white/10 data-[state=open]:bg-white/10"
      aria-label={item.name}
    >
      <div className="text-md font-medium leading-none">{item.name}</div>
      <div className="mt-1 h-px w-full" aria-hidden="true"></div>
    </Link>
  </li>
));

DropdownItem.displayName = 'DropdownItem';

const NavigationDropdown = ({ title, items, columns = 1, type = "markalar" }) => {
  const bgImage = useMemo(() => BACKGROUNDS[type], [type]);

  const gridClass = useMemo(() =>
    columns > 1 ? `relative z-10 grid gap-1 p-4 py-6 md:grid-cols-${columns}` : 'relative z-10 grid gap-1 p-4 py-6',
    [columns]
  );

  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }), [bgImage]);

  return (
    <NavigationMenuItem >
      <NavigationMenuTrigger
        className="bg-transparent text-white "
        aria-label={`${title} menüsünü aç`}
      >
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="dropdown-content ">
        <div
          className="relative w-[500px] md:w-[500px] lg:w-[500px] "
          style={backgroundStyle}
          role="menu"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-hidden="true"
          ></div>
          <ul
            className={gridClass}
            role="menubar"
          >
            {items.map((item) => (
              <DropdownItem key={item.path} item={item} />
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default memo(NavigationDropdown);
