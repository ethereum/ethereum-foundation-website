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
  screenSizeL,
} from "../utils/styles"

const SVG = styled(motion.svg)`
  position: fixed;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  height: 100%;
`

const Star = styled(motion.rect)`
  position: relative;
  z-index: 3;
`

const starHover = { scale: 1.8, transition: { duration: 0.4 } }

const MobileSVG = styled(motion.svg)`
  position: absolute;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  height: 100%;
`

const MedBreakpoint = styled.br`
  display: none;
  @media (max-width: ${screenSizeL}) {
    display: block;
  }
`

const NavContainer = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Nav = styled(motion.nav)`
  width: ${props => props.width};
  height: ${props => props.height};
`
const NavLinkContainer = styled(motion.div)`
  max-width: 160px;
  position: relative;
  z-index: 2;
`

const NavLink = styled(Link)`
  color: white;

  &:hover {
    color: white;
  }
`

const NavContainerVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.0,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
}

const linkVariants = {
  initial: { opacity: 0.0 },
  home: { opacity: 0.6, transition: { duration: 4 } },
  hover: { opacity: 1, transition: { duration: 0.5 } },
}

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

const mobileNavVariants = {
  home: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: -240,
    y: -450,
    opacity: 0,
    rotate: 160,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -300,
    y: -580,
    opacity: 0,
    rotate: -50,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -310,
    y: -70,
    opacity: 0,
    rotate: 70,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -45,
    y: -285,
    opacity: 0,
    rotate: 20,
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

// TODO is this needed?
const desktopNavVariants = {
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
    x: 350,
    y: -620,
    scale: 2,
    rotate: 160,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -850,
    y: 400,
    scale: 2,
    rotate: -130,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -1250,
    y: -975,
    scale: 2,
    rotate: 35,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -1340,
    y: -300,
    scale: 2,
    rotate: -23,
    transition: {
      duration: 1.5,
    },
  },
}

