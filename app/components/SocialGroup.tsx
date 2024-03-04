import Link from "next/link"
import FacebookIcon from "@/icons/FacebookIcon"
import InstagramIcon from "@/icons/InstagramIcon"
import TelegramIcon from "@/icons/TelegramIcon"
import MailIcon from "@/icons/MailIcon"

type Props = {
  className?: string
  placeBottom?: boolean
}

const SocialGroup = ({ className = "", placeBottom = false }: Props) => {
  return (
    <ul
      className={`${className} flex justify-center gap-x-4 py-2 ${
        placeBottom ? "mt-auto mb-0" : ""
      }`}
    >
      {socialData.map(({ id, title, href, icon}) => (
        <li key={id}>
          <Link
            href={href}
            title={title}
            className="rounded-full bg-skin-gray bg-opacity-0 p-2 hover:bg-opacity-30" target="_blank"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const socialData = [
  {
    id: 1,
    title: "Follow Italia Cristiana on Facebook",
    href: "https://www.facebook.com/eventicristiani",
    icon: (
      <FacebookIcon className="stroke-skin-dark stroke-2 opacity-80 hover:opacity-100 item-center" />
    ),
  },
  {
    id: 2,
    title: "Follow Italia Cristiana on Instagram",
    href: "https://www.facebook.com/eventicristiani",
    icon: (
      <InstagramIcon className="stroke-skin-dark stroke-2 opacity-80 hover:opacity-100 justify-center" />
    ),
  },
  {
    id: 3,
    title: "Join Italia Cristiana Telegram channel",
    href: "https://www.facebook.com/eventicristiani",
    icon: (
      <TelegramIcon className="stroke-skin-dark stroke-2 opacity-80 hover:opacity-100" />
    ),
  },
  {
    id: 4,
    title: "Send Italia Cristiana an Email",
    href: "mailto:eventicristiani@libero.it" ,
    icon: (
      <MailIcon className="stroke-skin-dark stroke-2 opacity-80 hover:opacity-100" />
    ),
  },
]

export default SocialGroup
