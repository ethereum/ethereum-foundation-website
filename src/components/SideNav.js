import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
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

// TODO z-index to ensure constellation doesn't cover it
const SideNav = ({ from, to }) => (
  <SideNavigation>
    <Link to={from}>
      <NavIcon icon={faChevronLeft} size="2x" />
    </Link>
    <Link to={to}>
      <NavIcon icon={faChevronRight} size="2x" />
    </Link>
  </SideNavigation>
)

export default SideNav
