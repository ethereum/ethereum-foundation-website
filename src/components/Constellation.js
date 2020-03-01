import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import star from "../images/star.png"

const pathVariantsHome = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
}

const pathVariants = {
  hidden: {
    pathLength: 1,
  },
  visible: {
    pathLength: 1,
  },
}

const SVG = styled(motion.svg)`
  position: absolute;
  width: 100%;
  height: 100%;
`

const NavLink = styled(Link)`
  & > text {
    opacity: 0;
    transition-duration: 2s;
  }
  &:hover {
    & > text {
      opacity: ${props => (props.path === "/" ? 1 : 0)};
    }
  }
`

const MotionText = styled(motion.text)`
  font-size: 1rem;
`

const Star = styled(motion.image)`
  height: 50px;
  width: 50px;
`

const starHover = { scale: 1.8, transition: { duration: 1 } }

// const SVGContainer = styled(motion.div)``

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
    x: -600,
    y: -200,
  },
  esp: {
    x: -750,
    y: -500,
  },
  ethereum: {
    x: -740,
    y: -540,
  },
}

const constellationVariant = {
  home: {
    // originX: "50%",
    // originY: "50%",
    // TODO how to align center without moving entire SVG?
    // position g??
    x: 0, // 100, // TODO figure out how to adjust based on device
    y: 0, // 110, // TODO figure out how to adjust based on device
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: 500,
    y: -500,
    scale: 2.2,
    rotate: 170,
    transition: {
      duration: 1.5,
    },
  },
  philosophy: {
    x: -600,
    y: -200,
    scale: 2.2,
    rotate: -130,
    transition: {
      duration: 1.5,
    },
  },
  esp: {
    x: -750,
    y: -500,
    scale: 2.2,
    rotate: 30,
    transition: {
      duration: 1.5,
    },
  },
  ethereum: {
    x: -740,
    y: -540,
    scale: 2.2,
    rotate: -23,
    transition: {
      duration: 1.5,
    },
  },
}

const Constellation = ({ path }) => {
  let animation
  let pathAnimation = pathVariants

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
      pathAnimation = pathVariantsHome
  }

  const clientHeight = document.documentElement.clientHeight
  const clientWidth = document.documentElement.clientWidth

  const gPositionX = gVariant[animation].x // 100
  const gPositionY = gVariant[animation].y // 110

  // TODO adjust size based on device/viewpo
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      height={clientHeight}
      width={clientWidth}
      viewBox="-50 -50 700 700"
      variants={constellationVariant}
      initial="home"
      animate={animation}
    >
      <NavLink path={path} to="/about/">
        <MotionText x={gPositionX + 120} y={gPositionY - 20} fill="white">
          Who we are
        </MotionText>
        <Star
          whileHover={starHover}
          href={star}
          x={gPositionX + 148}
          y={gPositionY - 23}
        />
      </NavLink>
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
      <motion.g
        id="Group_48"
        data-name="Group 48"
        transform="translate(-0.004 -0.004)"
        variants={gVariant}
        initial="home"
        animate="home"
      >
        <motion.path
          variants={pathAnimation}
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
          variants={pathAnimation}
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
