import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import star from "../images/star.png"

const SVG = styled(motion.svg)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`

const NavLinkContainer = styled(motion.g)``
const NavLink = styled(Link)``

const linkVariants = {
  initial: { opacity: 0.0 },
  home: { opacity: 0.6, transition: { duration: 4 } },
}

const MotionText = styled(motion.text)`
  font-size: 1rem;
`

const Star = styled(motion.image)`
  height: 50px;
  width: 50px;
`

const starHover = { scale: 1.8, transition: { duration: 0.6 } }

// const SVGContainer = styled(motion.div)``

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
    height: 700,
    width: 700,
    viewBoxMinX: -50,
    viewBoxMinY: -50,
    viewBoxWidth: 700,
    viewBoxHeight: 700,
  })

  useEffect(() => {
    // TODO adjust size based on viewport
    const clientHeight = document.documentElement.clientHeight
    if (clientHeight > 1000) {
      setDimensions({
        height: 1000,
        width: 1000,
        viewBoxMinX: -200,
        viewBoxMinY: -200,
        viewBoxWidth: 1000,
        viewBoxHeight: 1000,
      })
    } else {
      setDimensions({
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

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      height={dimensions.height}
      width={dimensions.width}
      viewBox={`${dimensions.viewBoxMinX} ${dimensions.viewBoxMinY} ${dimensions.height} ${dimensions.width}`}
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
        <Link path={path} to="/about/">
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
        <NavLink path={path} to="/esp/">
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
        <NavLink path={path} to="/ethereum/">
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
        <NavLink path={path} to="/philosophy/">
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
          stroke-miterlimit="10"
          stroke-width="1"
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
          stroke-miterlimit="10"
          stroke-width="1"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
          }}
        />
      </motion.g>
    </SVG>
  )
}

export default Constellation
