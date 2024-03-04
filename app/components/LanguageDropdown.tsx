"use client"
import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import navLinks from "@/lib/utils/navLinks"
import CaretDownIcon from "@/icons/CaretDownIcon"
import LanguageIcon from "@/icons/LanguageIcon"

const TopBar = () => {
  return (
    <div className="hidden p-2  md:block ">
      <NavigationMenu.Root className="max-width padding-x flex items-center justify-between text-sm">
        <NavigationMenu.List className="flex gap-x-2">
          {navLinks
            .filter(nav => ["top", "top-only"].includes(nav.position))
            .map(nav => (
              <NavigationMenu.Item key={nav.name}>
                <Link
                  href={nav.href}
                  className="flex items-center gap-x-2 px-1 opacity-75 hover:opacity-100"
                >
                  {nav.name}
                </Link>
              </NavigationMenu.Item>
            ))}
            <LanguageIcon></LanguageIcon>
        </NavigationMenu.List>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className="flex h-full items-center gap-1"
              aria-controls="site-languages"
            >
             {" "}
             <CaretDownIcon
                    aria-hidden
                    className="dropdown-caret transition-transform ease-in-out"
                  />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              id="category-content"
              className="absolute top-11 border border-skin-dark bg-skin-muted p-4 shadow-lg lg:-left-12 "
            >
              <ul className="List one">
                <li>
                  <NavigationMenu.Link asChild>
                    <div
                      className="inline-block w-full p-1 cursor-pointer"
                    
                    >
                      Italiano
                   </div>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <div
                      className="inline-block w-full cursor-not-allowed p-1 opacity-60"
                      tabIndex={-1}
  
                    >
                      Inglese
                    </div>
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  )
}

export default TopBar
