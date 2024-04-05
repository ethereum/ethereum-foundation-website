"use client"
import { usePathname } from "next/navigation"
import React, { useReducer } from "react"
import Footer from "../components/footer/Footer"
import Nav from "../components/nav/Nav"
import useScrollDirection, {
  ScrollDirection,
  ScrollDirectionContext,
} from "../utils/useScrollDirection"
import "../styles/global.scss"
import "../styles/reset.scss"
import { Libre_Franklin, Abhaya_Libre } from "next/font/google"
import { AnimationContext } from "components/page/animation-context"

const fontPrimary = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["200", "400"],
})

const fontSecondary = Abhaya_Libre({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
  weight: ["400"],
})

const RootLayout = ({ children }: { children: React.ReactElement }) => {
  const [animationIsLoading, setAnimationIsLoading] = React.useState(true)
  const pathname = usePathname()
  const scrollDirection = useScrollDirection()

  return (
    <html
      lang="en"
      className={`${fontPrimary.variable} ${fontSecondary.variable}`}
    >
      <body
        id={pathname === "/" ? "home" : ""}
        className={`${
          scrollDirection === ScrollDirection.UP ? "" : "content-scrolled"
        }`}
      >
        <AnimationContext.Provider
          value={{ animationIsLoading, setAnimationIsLoading }}
        >
          <ScrollDirectionContext.Provider value={scrollDirection}>
            <>
              <React.Fragment key={pathname}>{children}</React.Fragment>
              <div id="canvas"></div>
            </>
          </ScrollDirectionContext.Provider>
          <Nav />
          <Footer />
        </AnimationContext.Provider>
      </body>
    </html>
  )
}

export default RootLayout
