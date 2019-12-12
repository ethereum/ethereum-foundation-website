import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import StyledFullBackground from "./FullBackground"

import "./layout.css"

const Layout = ({ children }) => {
  const StyledFooter = styled.footer`
    background-color: rgba(255, 255, 255, 0.15);
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 32px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `

  const StyledFooterChildDiv = styled.div`
    @media (max-width: 768px) {
      padding: 16px;
      flex: 0;
    }
  `
  const StyledFooterDivContact = styled(StyledFooterChildDiv)`
    flex: 0 1 200px;
  `
  const StyledFooterDivCanary = styled(StyledFooterChildDiv)`
    flex: 0 1 600px;
    /* TODO confirm with Tomo */
    font-size: 0.75rem;
  `
  const StyledFooterDivLinks = styled(StyledFooterChildDiv)`
    display: flex;
    justify-content: space-between;
    flex: 0 1 200px;
  `

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
            {/* 55px === EF copyright */}
            <main style={{ height: `calc(100vh - 55px)` }}>{children}</main>
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
            <StyledFooter>
              <StyledFooterDivContact>
                <strong>General Contact:</strong>
                <div style={{ marginBottom: `16px` }}>
                  <a href="mailto:info@ethereum.org">info@ethereum.org</a>
                </div>
                <strong>Press Contact:</strong>
                <div style={{ marginBottom: `16px` }}>
                  <a href="mailto:press@ethereum.org">press@ethereum.org</a>
                </div>
              </StyledFooterDivContact>
              <StyledFooterDivCanary>
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
              </StyledFooterDivCanary>
              <StyledFooterDivLinks>
                <div>
                  {/* TODO style links */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://devcon.org"
                  >
                    Devcon.org
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blog.ethereum.org"
                  >
                    Blog
                  </a>
                </div>
              </StyledFooterDivLinks>
            </StyledFooter>
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
