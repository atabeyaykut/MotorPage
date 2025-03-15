import React, { memo, useMemo } from 'react';
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import NavigationDropdown from "@/components/ui/navigation-dropdown";

const MENU_ITEMS = {
  markalar: [
    { name: "Ducati", path: "/markalar/ducati", img: "ducati.png" },
    { name: "Triumph", path: "/markalar/triumph", img: "triumph.png" },
    { name: "Scrambler Ducati", path: "/markalar/scrambler-ducati", img: "ducati-scrambler.svg" },
    { name: "Moto Morini", path: "/markalar/moto-morini", img: "moto-morini.webp" },
    { name: "Italjet", path: "/markalar/italjet", img: "italjet.png" },
    { name: "Royal Alloy", path: "/markalar/royal-alloy", img: "royal-alloy.png" },
    { name: "Fantic", path: "/markalar/fantic", img: "fantic.svg" },
    { name: "Kamax", path: "/markalar/kamax", img: "kamax.png" },
    { name: "Electric Motion", path: "/markalar/electric-motion", img: "electric-motion.png" },
  ],
  kurumsal: [
    { name: "Hakkımızda", path: "/kurumsal/hakkimizda" },
    { name: "Ekibimiz", path: "/kurumsal/ekibimiz" },
    { name: "Misyon & Vizyon", path: "/kurumsal/misyon-vizyon" },
  ]
};

const NAV_LINKS = [
  { to: "/sergi", text: "Sergi" },
  { to: "/fiyat-listeleri", text: "Fiyat Listeleri" },
  { to: "/kampanyalar", text: "Kampanyalar" },
  { to: "/iletisim", text: "İletişim" }
];

const NavLink = memo(({ to, children }) => (
  <NavigationMenuItem>
    <Link
      to={to}
      className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-md font-medium transition-colors hover:text-primary text-white"
      aria-label={children}
    >
      {children}
    </Link>
  </NavigationMenuItem>
));

NavLink.displayName = 'NavLink';

const Header = () => {
  // Using constants instead of recreating arrays on each render
  const navLinks = useMemo(() => NAV_LINKS, []);

  return (
    <header className="bg-[#1C1F26] text-white shadow-md" role="banner">
      <div className="container mx-auto px-40 flex items-center justify-between h-20">
        <Link to="/" className="text-3xl font-bold flex justify-center items-center gap-4" aria-label="Daric Ana Sayfa">
          <img src="/daric.svg" alt="logo" className='max-h-14 w-full relative bottom-1' />
          Daric
        </Link>

        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationDropdown
                title="Markalar"
                items={MENU_ITEMS.markalar}
                columns={2}
                type="markalar"
              />
              <NavigationDropdown
                title="Kurumsal"
                items={MENU_ITEMS.kurumsal}
                type="kurumsal"
              />

              {navLinks.map(link => (
                <NavLink key={link.to} to={link.to}>
                  {link.text}
                </NavLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/randevu-al">
            <Button 
              variant="outline" 
              className="border-primary text-white hover:bg-white hover:text-primary transition-colors"
            >
              Randevu Al
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
