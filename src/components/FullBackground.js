// Working off this example (v0.9.11):
// https://github.com/timhagn/gbitest/blob/master/src/components/FullBackground.js
// Thanks @timhagn :)

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const StyledFullBackground = styled.div`
  width: 100%;
  min-height: 100vh;
`

const FullBackground = ({ children }) => {
  // TODO separate query for mobile?
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(
          relativePath: { eq: "ethereum-foundation-background.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  // Single Image Data
  const imageData = desktop.childImageSharp.fluid

  return (
    <StyledFullBackground>
      <BackgroundImage fluid={imageData} role="img">
        {children}
      </BackgroundImage>
    </StyledFullBackground>
  )
}

export default FullBackground
