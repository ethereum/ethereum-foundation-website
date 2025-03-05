"use client"

import React, { useEffect } from "react"
import Link from "../../components/Link"
import ContentBlock from "../../components/page/Content"
import { loadAndCacheTexture } from "components/page/animate"
import SilvicultureSocietyMembers from "../../components/silviculture-society-members/SilvicultureSociety"

const SilvicultureSociety = () => {
  useEffect(() => {
    loadAndCacheTexture("/ef")
  }, [])

  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>Silviculture Society</h1>
        <p>
          The Silviculture Society is an advisory group, intended to provide
          informal counsel to the Foundation in matters related to our mission
          to sustain the core values of censorship resistance, open source,
          privacy, and security. Ethereum&apos;s success depends on having
          talented and committed developers building with these values, and
          EF&apos;s ethos and work has always been centered around them.
        </p>

        <p>
          The Society&apos;s advice is given on a strictly confidential basis
          and members have dedicated channels to the Foundation&apos;s board and
          leadership (and vice-versa). Members are not paid and serve for a
          renewable one year term. This is an experimental effort, and we look
          forward to creating more mechanisms for the EF to get community
          feedback from different groups in different form factors.
        </p>

        <div className="silviculture-society-members">
          <SilvicultureSocietyMembers />
        </div>
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

export default SilvicultureSociety
