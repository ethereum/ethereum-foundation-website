import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

import EFLogo from "../images/ethereum-logo.svg"

// TODO move into layout
// depending on location, if not on homepage (i.e. on subpage), transition in the nav link home

const Image = styled.img`
  position: absolute;
  top: 20px;
  left: 40px;
`

const Subpage = ({ children }) => (
  <div>
    <nav>
      <Link to="/">
        <Image src={EFLogo} alt="Ethereum Logo" />
      </Link>
    </nav>

    <main>{children}</main>
  </div>
)

Subpage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Subpage
