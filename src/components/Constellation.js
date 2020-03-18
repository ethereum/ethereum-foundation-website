import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

import star from "../images/star.png"
import {
  screenSizeIntS,
  screenSizeIntM,
  screenSizeIntL,
  screenSizeL,
  screenHeightMobileLandscape,
} from "../utils/styles"

const SVG = styled(motion.svg)`
  position: fixed;
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
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MobileNav = styled(motion.nav)`
  width: ${props => props.width};
  height: ${props => props.height};
`
const NavLinkContainer = styled(motion.div)``

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;

  &:hover {
    color: white;
  }
`

const AboutNavLink = styled(NavLink)`
  flex-direction: column;
  @media (max-height: ${screenHeightMobileLandscape}) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`

const StarImg = styled(motion.img)`
  height: 50px;
  width: 50px;
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

const starHover = { scale: 1.8, transition: { duration: 0.5 } }

const mobileVariants = {
  home: {
    x: -25,
    y: 230,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: -240,
    y: -450,
    scale: 2,
    rotate: 160,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -300,
    y: -580,
    scale: 2,
    rotate: -50,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -310,
    y: -70,
    scale: 2,
    rotate: 70,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -45,
    y: -285,
    scale: 2,
    rotate: 20,
    transition: {
      duration: 1.5,
    },
  },
}

// TODO is this needed?
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
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: 650,
    y: -520,
    scale: 2,
    rotate: 150,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -750,
    y: 800,
    scale: 2,
    rotate: -130,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -1250,
    y: -1175,
    scale: 2,
    rotate: 35,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -1750,
    y: -580,
    scale: 2,
    rotate: -23,
    transition: {
      duration: 1.5,
    },
  },
}

const desktopXLVariants = {
  home: {
    x: 0,
    y: 0,
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
    x: 700,
    y: 100,
    scale: 2,
    opacity: 1,
    rotate: 160,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -700,
    y: 800,
    scale: 2,
    opacity: 1,
    rotate: -130,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -900,
    y: -1575,
    scale: 2,
    opacity: 1,
    rotate: 35,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -1650,
    y: -920,
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
    const isDesktopXL = clientHeight > 1000 ? true : false
    const isIpad = clientWidth < screenSizeIntL && clientWidth > screenSizeIntM
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
    } else if (isIpad) {
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
      isIpad,
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

  let aboutPosition = { x: -30, y: 90 }
  let espPosition = { x: 630, y: 175 }
  let ethPosition = { x: 490, y: 415 }
  let philosophyPosition = { x: -30, y: 200 }

  if (dimensions.isDesktopXL) {
    constellationVariants = desktopXLVariants
    aboutPosition = { x: -35, y: 60 }
    espPosition = { x: 685, y: 165 }
    ethPosition = { x: 520, y: 450 }
    philosophyPosition = { x: -65, y: 205 }
  } else if (dimensions.isMobileLandscape) {
    aboutPosition = { x: -240, y: 170 }
    espPosition = { x: 535, y: 210 }
    ethPosition = { x: 440, y: 350 }
    philosophyPosition = { x: 40, y: 190 }
  } else if (dimensions.isIpad) {
    aboutPosition = { x: -40, y: 155 }
    espPosition = { x: 520, y: 200 }
    ethPosition = { x: 415, y: 345 }
    philosophyPosition = { x: 15, y: 180 }
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
            <MobileNav
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
                <AboutNavLink to={path === "/" ? "/about/" : "/"}>
                  <div>Who we are</div>
                  <StarImg whileHover={starHover} src={star} />
                </AboutNavLink>
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
                  <StarImg whileHover={starHover} src={star} />
                  <div>
                    Ecosytem <MedBreakpoint /> Support
                  </div>
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
                  <StarImg whileHover={starHover} src={star} />
                  <div>What is Ethereum?</div>
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
                  <div>Our Philosophy</div>
                  <StarImg whileHover={starHover} src={star} />
                </NavLink>
              </NavLinkContainer>
            </MobileNav>
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
        {/* TODO remove this animation? */}
        <motion.g
          id="Group_48"
          data-name="Group 48"
          transform="translate(-0.004 -0.004)"
          animate={{ x: 100, y: 110 }}
        >
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
      <MobileNav
        height="100%"
        width="100%"
        variants={mobileNavVariants}
        initial="home"
        animate={animation}
      >
        <NavLinkContainer animate={{ x: 20, y: 105 }}>
          <NavLink to={path === "/" ? "/about/" : "/"}>
            <StarImg src={star} />
            <div>Who we are</div>
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer animate={{ x: 135, y: 180 }}>
          <NavLink to={path === "/" ? "/esp/" : "/"}>
            <StarImg src={star} />
            <div>Ecosytem Support</div>
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer animate={{ x: 125, y: 400 }}>
          <NavLink to={path === "/" ? "/ethereum/" : "/"}>
            <StarImg src={star} />
            <div>What is Ethereum?</div>
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer animate={{ x: 18, y: 505 }}>
          <NavLink to={path === "/" ? "/philosophy/" : "/"}>
            <StarImg src={star} />
            <div>Our Philosophy</div>
          </NavLink>
        </NavLinkContainer>
      </MobileNav>
    </NavContainer>

    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="700"
      viewBox="0 0 200 650"
    >
      <motion.g
        transform="translate(16.558 126.411)"
        variants={mobileVariants}
        initial="home"
        animate={animation}
      >
        <path
          d="M160.255-25.763,114.328,82.514Z"
          transform="translate(-55.704 -0.98)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M2.241,324.03l89.9-120.594Z"
          transform="translate(5.677 -10.98)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M214.424,73.827,122.57-25.5Z"
          transform="translate(-109.873 -100.57)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <path
          d="M122.57,108.9,146.554-25.5Z"
          transform="translate(-138.636 -100.57)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M122.57-25.5l74.69,73.207Z"
          transform="translate(-138.636 33.829)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M141.84,67.114,122.162-72.337Z"
          transform="translate(-133.636 248.553)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M122.57,9.569,243.187-25.5Z"
          transform="translate(-138.636 -1.242)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
        <path
          d="M122.57-25.5,231.453-10.118Z"
          transform="translate(-133.636 202.575)"
          fill="none"
          stroke="#fff"
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
          strokeMiterlimit="10"
          strokeWidth="1"
          opacity="0.407"
        />
      </motion.g>
    </SVG>
  </>
)

export default Constellation
