import React from 'react';
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import NavigationDropdown from "@/components/ui/navigation-dropdown";

const Header = () => {
  const menuItems = {
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

  return (
    <header className="text-white shadow- bg-[#1C1F26]">
      <div className="container mx-auto px-4 flex items-center justify-between h-18 ">
        <Link to="/" className="text-2xl font-bold">
          Daric
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationDropdown title="Markalar" items={menuItems.markalar} columns={2} type="markalar" />
            <NavigationDropdown title="Kurumsal" items={menuItems.kurumsal} type="kurumsal" />
            <NavigationDropdown title="Bayilerimiz" items={menuItems.bayilerimiz} type="bayilerimiz" />

            <NavigationMenuItem>
              <Link to="/fiyat-listeleri" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-red-600">
                Fiyat Listeleri
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/kampanyalar" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-red-600">
                Kampanyalar
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/iletisim" className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-red-600">
                İletişim
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
