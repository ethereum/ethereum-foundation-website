import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import EFLogo from "../images/ethereum-logo.svg"

const Subpage = ({ children }) => (
  <div>
    <nav>
      <Link to="/">
        <img
          style={{
            position: `absolute`,
            top: `20px`,
            left: `40px`,
          }}
          src={EFLogo}
          alt="Ethereum Logo"
        />
      </Link>
    </nav>
    <div
      style={{
        margin: `12rem auto 0`,
        maxWidth: 960,
        padding: `2rem`,
      }}
    >
      <main>{children}</main>
    </div>
  </div>
)

Subpage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Subpage
