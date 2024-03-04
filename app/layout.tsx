import { Fraunces, Quicksand } from "next/font/google"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Toast from "@/components/Toast"
import Providers from "./providers"
import "./globals.css"


const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
})

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: {
    default: "Italia Cristiana",
    template: "Italia Cristiana",
  },
  description:
    "",
  openGraph: {
    title: {
      default: "Italia Cristiana",
      template: "Italia Cristiana",
    },
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Italia Cristiana",
      template: "Italia Cristiana",
    }, 
  },
  robots: {
    index: true,
  },
  themeColor: "#EDF4F",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${quicksand.variable}`}>
      <head />
      <body>
        <div className="flex min-h-screen flex-col">
          <Providers>
            <NavBar />
            {children}
            <Footer />
            <Toast />
          </Providers>
        </div>
      </body>
    </html>
  )
}
