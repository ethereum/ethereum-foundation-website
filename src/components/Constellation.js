import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import star from "../images/star.png"

const icon = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
}

const Constellation = () => {
  return (
    // TODO adjust size based on device/viewport
    <nav style={{ width: `500px`, height: `400px` }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="400"
        viewBox="0 0 480 400"
      >
        {/* TODO: how to avoid cutting off circle? */}
        {/* TODO: class with images on these points? or style stars? */}
        <Link to="/about/">
          <image href={star} x="174" y="0" height="50px" width="50px" />
          {/* <circle cx="174" cy="0" r="10" fill="white" /> */}
        </Link>
        <Link to="/esp/">
          <image href={star} x="450" y="125" height="50px" width="50px" />
          {/* <circle cx="480" cy="125" r="10" fill="white" /> */}
        </Link>
        <Link to="/ethereum/">
          <image href={star} x="330" y="360" height="50px" width="50px" />
          {/* <circle cx="352" cy="386" r="10" fill="white" /> */}
        </Link>
        <Link to="/philosophy/">
          <image href={star} x="0" y="230" height="50px" width="50px" />
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
        </g>
      </svg>
    </nav>
  )
}

export default Constellation
