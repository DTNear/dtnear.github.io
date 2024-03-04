import Image from "next/image"
import SocialGroup from "@/components/SocialGroup"
import DownArrowIcon from "@/icons/DownArrowIcon"
import cafeBookPic from "@/public/logo-bun.jpg"

const HeroSection = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-y-4 px-4 py-6 md:flex-row-reverse  md:gap-x-4 md:px-8 lg:py-14">
      
      <div className="info-wrapper flex flex-1 flex-col gap-y-4 md:justify-center lg:justify-end lg:gap-y-8">
        <h1 className="font-serif text-4xl font-semibold md:!leading-tight lg:text-4xl xl:text-4xl">
          Il posto migliore da trovare <br />
          Il tuo preferito <br />
          Eventi
        </h1>

        <p className="font-sans xl:text-lg">
        Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <div>
          <a
            href="https://eventicristiani.it/?fbclid=IwAR0eOUQbZNaPITxgAwU7UXO9IlEFjXcHCcbjsCdpicJJachxoIM8MWrPzjA" target="_blank"
            className="outline-btn-color inline-block rounded py-2 px-4 text-lg font-semibold"
          >
            Ricevi ogni mattina un Messaggio 
            <DownArrowIcon className="ml-2 animate-bounce !stroke-skin-dark stroke-2" />
          </a>
        </div>




        <div className="mt-2 flex gap-2 divide-x divide-skin-dark md:w-[125%] lg:w-auto">
          <div className="">Informazione</div>
          <div className=" pl-2">Eventi</div>
          <div className=" pl-2">Comunità</div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={cafeBookPic}
          alt="Open Book"
          priority
          className=""
        />
      </div>
    </div>
  )
}

export default HeroSection
