/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import Layout from "./src/components/Layout"
import FullBackground from "./src/components/FullBackground"

export const wrapPageElement = ({ element, props }) => {
  return (
    <FullBackground>
      <Layout {...props}>{element}</Layout>
    </FullBackground>
  )
}
