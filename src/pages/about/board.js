import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ExecutiveBoardPage = () => (
  <Layout>
    <SEO title="Executive Board" />
    <h1>Hi from the executive board page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ExecutiveBoardPage
