import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

import star from "../images/star.png"
import {
  screenSizeIntS,
  screenSizeIntM,
  screenSizeIntL,
  screenSizeIntXL,
} from "../utils/styles"

const SVG = styled(motion.svg)`
  position: fixed;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  height: 100%;
`

const MobileSVG = styled(motion.svg)`
  position: absolute;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  height: 100%;
`

// TODO still needed?
// const MedBreakpoint = styled.br`
//   display: none;
//   @media (max-width: ${screenSizeL}) {
//     display: block;
//   }
// `

// CONSTELLATION VARIANTS

const mobileVariants = {
  home: {
    x: -45,
    y: 230,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: -270,
    y: -450,
    scale: 2,
    rotate: 160,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -300,
    y: -600,
    scale: 2,
    rotate: -50,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -310,
    y: -60,
    scale: 2,
    rotate: 70,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -40,
    y: -280,
    scale: 2,
    rotate: 20,
    transition: {
      duration: 1.5,
    },
  },
}

const mobileLandscapeVariants = {
  home: {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: -400,
    y: -850,
    scale: 2,
    rotate: 150,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -20,
    y: -500,
    scale: 2,
    rotate: -130,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -800,
    y: -640,
    scale: 2,
    rotate: 75,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -500,
    y: 0,
    scale: 2,
    rotate: -23,
    transition: {
      duration: 1.5,
    },
  },
}

const desktopVariants = {
  home: {
    x: 110,
    y: 120,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: 350,
    y: -650,
    scale: 2,
    rotate: 150,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -50,
    y: 300,
    scale: 2,
    rotate: -130,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -1180,
    y: -840,
    scale: 2,
    rotate: 35,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -1250,
    y: -180,
    scale: 2,
    rotate: -23,
    transition: {
      duration: 1.5,
    },
  },
}

const desktopXLVariants = {
  home: {
    x: 128,
    y: 140,
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  initial: {
    x: -2000,
    y: -2000,
    scale: 2,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: 350,
    y: -170,
    scale: 2,
    opacity: 1,
    rotate: 150,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -600,
    y: 440,
    scale: 2,
    opacity: 1,
    rotate: -130,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -800,
    y: -1170,
    scale: 2,
    opacity: 1,
    rotate: 35,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -1330,
    y: -770,
    scale: 2,
    opacity: 1,
    rotate: -23,
    transition: {
      duration: 1.5,
    },
  },
}

// NAV LINKS

const Star = styled(motion.rect)`
  position: relative;
  z-index: 3;
  cursor: pointer; /* for Safari */
`

const NavStarLinkContainer = styled(motion.g)`
  cursor: pointer; /* for Safari */
`

const NavText = styled(motion.text)`
  fill: white;
  cursor: pointer; /* for Safari */
`

const starVariants = {
  initial: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  active: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.6 } },
  hover: { opacity: 1, scale: 1.6, transition: { duration: 0.6 } },
}

const linkVariants = {
  initial: { opacity: 0 },
  active: { opacity: 0.7, transition: { delay: 1, duration: 2 } },
  hover: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { durantion: 2 } },
}
const linkVariantsMobile = {
  initial: { opacity: 0 },
  active: { opacity: 1, transition: { delay: 1, duration: 2 } },
  hover: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { durantion: 2 } },
}

const NavStarLink = ({
  shouldRemoveHoverEffects,
  path,
  linkRoute,
  linkText,
  positions,
}) => {
  return (
    <NavStarLinkContainer
      variants={shouldRemoveHoverEffects ? linkVariantsMobile : linkVariants}
      initial="initial"
      animate="active"
      whileHover="hover"
    >
      <Link to={path === "/" ? linkRoute : "/"}>
        <AnimatePresence>
          {path === "/" && (
            <NavText
              x={positions.textX}
              y={positions.textY}
              variants={
                shouldRemoveHoverEffects ? linkVariantsMobile : linkVariants
              }
              initial="initial"
              animate="active"
              whileHover="hover"
              exit="exit"
            >
              {linkText}
            </NavText>
          )}
        </AnimatePresence>
        <Star
          x={positions.starX}
          y={positions.starY}
          variants={starVariants}
          whileHover="hover"
          initial="initial"
          width="50"
          height="50"
          fill="url(#star)"
        />
      </Link>
    </NavStarLinkContainer>
  )
}

