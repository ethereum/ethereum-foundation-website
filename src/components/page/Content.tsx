"use client"
import React from "react"
import css from "./Content.module.scss"
import useScrollDirection, {
  ScrollDirection,
  useScrollDirectionContext,
} from "../../utils/useScrollDirection"
import { usePathname } from "next/navigation"
import animate, { loadAssets, loadAndCacheTexture } from "./animate"

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
  const pathname = usePathname()

  React.useEffect(() => {
    // Load animation assets
    loadAssets(pathname).then(() => {
      setAssetsLoaded(true)
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
        <p>One moment...</p>
      </div>

      <main
        id={
          scrollDirection === ScrollDirection.UP
            ? "page-content-container"
            : "page-content-container-visible"
        }
        // className={scrollDirection === ScrollDirection.UP ? 'page-content-animate' : 'page-content-animate.visible'}
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

              return className
            })()}
          >
            {props.children}
          </div>
        </div>
      </main>

      <div id="canvas"></div>
    </>
  )
}

export default ContentBlock
