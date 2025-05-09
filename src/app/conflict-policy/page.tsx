"use client"

import React, { useEffect } from "react"
import Link from "../../components/Link"
import ContentBlock from "../../components/page/Content"
import { loadAndCacheTexture } from "components/page/animate"
import styles from "./ConflictPolicy.module.scss" // Import the new SCSS module

const ConflictOfInterestPolicyPage = () => {
  useEffect(() => {
    loadAndCacheTexture("/ef")
  }, [])

  return (
    <ContentBlock>
      <div
        id="content-body"
        className={`${styles.contentWrapper} disable--selection`} // Apply the wrapper class
      >
        <h1>Ethereum Foundation Conflict of Interest Policy</h1>
        <p>
          In order to serve the Ethereum ecosystem the EF must have high
          integrity. This means that our actions must be sincerely motivated by
          the long-term interests of the Ethereum ecosystem.
        </p>
        <ul>
          {/* Existing list content */}
        </ul>

        <Link href="/" id="next-navigation">
          <object
            data="/assets/double-spirale-white.svg"
            width="50"
            height="50"
            aria-labelledby="Next"
          >
            {" "}
            Next
          </object>
          <span> Back Home </span>
        </Link>
      </div>
    </ContentBlock>
  )
}

export default ConflictOfInterestPolicyPage 