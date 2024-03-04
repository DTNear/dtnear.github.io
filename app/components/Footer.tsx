"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import SocialGroup from "app/components/SocialGroup"

const Footer = () => {
  const pathname = usePathname()



  return (
    <footer className={`mt-auto shadow-inner`}>
      <div className="footer-container mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:grid-rows-4 md:gap-x-6 md:gap-y-0 md:px-0 lg:gap-x-0 lg:gap-y-2">
        <div className=" col-span-3 md:row-span-3">
          <h2 className="my-2 font-serif text-xl font-semibold">
            About us
          </h2>
          <div className="text-sm">
            <p className="my-1">
              We are
            </p>
            <p>
              We provide 
            </p>
          </div>
        </div>


        <div className="services md:row-span-4">
          <h2 className="flex col-auto my-1 font-serif text-xl font-semibold">Contact</h2>
          <p className="felx mb-3 col-auto ">
            Email:{" "}
            <a href="mailto:info@nextbook.com" className="">
              eventicristiani@libero.it
            </a>
            
          </p>
          <p className="flex mb-3 ">
            Phone:{" "}
            <a href="tel:+9-59-50-960-70" className="px-1">
              +39 340 530 4541
            </a>
            </p>
        </div>
      </div>
      <div className="copyright-notice-container border bg-skin-base">
        <div className="copyright-notice mx-auto flex max-w-6xl flex-col items-center py-1 px-4 text-skin-dark md:flex-row  md:justify-between md:px-8">
          <span>© {new Date().getFullYear()} - Italia Cristiana</span>
          <SocialGroup className="md:!justify-start" />
          <div className="flex gap-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="privacy-policy" target="_blank">Privacy policy</Link></h4>
                    <div className="h-5 bg-skin-dark w-0.5"></div>
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="privacy-policy" target="_blank">Terms & conditions</Link></h4>
                </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
