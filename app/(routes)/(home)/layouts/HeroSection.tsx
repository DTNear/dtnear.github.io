"use clinet"
import Type from "./Type"

const HeroSection = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-y-4 px-4 py-6 md:flex-row-reverse md:gap-x-4 md:px-8 lg:py-14">

      <div className=" flex-1 flex-col gap-y-4 md:justify-center lg:justify-end lg:gap-y-8">
        
        <div className="text-center">

          <div className="text-5xl font-semibold lg:text-5xl xl:text-6xl ">
            Tutto <strong className=" main-name "> abbiamo bisogno </strong> lo è
          </div>

          <div className="text-center heading-name text-5xl font-semibold lg:text-5xl xl:text-6xl ">
            <Type />
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default HeroSection


