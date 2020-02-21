import React from "react"
// import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"

import SEO from "../components/SEO"
import efLogo from "../images/ethereum-foundation-logo.svg"
// import constellation from "../images/constellation.svg"

import { StyledAbsoluteCenter } from "../components/SharedStyledComponents"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <StyledAbsoluteCenter
      style={{
        transform: `translate(-50%, -45%)`,
        top: `35%`,
      }}
    >
      <img
        src={efLogo}
        alt="Ethereum Foundation Logo"
        style={{
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -55%)`,
          zIndex: `10`,
        }}
      />
    </StyledAbsoluteCenter>
  </>
)

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "ef-logo-transparent.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 540) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default IndexPage
