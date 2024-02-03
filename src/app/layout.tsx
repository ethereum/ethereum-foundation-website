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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [transitionAnimated, setTransitionAnimated] = React.useState(true)
  const pathname = usePathname()

  // Disable text animation when navigating between pages (makes for a cleaner transition)
  React.useEffect(() => {
    setTimeout(() => {
      setTransitionAnimated(true)
    }, 10)

    return () => {
      setTransitionAnimated(false)
    }
  }, [pathname])

  const scrollDirection = useScrollDirection()

  return (
    <html lang="en">
      <body
        id={pathname === "/" ? "home" : ""}
        className={`${
          scrollDirection === ScrollDirection.UP ? "" : "content-scrolled"
        } ${transitionAnimated ? "animate-transitions" : ""}`}
      >
        <ScrollDirectionContext.Provider value={scrollDirection}>
          <>
            {children}
            <div id="canvas"></div>
          </>
        </ScrollDirectionContext.Provider>
        <Nav />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
