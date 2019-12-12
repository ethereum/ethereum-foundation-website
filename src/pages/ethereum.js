import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const EthereumPage = () => (
  <Layout>
    <SEO title="What is Ethereum?" />
    <h1>Hi from the Ethereum page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EthereumPage
