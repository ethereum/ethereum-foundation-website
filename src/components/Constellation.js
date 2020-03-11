import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import star from "../images/star.png"
import { screenSizeIntS } from "../utils/styles"

const mobileVariant = {
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
    y: -440,
    scale: 2,
    rotate: 160,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -280,
    y: -390,
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
    x: -30,
    y: -270,
    scale: 2,
    rotate: 20,
    transition: {
      duration: 1.5,
    },
  },
}

const SVG = styled(motion.svg)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`

// TODO needed?
const MobileSVG = styled(motion.svg)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`

const MobileG = styled(motion.g)``

const NavLinkContainer = styled(motion.g)``
const NavLink = styled(Link)``

const mobileLinkVariants = {
  initial: { opacity: 0.0 },
  home: { opacity: 1.0, transition: { duration: 4 } },
}

const linkVariants = {
  initial: { opacity: 0.0 },
  home: { opacity: 0.6, transition: { duration: 4 } },
}

const MotionText = styled(motion.text)`
  font-size: 1rem;
  font-weight: 500;
`

const Star = styled(motion.image)`
  height: 50px;
  width: 50px;
`

const starHover = { scale: 1.8, transition: { duration: 0.6 } }

// TODO just change to
// animate={{ x: 100, y: 110 }}
const gVariant = {
  home: {
    x: 100,
    y: 110,
  },
  about: {
    x: 100,
    y: 110,
  },
  philosophy: {
    x: 100,
    y: 110,
  },
  esp: {
    x: 100,
    y: 110,
  },
  ethereum: {
    x: 100,
    y: 110,
  },
}

