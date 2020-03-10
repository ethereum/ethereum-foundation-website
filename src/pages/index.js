import React from "react"
import styled from "styled-components"

import SEO from "../components/SEO"
import efLogo from "../images/ethereum-foundation-logo.svg"
import { screenSizeS } from "../utils/styles"

const Logo = styled.img`
  position: absolute;
  top: calc(50% - 53px); /* 106px / 2 */
  left: calc(50% - 120px); /* 240px / 2 */
  transform: translate(-50, -55%);
  z-index: 2;
  min-width: 240px;

  @media (max-width: ${screenSizeS}) {
    left: calc(50% - 110px);
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Logo src={efLogo} alt="Ethereum Foundation Logo" />
  </>
)

export default IndexPage
