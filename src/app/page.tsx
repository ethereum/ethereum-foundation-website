"use client"
import React, { useEffect } from "react"
import Link from "../components/Link"
import ContentBlock from "../components/page/Content"
import { loadAndCacheTexture } from "components/page/animate"

const HomePage = () => {
  useEffect(() => {
    loadAndCacheTexture("/infinitegarden")
  }, [])

  return (
    <ContentBlock isHomePage>
      <div id="content-body" className="disable--selection">
        <h1>Welcome to the Infinite Garden</h1>
        <Link href="/infinitegarden" id="next-navigation">
          <object
            data="/assets/double-spirale.svg"
            width="50"
            height="50"
            aria-labelledby="Next"
          >
            {" "}
            Next
          </object>
          <span> Explore </span>
        </Link>
      </div>
    </ContentBlock>
  )
}

export default HomePage