const constellationVariant = {
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

// TODO adjust for subpage --> subpage navigation
// Can we inspect previous route (i.g. if it wasn't the homepage, add opacity 0 to initial animation)
const Constellation = ({ path }) => {
  const [dimensions, setDimensions] = useState({
    isDesktop: true,
    height: 700,
    width: 700,
    viewBoxMinX: -50,
    viewBoxMinY: -50,
    viewBoxWidth: 700,
    viewBoxHeight: 700,
  })

  useEffect(() => {
    const clientHeight = document.documentElement.clientHeight
    const clientWidth = document.documentElement.clientWidth
    const isDesktop = clientWidth > screenSizeIntS ? true : false

    if (clientHeight > 1000) {
      setDimensions({
        isDesktop,
        height: 1000,
        width: 1000,
        viewBoxMinX: -200,
        viewBoxMinY: -200,
        viewBoxWidth: 1000,
        viewBoxHeight: 1000,
      })
    } else if (clientHeight < 400) {
      // Mobile landscape
      setDimensions({
        isDesktop,
        height: 700,
        width: 700,
        viewBoxMinX: -50,
        viewBoxMinY: 50,
        viewBoxWidth: 700,
        viewBoxHeight: 500,
      })
    } else {
      setDimensions({
        isDesktop,
        height: 700,
        width: 700,
        viewBoxMinX: -50,
        viewBoxMinY: -50,
        viewBoxWidth: 700,
        viewBoxHeight: 700,
      })
    }
  }, [])

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

  const pathVariants = {
    hidden: {
      pathLength: animation === "home" ? 0 : 1,
    },
    visible: {
      pathLength: 1,
    },
  }

  const gPositionX = gVariant[animation].x // 100
  const gPositionY = gVariant[animation].y // 110

  const linkHover =
    path === "/"
      ? { opacity: 1, transition: { duration: 0.4 } }
      : { opacity: 0 }

  if (dimensions.isDesktop) {
    return (
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        height={dimensions.height}
        width={dimensions.width}
        viewBox={`${dimensions.viewBoxMinX} ${dimensions.viewBoxMinY} ${dimensions.viewBoxWidth} ${dimensions.viewBoxHeight}`}
        variants={constellationVariant}
        initial="home"
        animate={animation}
      >
        <NavLinkContainer
          variants={linkVariants}
          initial="initial"
          animate={linkAnimation}
          whileHover={linkHover}
        >
          <Link path={path} to={path === "/" ? "/about/" : "/"}>
            <MotionText x={gPositionX + 120} y={gPositionY - 20} fill="white">
              Who we are
            </MotionText>
            <Star
              whileHover={starHover}
              href={star}
              x={gPositionX + 148}
              y={gPositionY - 23}
            />
          </Link>
        </NavLinkContainer>
        <NavLinkContainer
          variants={linkVariants}
          initial="initial"
          animate={linkAnimation}
          whileHover={linkHover}
        >
          <NavLink path={path} to={path === "/" ? "/esp/" : "/"}>
            <MotionText x={gPositionX + 500} y={gPositionY + 130} fill="white">
              Ecosytem Support
            </MotionText>
            <Star
              whileHover={starHover}
              href={star}
              x={gPositionX + 455}
              y={gPositionY + 100}
            />
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer
          variants={linkVariants}
          initial="initial"
          animate={linkAnimation}
          whileHover={linkHover}
        >
          <NavLink path={path} to={path === "/" ? "/ethereum/" : "/"}>
            <MotionText x={gPositionX + 375} y={gPositionY + 390} fill="white">
              What is Ethereum?
            </MotionText>
            <Star
              whileHover={starHover}
              href={star}
              x={gPositionX + 325}
              y={gPositionY + 360}
            />
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer
          variants={linkVariants}
          initial="initial"
          animate={linkAnimation}
          whileHover={linkHover}
        >
          <NavLink path={path} to={path === "/" ? "/philosophy/" : "/"}>
            <MotionText x={gPositionX - 160} y={gPositionY + 240} fill="white">
              Our Philosophy
            </MotionText>
            <Star
              whileHover={starHover}
              href={star}
              x={gPositionX - 20}
              y={gPositionY + 210}
            />
          </NavLink>
        </NavLinkContainer>
        <motion.g
          id="Group_48"
          data-name="Group 48"
          transform="translate(-0.004 -0.004)"
          variants={gVariant}
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
    )
  } else {
    const gPositionX = mobileVariant[animation].x
    const gPositionY = mobileVariant[animation].y

    return (
      <MobileSVG
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="700"
        viewBox="0 0 200 650"
      >
        <NavLinkContainer
          variants={mobileLinkVariants}
          initial="initial"
          animate={linkAnimation}
        >
          <Link path={path} to={path === "/" ? "/about/" : "/"}>
            <MotionText x={gPositionX + 40} y={gPositionY - 120} fill="white">
              Who we are
            </MotionText>
            <Star href={star} x={gPositionX - 15} y={gPositionY - 150} />
          </Link>
        </NavLinkContainer>
        <NavLinkContainer
          variants={mobileLinkVariants}
          initial="initial"
          animate={linkAnimation}
        >
          <Link path={path} to={path === "/" ? "/esp/" : "/"}>
            <MotionText x={gPositionX + 120} y={gPositionY - 20} fill="white">
              Ecosytem Support
            </MotionText>
            <Star href={star} x={gPositionX + 80} y={gPositionY - 50} />
          </Link>
        </NavLinkContainer>
        <NavLinkContainer
          variants={mobileLinkVariants}
          initial="initial"
          animate={linkAnimation}
        >
          <Link path={path} to={path === "/" ? "/ethereum/" : "/"}>
            <MotionText x={gPositionX + 110} y={gPositionY + 200} fill="white">
              What is Ethereum?
            </MotionText>
            <Star href={star} x={gPositionX + 70} y={gPositionY + 165} />
          </Link>
        </NavLinkContainer>
        <NavLinkContainer
          variants={mobileLinkVariants}
          initial="initial"
          animate={linkAnimation}
        >
          <Link path={path} to={path === "/" ? "/philosophy/" : "/"}>
            <MotionText x={gPositionX + 30} y={gPositionY + 310} fill="white">
              Our Philosophy
            </MotionText>
            <Star href={star} x={gPositionX - 20} y={gPositionY + 285} />
          </Link>
        </NavLinkContainer>
        <MobileG
          transform="translate(16.558 126.411)"
          variants={mobileVariant}
          initial="home"
          animate={animation}
        >
          <path
            d="M160.255-25.763,114.328,93.124Z"
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
            d="M150.093,74.549,114.328-25.763Z"
            transform="translate(-52.276 117.907)"
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
        </MobileG>
      </MobileSVG>
    )
  }
}

export default Constellation
