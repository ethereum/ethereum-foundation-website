import React from "react"
import PropTypes from "prop-types"

import StyledFullBackground from "./FullBackground"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <StyledFullBackground>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <div
          style={{
            position: `fixed`,
            bottom: `8px`,
            left: `8px`,
            color: `white`, // TODO use variable
          }}
        >
          © Ethereum Foundation, {new Date().getFullYear()}
        </div>
      </StyledFullBackground>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
