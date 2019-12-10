import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PhilosophyPage = () => (
  <Layout>
    <SEO title="Philosophy of Subtraction" />
    <h1>Hi from the philosophy page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PhilosophyPage
