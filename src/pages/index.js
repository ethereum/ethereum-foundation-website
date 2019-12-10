import React from "react"
// import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/Layout"
import Constellation from "../components/Constellation"
import SEO from "../components/SEO"
import efLogo from "../images/ethereum-foundation-logo.svg"
// import constellation from "../images/constellation.svg"

import { StyledAbsoluteCenter } from "../components/SharedStyledComponents"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="ethereum-foundation-logo"></div>
    <img
      style={{
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -55%)`,
        zIndex: `10`,
      }}
      src={efLogo}
      alt=""
    />
    <StyledAbsoluteCenter
      style={{
        transform: `translate(-50%, -45%)`,
      }}
    >
      <Constellation />
    </StyledAbsoluteCenter>
  </Layout>
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