const Constellation = ({ path }) => {
  // TODO update to constellationState vs dimensions
  const [dimensions, setDimensions] = useState({})

  useEffect(() => {
    // Set animation based on route
    let animation

    switch (path) {
      case "/about/":
      case "/about/board/":
      case "/cookie-policy/":
        animation = "about"
        break
      case "/philosophy/":
        animation = "philosophy"
        break
      case "/esp/":
        animation = "esp"
        break
      case "/ethereum/":
        animation = "ethereum"
        break
      default:
        animation = "home"
    }

    // If previous route was homepage, set to route animation
    // If previous route was subpage, keep animation the same
    const previousPath = window.previousPath
    const isHomePreviousPath = previousPath === "/" || path === "/"
    if (!isHomePreviousPath && dimensions.animation !== undefined) {
      animation = dimensions.animation
    }

    // Variables to adjust constellation size based on device
    const clientHeight = document.documentElement.clientHeight
    const clientWidth = document.documentElement.clientWidth
    const isDesktop = clientWidth > screenSizeIntS ? true : false
    const isMobileLandscape = clientHeight < 400 ? true : false
    const isDesktopXL =
      clientHeight > 1000 && clientWidth > screenSizeIntL ? true : false

    const isIpadLandscape =
      clientWidth >= screenSizeIntL &&
      clientWidth < screenSizeIntXL &&
      clientHeight < 800

    const isIpadPortrait =
      clientWidth <= screenSizeIntL &&
      clientWidth > screenSizeIntM &&
      clientHeight >= 800

    let height
    let width
    let viewBoxMinX
    let viewBoxMinY
    let viewBoxWidth
    let viewBoxHeight

    if (isDesktopXL) {
      height = 1000
      width = 1000
      viewBoxMinX = -200
      viewBoxMinY = -200
      viewBoxWidth = 1000
      viewBoxHeight = 1000
    } else if (isMobileLandscape) {
      height = 700
      width = 700
      viewBoxMinX = -50
      viewBoxMinY = 70
      viewBoxWidth = 700
      viewBoxHeight = 650
    } else if (isIpadPortrait) {
      height = 700
      width = 700
      viewBoxMinX = -150
      viewBoxMinY = -150
      viewBoxWidth = 1000
      viewBoxHeight = 1000
    } else {
      // Desktop or iPad landscape
      height = 700
      width = 700
      viewBoxMinX = -50
      viewBoxMinY = -50
      viewBoxWidth = 700
      viewBoxHeight = 700
    }

    setDimensions({
      isDesktop,
      isDesktopXL,
      isIpadPortrait,
      isIpadLandscape,
      isMobileLandscape,
      previousPath,
      isHomePreviousPath,
      animation,
      height,
      width,
      viewBoxMinX,
      viewBoxMinY,
      viewBoxWidth,
      viewBoxHeight,
    })
  }, [path, dimensions.animation])

  if (dimensions.isDesktop) {
    return <DesktopConstellation path={path} dimensions={dimensions} />
  } else {
    return <MobileConstellation path={path} animation={dimensions.animation} />
  }
}

const DesktopConstellation = ({ path, dimensions }) => {
  const pathVariants = {
    hidden: {
      pathLength: dimensions.animation === "home" ? 0 : 1,
    },
    visible: {
      pathLength: 1,
    },
  }

  let constellationVariants = desktopVariants
  const constX = constellationVariants.home.x
  const constY = constellationVariants.home.y
  const shouldRemoveHoverEffects =
    dimensions.isMobileLandscape ||
    dimensions.isIpadLandscape ||
    dimensions.isIpadPortrait

  let aboutPosition = {
    textX: constX + 18,
    textY: constY - 142,
    starX: constX + 38,
    starY: constY - 142,
  }
  let espPosition = {
    textX: constX + 390,
    textY: constY + 10,
    starX: constX + 345,
    starY: constY - 20,
  }
  let ethPosition = {
    textX: constX + 260,
    textY: constY + 270,
    starX: constX + 215,
    starY: constY + 240,
  }
  let philosophyPosition = {
    textX: constX - 250,
    textY: constY + 120,
    starX: constX - 135,
    starY: constY + 90,
  }

  if (dimensions.isDesktopXL) {
    constellationVariants = desktopXLVariants
  } else if (dimensions.isMobileLandscape) {
    constellationVariants = mobileLandscapeVariants
  }

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      height={dimensions.height}
      width={dimensions.width}
      viewBox={`${dimensions.viewBoxMinX} ${dimensions.viewBoxMinY} ${dimensions.viewBoxWidth} ${dimensions.viewBoxHeight}`}
      variants={constellationVariants}
      initial={dimensions.isHomePreviousPath ? "home" : "initial"}
      animate={dimensions.animation}
      overflow="hidden"
    >
      <defs>
        <pattern
          id="star"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 240 240"
        >
          <motion.image width="240" height="240" xlinkHref={star} />
        </pattern>
      </defs>

      <motion.g
        transform={
          dimensions.isMobileLandscape ? "translate(40 140)" : "translate(0)"
        }
      >
        <NavStarLink
          shouldRemoveHoverEffects={shouldRemoveHoverEffects}
          path={path}
          linkRoute="/about/"
          linkText="Who we are"
          positions={aboutPosition}
        />
        <NavStarLink
          shouldRemoveHoverEffects={shouldRemoveHoverEffects}
          path={path}
          linkRoute="/esp/"
          linkText="Ecosystem support"
          positions={espPosition}
        />
        <NavStarLink
          shouldRemoveHoverEffects={shouldRemoveHoverEffects}
          path={path}
          linkRoute="/ethereum/"
          linkText="What is Ethereum?"
          positions={ethPosition}
        />
        <NavStarLink
          shouldRemoveHoverEffects={shouldRemoveHoverEffects}
          path={path}
          linkRoute="/philosophy/"
          linkText="Our philosophy"
          positions={philosophyPosition}
        />

        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          id="Path_55"
          data-name="Path 55"
          d="M525,125,216.09.98l-.04,308Z"
          transform="translate(-43.104)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
          }}
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          id="Path_56"
          data-name="Path 56"
          d="M351.678,386,.78,234.776,172.986.98Z"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
          }}
        />
      </motion.g>
    </SVG>
  )
}

