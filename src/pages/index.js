import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Img
      className="img-ef-logo"
      fluid={data.file.childImageSharp.fluid}
      alt="Ethereum Foundation Logo"
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Go to about page</Link>
    <br />
    <Link to="/philosophy/">Go to philosophy page</Link>
    <br />
    <Link to="/esp/">Go to esp page</Link>
    <br />
    <Link to="/ethereum/">Go to ethereum page</Link>
  </Layout>
)

// TODO get a better image
export const query = graphql`
  query {
    file(relativePath: { eq: "ef-logo-transparent.png" }) {
      childImageSharp {
        fluid(maxWidth: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
