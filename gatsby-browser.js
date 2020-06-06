/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
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

// Set global `previousPath`
export const onPreRouteUpdate = ({ prevLocation }) => {
  window.previousPath = prevLocation ? prevLocation.pathname : null
}
