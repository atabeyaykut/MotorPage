import React, { memo, useMemo } from 'react';
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import NavigationDropdown from "@/components/ui/navigation-dropdown";

// Constants moved to a separate object for better maintainability
const MENU_ITEMS = {
  markalar: [
    { name: "Ducati", path: "/markalar/ducati" },
    { name: "Triumph", path: "/markalar/triumph" },
    { name: "Scrambler Ducati", path: "/markalar/scrambler-ducati" },
    { name: "Moto Morini", path: "/markalar/moto-morini" },
    { name: "Italjet", path: "/markalar/italjet" },
    { name: "Royal Alloy", path: "/markalar/royal-alloy" },
    { name: "Fantic", path: "/markalar/fantic" },
    { name: "Kamax", path: "/markalar/kamax" },
    { name: "Electric Motion", path: "/markalar/electric-motion" }
  ],
  kurumsal: [
    { name: "Hakkımızda", path: "/kurumsal/hakkimizda" },
    { name: "Misyon & Vizyon", path: "/kurumsal/misyon-vizyon" },
    { name: "İnsan Kaynakları", path: "/kurumsal/insan-kaynaklari" }
  ],
  bayilerimiz: [
    { name: "Bayi Listesi", path: "/bayilerimiz/liste" },
    { name: "Bayi Başvuru", path: "/bayilerimiz/basvuru" }
  ]
};

const NAV_LINKS = [
  { to: "/fiyat-listeleri", text: "Fiyat Listeleri" },
  { to: "/kampanyalar", text: "Kampanyalar" },
  { to: "/iletisim", text: "İletişim" }
];

const NavLink = memo(({ to, children }) => (
  <NavigationMenuItem>
    <Link
      to={to}
      className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 text-white"
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
        <Link to="/" className="text-2xl font-bold flex justify-center items-center gap-4" aria-label="Daric Ana Sayfa">
          <img src="/daric.svg" alt="logo" className='max-h-14 w-full relative bottom-1' />
          Daric
        </Link>

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
            <NavigationDropdown
              title="Bayilerimiz"
              items={MENU_ITEMS.bayilerimiz}
              type="bayilerimiz"
            />

            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to}>
                {link.text}
              </NavLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default memo(Header);
