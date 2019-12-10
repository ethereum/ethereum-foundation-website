import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EcosystemSupportPage = () => (
  <Layout>
    <SEO title="Ecosystem Support Program" />
    <h1>Hi from the ESP page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EcosystemSupportPage