const Constellation = ({ path }) => {
  // TODO update to constellationState vs dimensions
  const [dimensions, setDimensions] = useState({})

  // TODO add listener for device orientation change
  // if change between landscape <--> portrait, refresh page
  useEffect(() => {
    // Set animation based on route
    let animation
    let linkAnimation = "initial"

    switch (path) {
      case "/about/":
      case "/about/board/":
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
        linkAnimation = "home"
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

    // iPad 11
    // iPad pro 2018: width: 834, height: 1120

    // iPad 12
    // iPad pro 2018 portrait: width: 1024, height: 1292
    // iPad pro 2018 landscape: width: 1366, height: 950
    const isIpadLandscape =
      clientWidth > screenSizeIntL &&
      clientWidth < screenSizeIntXL &&
      clientHeight < 1000

    // screen width between 760 & 1024
    const isIpadPortrait =
      clientWidth <= screenSizeIntL && clientWidth > screenSizeIntM

    // TODO safari browser issues w/ navigation

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
      viewBoxHeight = 500
    } else if (isIpadPortrait) {
      height = 700
      width = 700
      viewBoxMinX = -170
      viewBoxMinY = -200
      viewBoxWidth = 1000
      viewBoxHeight = 1000
    } else {
      // Desktop default
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
      linkAnimation,
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
    return <MobileConstellation animation={dimensions.animation} path={path} />
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

  let aboutPosition = { x: 270, y: 100 }
  let espPosition = { x: 680, y: 235 }
  let ethPosition = { x: 540, y: 495 }
  let philosophyPosition = { x: -25, y: 305 }

  if (dimensions.isDesktopXL) {
    constellationVariants = desktopXLVariants
    aboutPosition = { x: 260, y: 60 }
    espPosition = { x: 730, y: 225 }
    ethPosition = { x: 560, y: 535 }
    philosophyPosition = { x: -65, y: 315 }
  } else if (dimensions.isMobileLandscape) {
    aboutPosition = { x: -240, y: 170 }
    espPosition = { x: 535, y: 210 }
    ethPosition = { x: 440, y: 350 }
    philosophyPosition = { x: 40, y: 190 }
  } else if (dimensions.isIpadLandscape) {
    aboutPosition = { x: 240, y: 20 }
    espPosition = { x: 730, y: 190 }
    ethPosition = { x: 550, y: 530 }
    philosophyPosition = { x: -100, y: 290 }
  } else if (dimensions.isIpadPortrait) {
    aboutPosition = { x: 250, y: 120 }
    espPosition = { x: 650, y: 250 }
    ethPosition = { x: 510, y: 470 }
    philosophyPosition = { x: -50, y: 290 }
  }

  return (
    <>
      <AnimatePresence>
        {path === "/" && (
          <NavContainer
            variants={NavContainerVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Nav
              height="700px"
              width="700px"
              variants={desktopNavVariants}
              initial="home"
              animate={dimensions.animation}
            >
              <NavLinkContainer
                animate={dimensions.linkAnimation}
                variants={{
                  initial: Object.assign(
                    {},
                    linkVariants.initial,
                    aboutPosition
                  ),
                  home: Object.assign({}, linkVariants.home, aboutPosition),
                  hover: Object.assign({}, linkVariants.hover, aboutPosition),
                }}
                whileHover="hover"
                initial="initial"
              >
                <NavLink to={path === "/" ? "/about/" : "/"}>
                  Who we are
                </NavLink>
              </NavLinkContainer>
              <NavLinkContainer
                animate={dimensions.linkAnimation}
                variants={{
                  initial: Object.assign({}, linkVariants.initial, espPosition),
                  home: Object.assign({}, linkVariants.home, espPosition),
                  hover: Object.assign({}, linkVariants.hover, espPosition),
                }}
                whileHover="hover"
                initial="initial"
              >
                <NavLink to={path === "/" ? "/esp/" : "/"}>
                  Ecosystem <MedBreakpoint /> Support
                </NavLink>
              </NavLinkContainer>
              <NavLinkContainer
                animate={dimensions.linkAnimation}
                variants={{
                  initial: Object.assign({}, linkVariants.initial, ethPosition),
                  home: Object.assign({}, linkVariants.home, ethPosition),
                  hover: Object.assign({}, linkVariants.hover, ethPosition),
                }}
                whileHover="hover"
                initial="initial"
              >
                <NavLink to={path === "/" ? "/ethereum/" : "/"}>
                  What is Ethereum?
                </NavLink>
              </NavLinkContainer>
              <NavLinkContainer
                animate={dimensions.linkAnimation}
                variants={{
                  initial: Object.assign(
                    {},
                    linkVariants.initial,
                    philosophyPosition
                  ),
                  home: Object.assign(
                    {},
                    linkVariants.home,
                    philosophyPosition
                  ),
                  hover: Object.assign(
                    {},
                    linkVariants.hover,
                    philosophyPosition
                  ),
                }}
                whileHover="hover"
              >
                <NavLink to={path === "/" ? "/philosophy/" : "/"}>
                  Our Philosophy
                </NavLink>
              </NavLinkContainer>
            </Nav>
          </NavContainer>
        )}
      </AnimatePresence>
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

        <motion.g id="Group_48" data-name="Group 48">
          {/* about */}
          <motion.g transform="translate(148 -22)">
            <Link to={path === "/" ? "/about/" : "/"}>
              <Star
                whileHover={starHover}
                width="50"
                height="50"
                fill="url(#star)"
              />
            </Link>
          </motion.g>
          {/* esp */}
          <g transform="translate(455 100)">
            <Link to={path === "/" ? "/esp/" : "/"}>
              <Star
                whileHover={starHover}
                width="50"
                height="50"
                fill="url(#star)"
              />
            </Link>
          </g>
          {/* ethereum */}
          <g transform="translate(325 360)">
            <Link to={path === "/" ? "/ethereum/" : "/"}>
              <Star
                whileHover={starHover}
                width="50"
                height="50"
                fill="url(#star)"
              />
            </Link>
          </g>
          {/* philosophy */}
          <g transform="translate(-25 210)">
            <Link to={path === "/" ? "/philosophy/" : "/"}>
              <Star
                whileHover={starHover}
                width="50"
                height="50"
                fill="url(#star)"
              />
            </Link>
          </g>
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
    </>
  )
}

const MobileConstellation = ({ animation, path }) => (
  <>
    <NavContainer>
      <Nav
        height="100%"
        width="100%"
        variants={mobileNavVariants}
        initial="home"
        animate={animation}
      >
        <NavLinkContainer animate={{ x: 90, y: 90 }}>
          <NavLink to={path === "/" ? "/about/" : "/"}>
            <div>Who we are</div>
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer animate={{ x: 170, y: 170 }}>
          <NavLink to={path === "/" ? "/esp/" : "/"}>
            <div>Ecosystem Support</div>
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer animate={{ x: 160, y: 370 }}>
          <NavLink to={path === "/" ? "/ethereum/" : "/"}>
            <div>What is Ethereum?</div>
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer animate={{ x: 80, y: 460 }}>
          <NavLink to={path === "/" ? "/philosophy/" : "/"}>
            <div>Our Philosophy</div>
          </NavLink>
        </NavLinkContainer>
      </Nav>
    </NavContainer>

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
        <motion.g transform="translate(-58 -170)">
          {/* about */}
          <g transform="translate(45 22)">
            <Link to={path === "/" ? "/about/" : "/"}>
              <Star
                width="50"
                height="50"
                transform="translate(0 -0.094)"
                fill="url(#star)"
              />
            </Link>
          </g>
          {/* esp */}
          <g transform="translate(134 121.86)">
            <Link to={path === "/" ? "/esp/" : "/"}>
              <Star
                width="50"
                height="50"
                transform="translate(0 0.046)"
                fill="url(#star)"
              />
            </Link>
          </g>
          {/* ethereum */}
          <g transform="translate(39 353.34)">
            <Link to={path === "/" ? "/ethereum/" : "/"}>
              <Star
                width="50"
                height="50"
                transform="translate(89 -10.434)"
                fill="url(#star)"
              />
            </Link>
          </g>
          {/* philosophy */}
          <g transform="translate(42 459.813)">
            <Link to={path === "/" ? "/philosophy/" : "/"}>
              <Star
                width="50"
                height="50"
                transform="translate(0 0.094)"
                fill="url(#star)"
              />
            </Link>
          </g>
        </motion.g>
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
  </>
)

export default Constellation
