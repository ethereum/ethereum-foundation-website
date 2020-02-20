import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import styled from "styled-components"

import { Location } from "@reach/router"

import star from "../images/star.png"

const icon = {
  hidden: {
    pathLength: 1, // TODO remove this...
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

const SVG = styled(motion.svg)``

const MotionText = styled(motion.text)``

const LinkText = styled.span`
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`

// const motionG = styled

const SVGContainer = styled(motion.div)``

const constellationVariant = {
  normal: {
    x: 100,
    y: 200,
    scale: 1.0,
    rotate: 0,
  },
  animated: {
    x: -260,
    y: -300,
    scale: 2.2,
    rotate: 150,
    transition: {
      duration: 1,
    },
  },
}

const textVariant = {
  normal: {
    opacity: 1.0,
  },
  animated: {
    opacity: 0.0,
    transition: {
      duration: 0.5,
    },
  },
}

class Constellation extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  state = {
    isAboutClicked: false,
  }

  onAboutClicked = () => {
    console.log("clicked")
    this.setState({ isAboutClicked: !this.state.isAboutClicked })
    console.log("State: ", this.state.isAboutClicked)
  }

  render() {
    return (
      // TODO adjust size based on device/viewport
      <SVGContainer>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          width="700"
          height="700"
          viewBox="-50 -50 600 600"
          variants={constellationVariant}
          initial="normal"
          animate={this.state.isAboutClicked ? "animated" : "normal"}
        >
          {/* <style>
        text {
          opacity: 0;
        }
      </style> */}
          {/* TODO: class with images on these points? or style stars? */}
          {/* TODO scale up stars on hover */}
          {/* TODO display page link text on hover */}
          <Link to="/about/">
            {/* <foreignObject x="50" y="20" height="50px" width="150px">
              <LinkText>Who we are</LinkText>
            </foreignObject> */}
            <MotionText variants={textVariant} x="50" y="20" fill="white">
              Who we are
            </MotionText>
            <image
              onClick={() => this.onAboutClicked()}
              href={star}
              x="150"
              y="-20"
              height="50px"
              width="50px"
            />
            {/* <circle cx="174" cy="0" r="10" fill="white" /> */}
          </Link>
          <Link to="/esp/">
            <text x="350" y="100" fill="white">
              Ecosytem Support
            </text>
            <image href={star} x="450" y="100" height="50px" width="50px" />
            {/* <circle cx="480" cy="125" r="10" fill="white" /> */}
          </Link>
          <Link to="/ethereum/">
            <text x="370" y="380" fill="white">
              What is Ethereum?
            </text>
            <image href={star} x="330" y="360" height="50px" width="50px" />
            {/* <circle cx="352" cy="386" r="10" fill="white" /> */}
          </Link>
          <Link to="/philosophy/">
            <text x="0" y="270" fill="white">
              Our Philosophy
            </text>
            <image href={star} x="-20" y="210" height="50px" width="50px" />
            {/* <circle cx="0" cy="235" r="10" fill="white" /> */}
          </Link>
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
}

export default Constellation
