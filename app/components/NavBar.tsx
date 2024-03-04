"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import * as Collapsible from "@radix-ui/react-collapsible"
import CollapsibleMenu from "app/components/CollapsibleMenu"
import SocialGroup from "app/components/SocialGroup"
import CaretDownIcon from "@/icons/CaretDownIcon"
import MenuIcon from "@/icons/MenuIcon"
import CancelIcon from "@/icons/CancelIcon"
import navLinks from "@/lib/utils/navLinks"
import useScroll from "@/lib/hooks/useScroll"
import Image from "@/public/favicon.ico"
import ChurchIcon from "@/icons/ChurchIcon"
import { StaticImageData } from "next/image"
import UserIcon from "@/icons/UserIcon"
import HeartIcon from "@/icons/HeartIcon"

const NavBar = () => {
  const [navClassList, setNavClassList] = useState<string[]>([])
  const scroll = useScroll()

  const [openNav, setOpenNav] = useState(false)

  const closeNav = () => {
    setOpenNav(false)
  }

  useEffect(() => {
    document.body.style.overflowY = openNav ? "hidden" : "scroll"
  }, [openNav])

  // add shadow to nav (with classList) on scroll
  useEffect(() => {
    const _classList = []

    if (scroll.y > 30) _classList.push("!shadow-xl" )

    setNavClassList(_classList)
  }, [scroll.y])

  return (
    <>

      <header
        className={`sticky top-0 z-20 bg-skin-base  ${navClassList.join(" ")}`}
      >
        <NavigationMenu.Root
          aria-label="primary"
          className="main-navigation padding-x max-width relative m-auto flex max-w-6xl items-center justify-between py-4"
        >
          <div className="flex basis-1/3 justify-start md:hidden">
            <button
              type="button"
              title="menu"
              className="p-1"
              onClick={() => setOpenNav(true)}
            >
              <MenuIcon />
            </button>
          </div>

          <div className="flex basis-1/3 justify-center md:justify-start">
            <Link
              href="/"
              className="flex font-serif text-1xl font-semibold md:text-3xl"
            >
              Italia Cristiana
            </Link>
          </div>

          <NavigationMenu.List className="flex basis-1/3 gap-x-2 text-lg md:gap-x-8">

            <NavigationMenu.Item className="nav-menu-dropdown hidden md:list-item">
            
              <NavigationMenu.Trigger
              
                className="flex h-full items-center gap-1 outline-8"
                aria-controls="category-content"
              >
                <ChurchIcon/>
                Chiese{" "}
                <CaretDownIcon
                  aria-hidden
                  className="dropdown-caret transition-transform ease-in-out"
                />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content
                id="category-content"
                className="absolute rounded top-11 border border-skin-dark bg-skin-muted p-3  lg:-left-2/2"
              >
                <div className="flex gap-x-7">
                  <div className="flex felx-col justify-center md:justify-start">
                    <CollapsibleMenu
                      title="Rome"
                      menuList={rome}
                    />
                    <CollapsibleMenu
                      title="Turin"
                      menuList={turin}
                    />
                    <CollapsibleMenu
                      title="Italia"
                      menuList={italia}
                    />
                  </div>
                </div>
              </NavigationMenu.Content>
              
            </NavigationMenu.Item>

            <NavigationMenu.Item className="nav-menu-dropdown hidden md:list-item">
            
              <NavigationMenu.Trigger
              
                className="flex h-full items-center gap-1 outline-8"
                aria-controls="category-content"
              >
                <UserIcon/>
                Persone{" "}
                <CaretDownIcon
                  aria-hidden
                  className="dropdown-caret transition-transform ease-in-out"
                />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content
                id="category-content"
                className="absolute rounded  top-11 border border-skin-dark bg-skin-muted p-3  lg:-left-2/1"
              >
                <div className="flex gap-x-7">
                  <div className="flex felx-col justify-center md:justify-start">
                    <CollapsibleMenu
                      title="Rome"
                      menuList={Romea}
                    />
                    <CollapsibleMenu
                      title="Turin"
                      menuList={Turina}
                    />
                    <CollapsibleMenu
                      title="Italia"
                      menuList={Italiaa}
                    />
                  </div>
                </div>
              </NavigationMenu.Content>
              
            </NavigationMenu.Item>

            <NavigationMenu.Item className="nav-menu-dropdown hidden md:list-item">
            
              <NavigationMenu.Link
              
                className="flex h-full items-center gap-1 outline-8"
                aria-controls="category-content"
                href="/chi-siamo"
                
              >
                <HeartIcon/>
                ChiSiamo{" "}
                
              </NavigationMenu.Link>
              
            </NavigationMenu.Item>
        
            {/* Lanhuage Dropdown 
            <LanguageDropdown></LanguageDropdown>*/}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </header>



      {/* ===== Mobile Navigation ===== */}
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-full bg-skin-dark transition-all delay-300 duration-500 md:hidden ${
          openNav ? "opacity-40" : "hidden opacity-0"
        }`}
        onClick={closeNav}
      />
      <div
        className={`fixed top-0 z-30 flex h-screen max-h-screen w-10/12 flex-col items-center overflow-y-scroll bg-skin-base p-4 transition-transform duration-300 md:hidden ${
          openNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          title="Close Menu"
          className="self-end p-1"
          onClick={closeNav}
        >
          <CancelIcon className="scale-125" />
        </button>
        
        <h4>Menù</h4>

        <NavigationMenu.Root
          orientation="vertical"
          className="mt-4 mb-6 self-stretch"
        >
          <NavigationMenu.List className="flex flex-col items-start gap-x-2 divide-y text-xl md:gap-x-4">
            <NavigationMenu.Item className={`flex w-full flex-col`}>
              <Link
                href="/"
                className={`flex items-center gap-x-2 py-1 px-2 text-xl`}
                onClick={closeNav}
              >
                <span>Casa</span>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="list-item w-full py-2">
              <Collapsible.Root>
                <Collapsible.Trigger
                  aria-controls="category-content-mobile"
                  className="flex h-full w-full items-center justify-between px-2 text-xl"
                >
                  
                  Chiese{""}
                 {/* <ChurchIcon className=""/> need edit to be next to the text*/} 
                  <CaretDownIcon
                    aria-hidden
                    className="dropdown-caret transition-transform ease-in-out"
                    
                  />
                </Collapsible.Trigger>
                <Collapsible.Content id="category-content-mobile">
                  <ul className="my-2 flex flex-col px-2 font-sans">
                    <li>
                      <CollapsibleMenu
                        title="Rome"
                        mobile
                        menuList={rome}
                        onClick={closeNav}
                      />
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Turin"
                        mobile
                        menuList={turin}
                        onClick={closeNav}
                      />
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Italia"
                        mobile
                        menuList={italia}
                        onClick={closeNav}
                      />
                    </li>
                  </ul>
                </Collapsible.Content>
              </Collapsible.Root>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="list-item w-full py-2">
            
            <Collapsible.Root>
                <Collapsible.Trigger
                  aria-controls="category-content-mobile"
                  className="flex h-full w-full items-center justify-between px-2 text-xl"
                >
                  
                  Persone{""}
                 {/* <UserIcon className=""/> need edit to be next to the text*/} 
                  <CaretDownIcon
                    aria-hidden
                    className="dropdown-caret transition-transform ease-in-out"
                    
                  />
                </Collapsible.Trigger>
                <Collapsible.Content id="category-content-mobile">
                  <ul className="my-2 flex flex-col px-2 font-sans">
                    <li>
                      <CollapsibleMenu
                        title="Rome"
                        mobile
                        menuList={Romea}
                        onClick={closeNav}
                      />
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Turin"
                        mobile
                        menuList={Turina}
                        onClick={closeNav}
                      />
                    </li>
                    <li>
                      <CollapsibleMenu
                        title="Italia"
                        mobile
                        menuList={Italiaa}
                        onClick={closeNav}
                      />
                    </li>
                  </ul>
                </Collapsible.Content>
              </Collapsible.Root>
              
            </NavigationMenu.Item>

            <NavigationMenu.Item className="list-item w-full py-2">
            
              <NavigationMenu.Link
              
                className="flex h-full items-center gap-1 outline-8 px-2"
                href="/chi-siamo"
              >
                
                ChiSiamo{" "}
                
              </NavigationMenu.Link>
              
            </NavigationMenu.Item>

          </NavigationMenu.List>
        </NavigationMenu.Root>

        <SocialGroup placeBottom />
      </div>
    </>
  )
}

const LinkItem = ({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children: string
}) => {
  return (
    <NavigationMenu.Link asChild>
      <Link href={`/categories/${href}`} className="p-2 hover:bg-skin-muted">
        <div className="font-serif font-medium">{title}</div>
        <p className="font-sans text-sm">{children}</p>
      </Link>
    </NavigationMenu.Link>
  )
}

const rome = [
  { name: "Chiesa Numero 1", href: "/" },
  { name: "Chiesa Numero 2", href: "/" },
  { name: "Chiesa Numero 3", href: "/" },
  { name: "Chiesa Numero 4", href: "/" },
]

const turin = [
  { name: "Chiesa Numero 1", href: "/" },
  { name: "Chiesa Numero 2", href: "/" },
  { name: "Chiesa Numero 3", href: "/" },
  { name: "Chiesa Numero 4", href: "/" },
]

const italia = [
  { name: "Chiesa Milan", href: "/" },
  { name: "Chiesa Venice", href: "/" },
  {
    name: "Chiesa Florence",
    href: "Chiesa Bologna",
  },
  { name: "Chiesa Naples", href: "/" },
  { name: "Chiesa Perugia", href: "/" },
  { name: "Tutte le chiese", href: "/" },
]

const Romea = [
  { name: "Doctors", href: "/" },
  { name: "Lawers", href: "/" },
  { name: "Pastors", href: "/" },
  { name: "Dentar", href: "/" },
]

const Turina = [
  { name: "Doctors", href: "/" },
  { name: "Lawers", href: "/" },
  { name: "Pastors", href: "/" },
  { name: "Dentar", href: "/" },
]

const Italiaa = [
  { name: "Doctors Milan", href: "/" },
  { name: "DoctorsVenice", href: "/" },
  {
    name: "Pastors Florence",
    href: "Pastors Bologna",
  },
  { name: "Lawers Naples", href: "/" },
  { name: "Lawers Perugia", href: "/" },
  { name: "Tutte le Persone", href: "/" },
]

export default NavBar
