import HeartIcon from "@/icons/HeartIcon"
import UserIcon from "@/icons/UserIcon"

type Position = "main" | "main-mobile"

type NavLinks = {
  name: string
  href: string
  icon: JSX.Element | null
  position: Position
}[]

const navLinks: NavLinks = [
  /*
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
    icon: null,
    position: "top-only",
  },
  {
    name: "Persone",
    href: "/chi-siamo",
    icon: <UserIcon />,
    position: "main",
  },
  {
    name: "ChiSiamo",
    href: "/chi-siamo",
    icon: <HeartIcon />,
    position: "main",
  },*/

]

export default navLinks
