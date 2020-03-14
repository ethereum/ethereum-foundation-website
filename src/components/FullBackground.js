// Working off this example (v0.9.11):
// https://github.com/timhagn/gbitest/blob/master/src/components/FullBackground.js
// Thanks @timhagn :)

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { screenSizeS } from "../utils/styles"

const FullBackground = ({ title, height, mobileHeight, children }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(
          relativePath: { eq: "ethereum-foundation-background-mobile.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 480, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopImage: file(
          relativePath: { eq: "ethereum-foundation-background.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
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
    <Parent>
      <BgImage
        fluid={sources}
        title={title}
        height={height}
        mobileHeight={mobileHeight}
      />
      <Content>{children}</Content>
    </Parent>
  )
}

const Parent = styled.div`
  position: relative;
`

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

export default FullBackground
