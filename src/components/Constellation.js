import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import star from "../images/star.png"

const icon = {
  hidden: {
    pathLength: 0, // TODO remove this...
  },
  visible: {
    pathLength: 1,
  },
}

/*
  TODOs
  - Add link text next to stars. Opacity 0 -> 1 w/ transition on hover
  - Mobile treatment?
  - Page transitions? Spin link to the right & zoom in???
*/

const SVG = styled(motion.svg)`
  position: absolute;
`

const MotionText = styled(motion.text)``

const NavLink = styled(Link)`
  /* TODO should use Framer for this */
  & > text {
    opacity: 0;
    transition-duration: 2s;
  }
  &:hover {
    & > text {
      opacity: 1;
    }
  }
`

const Star = styled(motion.image)``

const starHover = { scale: 1.8, transition: { duration: 1 } }

const SVGContainer = styled(motion.div)``

const constellationVariant = {
  home: {
    x: "20vw",
    y: "20vh",
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

const textVariant = {
  normal: {
    opacity: 1.0,
  },
  hidden: {
    opacity: 0.0,
    transition: {
      duration: 0.5,
    },
  },
}

const Constellation = ({ path }) => {
  let animation
  switch (path) {
    case "/about/":
    case "/about/board/": // TODO fix
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

  console.log({ path, animation })

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
        {/* TODO: class with images on these points? or style stars? */}
        {/* TODO scale up stars on hover */}
        {/* TODO display page link text on hover */}
        <NavLink to="/about/">
          {/* <foreignObject x="50" y="20" height="50px" width="150px">
              <LinkText>Who we are</LinkText>
            </foreignObject> */}
          <MotionText
            variants={textVariant}
            initial="normal"
            animate={animation === "home" ? "normal" : "hidden"}
            x="50"
            y="20"
            fill="white"
          >
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
          {/* <circle cx="174" cy="0" r="10" fill="white" /> */}
        </NavLink>
        <NavLink to="/esp/">
          <MotionText
            variants={textVariant}
            initial="normal"
            animate={animation === "home" ? "normal" : "hidden"}
            x="350"
            y="100"
            fill="white"
          >
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
          {/* <circle cx="480" cy="125" r="10" fill="white" /> */}
        </NavLink>
        <NavLink to="/ethereum/">
          <MotionText
            variants={textVariant}
            initial="normal"
            animate={animation === "home" ? "normal" : "hidden"}
            x="370"
            y="380"
            fill="white"
          >
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
          {/* <circle cx="352" cy="386" r="10" fill="white" /> */}
        </NavLink>
        <NavLink to="/philosophy/">
          <MotionText
            variants={textVariant}
            initial="normal"
            animate={animation === "home" ? "normal" : "hidden"}
            x="0"
            y="270"
            fill="white"
          >
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
          {/* <circle cx="0" cy="235" r="10" fill="white" /> */}
        </NavLink>
        <g
          id="Group_48"
          data-name="Group 48"
          transform="translate(-0.004 -0.004)"
        >
          {/* 1 path */}
          {/* <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            id="Path_55"
            data-name="Path 55"
            d="M 216 10 V 400 L 525 125 L 216 10 L 78 235 L 351 386 Z"
            transform="translate(-43.104)"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="1"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
            }}
          /> */}
          {/* 2 path (original)  */}
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
          {/* 2 path (original) - no animation */}
          {/* <path
            id="Path_55"
            data-name="Path 55"
            d="M525,125,216.09.98l-.04,308Z"
            transform="translate(-43.104)"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="Path_56"
            data-name="Path 56"
            d="M351.678,386,.78,234.776,172.986.98Z"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="1"
          /> */}
        </g>
      </SVG>
    </SVGContainer>
  )
}

export default Constellation
