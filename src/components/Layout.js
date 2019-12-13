import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import StyledFullBackground from "./FullBackground"
import Footer from "./Footer"

import "./layout.css"

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TopLayout = styled.div`
  min-height: 100vh;
  position: relative;
`
const BottomLayout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

// TODO access current route to align constellation
const Layout = ({ children }) => (
  <StyledFullBackground>
    <StyledLayout>
      <TopLayout>{children}</TopLayout>
      <BottomLayout>
        <Footer />
      </BottomLayout>
    </StyledLayout>
  </StyledFullBackground>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