// TODO fix page transition animation
const MobileConstellation = ({ animation, path }) => {
  const constX = mobileVariants.home.x
  const constY = mobileVariants.home.y

  let aboutPosition = {
    textX: constX + 80,
    textY: constY - 360,
    starX: constX + 30,
    starY: constY - 380,
  }
  let espPosition = {
    textX: constX + 165,
    textY: constY - 250,
    starX: constX + 125,
    starY: constY - 280,
  }
  let ethPosition = {
    textX: constX + 160,
    textY: constY - 30,
    starX: constX + 115,
    starY: constY - 60,
  }
  let philosophyPosition = {
    textX: constX + 70,
    textY: constY + 100,
    starX: constX + 30,
    starY: constY + 60,
  }
  return (
    <MobileSVG
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="700"
      viewBox="0 0 200 650"
    >
      <defs>
        <pattern
          id="star"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 240 240"
        >
          <motion.image width="240" height="240" xlinkHref={star} />
        </pattern>
      </defs>

      <motion.g
        transform="translate(16.558 126.411)"
        variants={mobileVariants}
        initial="home"
        animate={animation}
      >
        <NavStarLink
          shouldRemoveHoverEffects={true}
          path={path}
          linkRoute="/about/"
          linkText="Who we are"
          positions={aboutPosition}
        />
        <NavStarLink
          shouldRemoveHoverEffects={true}
          path={path}
          linkRoute="/esp/"
          linkText="Ecosystem support"
          positions={espPosition}
        />
        <NavStarLink
          shouldRemoveHoverEffects={true}
          path={path}
          linkRoute="/ethereum/"
          linkText="What is Ethereum?"
          positions={ethPosition}
        />
        <NavStarLink
          shouldRemoveHoverEffects={true}
          path={path}
          linkRoute="/philosophy/"
          linkText="Our philosophy"
          positions={philosophyPosition}
        />

        <path
          d="M160.255-25.763,114.328,82.514Z"
          transform="translate(-55.704 -0.98)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M2.505,326.656,92.14,203.436Z"
          transform="translate(5.677 -10.98)"
          fill="none"
          stroke="#fff"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M214.424,73.827l-93.5-99.476Z"
          transform="translate(-109.873 -100.57)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M122.57,108.9,149.664-25.665Z"
          transform="translate(-138.636 -100.57)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M122.57-25.5l74.69,73.207Z"
          transform="translate(-138.636 33.829)"
          fill="none"
          stroke="#fff"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M141.84,67.114,122.6-71.478Z"
          transform="translate(-133.636 248.553)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M122.57,9.569,243.187-25.5Z"
          transform="translate(-138.636 -1.242)"
          fill="none"
          stroke="#fff"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M122.576-25.5,231.453-10.118Z"
          transform="translate(-133.636 202.575)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M153.52,85.159,114.328-25.763Z"
          transform="translate(-55.704 107.297)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M122.57,70.038,192.261-25.5Z"
          transform="translate(-133.636 107.036)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
      </motion.g>
    </MobileSVG>
  )
}

export default Constellation
