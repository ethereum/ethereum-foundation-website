import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
  },
}

const Constellation = () => {
  return (
    <nav style={{ width: `500px`, height: `400px` }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="400"
        viewBox="0 0 480 400"
      >
        <Link to="/about/">
          <circle cx="174" cy="0" r="10" fill="white" />
        </Link>
        <Link to="/esp/">
          <circle cx="480" cy="125" r="10" fill="white" />
        </Link>
        <Link to="/ethereum/">
          <circle cx="352" cy="386" r="10" fill="white" />
        </Link>
        <Link to="/philosophy/">
          <circle cx="0" cy="235" r="10" fill="white" />
        </Link>
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
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
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
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </g>
      </svg>
    </nav>
  )
}

export default Constellation
