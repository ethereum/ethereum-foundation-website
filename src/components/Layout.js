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
            minHeight: `calc(100vh + 273px)`,
            width: `100%`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
          }}
        >
          <div className="layout-content-top">
            <main>{children}</main>
          </div>
          <div className="layout-content-bottom">
            <div
              style={{
                color: `white`, // TODO use variable
                padding: `16px`,
              }}
            >
              © Ethereum Foundation, {new Date().getFullYear()}
            </div>
            <footer
              style={{
                backgroundColor: `rgba(255, 255, 255, 0.15)`,
                bottom: `0`,
                display: `flex`,
                justifyContent: `space-between`,
                padding: `32px`,
              }}
            >
              <div style={{ flex: `0 1 200px` }}>
                <strong>General Contact:</strong>
                <div>info@ethereum.org</div>
                <strong>Press Contact:</strong>
                <div>press@ethereum.org</div>
              </div>
              <div style={{ flex: `0 1 600px` }}>
                <p>
                  The Ethereum Foundation (Stiftung Ethereum) has never been
                  contacted by any agency anywhere in the world in a way which
                  requires that contact not to be disclosed.
                </p>
                <p>
                  Stiftung Ethereum will publicly disclose any sort of inquiry
                  from government agencies that falls outside the scope of
                  regular business operations.
                </p>
              </div>
              <div
                style={{
                  flex: `0 1 200px`,
                  display: `flex`,
                  justifyContent: `space-between`,
                }}
              >
                <div>Devcon.org</div>
                <div>Blog</div>
              </div>
            </footer>
          </div>
        </div>
      </StyledFullBackground>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
