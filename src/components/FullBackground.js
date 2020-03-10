// Working off this example (v0.9.11):
// https://github.com/timhagn/gbitest/blob/master/src/components/FullBackground.js
// Thanks @timhagn :)

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { screenSizeS } from "../utils/styles"

const FullBackground = ({ children }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(
          relativePath: { eq: "ethereum-foundation-background.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 480, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(
          relativePath: { eq: "ethereum-foundation-background.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set up the array of image data and `media` keys.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: ${screenSizeS})`,
    },
  ]

  return (
    <BackgroundImage fluid={sources} role="img">
      {children}
    </BackgroundImage>
  )
}

const StyledFullBackground = styled(FullBackground)`
  width: 100%;
  min-height: 100vh;
  background-size: auto;
  background-color: transparent;
`

export default StyledFullBackground
