import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import star from "../images/star.png"

const icon = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
}

const SVG = styled(motion.svg)`
  position: absolute;
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

const Star = styled(motion.image)``

const starHover = { scale: 1.8, transition: { duration: 1 } }

const SVGContainer = styled(motion.div)``

const constellationVariant = {
  home: {
    x: "25vw", // TODO figure out how to adjust based on device
    y: "15%", // TODO figure out how to adjust based on device
    scale: 1.0,
    rotate: 0,
    transition: {
      duration: 1.5,
    },
  },
  about: {
    x: -260,
    y: -300,
    scale: 2.2,
    rotate: 150,
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
  }

  return (
    // TODO adjust size based on device/viewport
    <SVGContainer>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="700"
        viewBox="-50 -50 600 600"
        variants={constellationVariant}
        initial="home"
        animate={animation}
      >
        <NavLink path={path} to="/about/">
          <MotionText x="50" y="20" fill="white">
            Who we are
          </MotionText>
          <Star
            whileHover={starHover}
            href={star}
            x="150"
            y="-20"
            height="50px"
            width="50px"
          />
        </NavLink>
        <NavLink path={path} to="/esp/">
          <MotionText x="350" y="100" fill="white">
            Ecosytem Support
          </MotionText>
          <Star
            whileHover={starHover}
            href={star}
            x="450"
            y="100"
            height="50px"
            width="50px"
          />
        </NavLink>
        <NavLink path={path} to="/ethereum/">
          <MotionText x="370" y="380" fill="white">
            What is Ethereum?
          </MotionText>
          <Star
            whileHover={starHover}
            href={star}
            x="330"
            y="360"
            height="50px"
            width="50px"
          />
        </NavLink>
        <NavLink path={path} to="/philosophy/">
          <MotionText x="0" y="270" fill="white">
            Our Philosophy
          </MotionText>
          <Star
            whileHover={starHover}
            href={star}
            x="-20"
            y="210"
            height="50px"
            width="50px"
          />
        </NavLink>
        <g
          id="Group_48"
          data-name="Group 48"
          transform="translate(-0.004 -0.004)"
        >
          <motion.path
            variants={icon}
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
            variants={icon}
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
        </g>
      </SVG>
    </SVGContainer>
  )
}

export default Constellation
