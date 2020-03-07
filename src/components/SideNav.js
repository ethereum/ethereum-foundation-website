import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

const SideNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  height: 0;
`
const NavIcon = styled(FontAwesomeIcon)`
  color: white;
`

const IconWrapper = styled(motion.div)`
  position: relative;
`

const hoverAnimation = {
  scale: 1.4,
  transition: { duration: 0.4 },
}

// TODO z-index to ensure constellation doesn't cover it
const SideNav = ({ from, to }) => (
  <SideNavigation>
    <Link to={from}>
      <IconWrapper whileHover={hoverAnimation}>
        <NavIcon icon={faChevronLeft} size="2x" />
      </IconWrapper>
    </Link>
    <Link to={to}>
      <IconWrapper whileHover={hoverAnimation}>
        <NavIcon icon={faChevronRight} size="2x" />
      </IconWrapper>
    </Link>
  </SideNavigation>
)

export default SideNav
