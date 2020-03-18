/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import Layout from "./src/components/Layout"
import FullBackground from "./src/components/FullBackground"
import Constellation from "./src/components/Constellation"

export const wrapPageElement = ({ element, props }) => {
  return (
    <FullBackground>
      <Constellation path={props.path} />
      <Layout {...props}>{element}</Layout>
    </FullBackground>
  )
}

export const onRouteUpdate = () => {
  window.locations = window.locations || []
  window.locations.push(window.location.pathname)
  window.previousPath = window.locations[window.locations.length - 2]
}
