"use client"
import React from "react"
import css from "./Content.module.scss"
import {
  ScrollDirection,
  useScrollDirectionContext,
} from "../../utils/useScrollDirection"
import { usePathname } from "next/navigation"
import animate, { loadAssets } from "./animate"
import { useAnimationContext } from "./animation-context"

export const pageContentID = "page-content"

type ContentBlockProps = {
  isHomePage?: boolean
  scrollDirection?: ScrollDirection
  children?: React.ReactNode
}

const ContentBlock = (props: ContentBlockProps) => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false)
  const animationRan = React.useRef(false)
  const scrollDirection = useScrollDirectionContext()
  const { setAnimationIsLoading } = useAnimationContext()
  const pathname = usePathname()

  React.useEffect(() => {
    setAnimationIsLoading(true)

    // Load animation assets
    loadAssets(pathname).then(() => {
      setAssetsLoaded(true)
      setAnimationIsLoading(false)
    })
  }, [pathname])

  React.useEffect(() => {
    if (assetsLoaded && !animationRan.current) {
      // React strict mode will call this twice in succession in dev mode (to test for side effects), this prevents executing animations twice in that scenario
      animationRan.current = true
      return animate(pathname)
    }
  }, [assetsLoaded])

  return (
    <>
      <div id="transition-container" className={assetsLoaded ? "removed" : ""}>
        <div className="boundary">
          <p className="indicator">One Moment...</p>
        </div>
      </div>

      <main
        id={
          scrollDirection === ScrollDirection.UP
            ? "page-content-container"
            : "page-content-container-visible"
        }
        className={css["container"]}
      >
        <div id="page-content-container-inner">
          <div
            id={pageContentID}
            className={(() => {
              let className = css["content"]

              if (props.isHomePage) {
                className += ` homepage`
              }

              if (assetsLoaded) {
                className += ` ${css["loaded"]}`
              }

              return className
            })()}
          >
            {props.children}
          </div>
        </div>
      </main>
    </>
  )
}

export default ContentBlock
