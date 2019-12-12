import React from "react"
import PropTypes from "prop-types"

import StyledFullBackground from "./FullBackground"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children }) => (
  <StyledFullBackground>
    <div
      style={{
        width: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
      }}
    >
      <div
        className="layout-content-top"
        style={{ height: `100vh`, position: `relative` }}
      >
        <main>{children}</main>
      </div>
      <div
        className="layout-content-bottom"
        style={{
          position: `fixed`,
          bottom: 0,
          width: `100%`,
        }}
      >
        <Footer />
      </div>
    </div>
  </StyledFullBackground>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
