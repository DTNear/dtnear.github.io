import Image from "next/image"
import igOne from "@/public/fb-photos/fb_1.jpg"
import igTwo from "@/public/fb-photos/fb_2.jpg"
import igThree from "@/public/fb-photos/fb_3.jpg"
import igFour from "@/public/fb-photos/fb_5.jpg"
import igFive from "@/public/fb-photos/fb_4.jpg"

const igPhotos = [
  { id: 1, image: igOne, desc: "FB Photo 1" },
  { id: 2, image: igTwo, desc: "FB Photo 2" },
  { id: 3, image: igThree, desc: "FB Photo 3" },
  { id: 4, image: igFour, desc: "FB Photo 4" },
  { id: 5, image: igFive, desc: "FB Photo 5" },
]

const FacebookSection = () => {
  return (
    <section className="mt-8 flex flex-col items-center gap-y-8 bg-skin-muted px-4 py-12 md:py-14 md:px-8 lg:py-16">
       <a href="https://www.facebook.com/eventicristiani" target="_blank"  className="font-serif text-xl font-bold md:text-3xl lg:text-4xl">
          # Follow Us on Facebook
        </a>
      <div className="image_container grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
        {igPhotos.map(photo => (
          <Image
            key={photo.id}
            src={photo.image}
            alt={photo.desc}
            className="last:hidden lg:last:block"
          />
        ))}
      </div>
    </section>
  )
}

export default FacebookSection

