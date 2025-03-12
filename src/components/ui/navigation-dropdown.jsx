"use client"

import { memo, useMemo, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"

const DropdownItem = memo(({ item, isLoading }) => (
  <li className="dropdown-item flex flex-row items-center" >
    {item.img && <img src={`/logos/${item.img}`} className="max-h-[30px] max-w-[30px] flex-1 object-contain overflow-hidden" />}
    <Link
      to={item.path}
      className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 text-white flex-1 
        hover:text-primary hover:translate-x-1
        data-[active]:bg-white/10 data-[state=open]:bg-white/10
        ${isLoading ? 'animate-pulse' : ''}`}
      aria-label={item.name}
      role="menuitem"
    >
      <div className="text-md font-medium leading-none">{item.name}</div>
      <div className="mt-1 h-px w-full opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true"></div>
    </Link>
  </li>
), (prevProps, nextProps) => prevProps.item.path === nextProps.item.path)

DropdownItem.displayName = "DropdownItem"

const NavigationDropdown = ({ title, items, columns = 1, type }) => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const gridClass = useMemo(
    () => columns > 1
      ? `relative z-10 grid gap-1 p-6 py-6 md:grid-cols-${columns}`
      : "relative z-10 grid gap-1 p-6 py-6",
    [columns]
  )

  const handleTitleClick = () => {
    navigate(`/${type}`);
  };

  return (
    <NavigationMenuItem role="none">
      <NavigationMenuTrigger
        className="bg-transparent text-white transition-colors duration-200"
        aria-label={`${title} menüsünü aç`}
        aria-expanded="false"
        aria-haspopup="true"
        showChevron={false}
        onClick={handleTitleClick}
      >

        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className="dropdown-content bg-gray-700/30 backdrop-blur-lg"
        role="menu"
        aria-label={`${title} alt menüsü`}
      >
        <div className="relative w-[300px] md:w-[350px] lg:w-[420px] bg-transparent" role="none">
          <ul className={`${gridClass} bg-transparent`} role="group">
            {items.map((item) => (
              <DropdownItem
                key={item.path}
                item={item}
                isLoading={isLoading}
              />
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export default memo(NavigationDropdown,
  (prevProps, nextProps) =>
    prevProps.items.length === nextProps.items.length &&
    prevProps.title === nextProps.title
)