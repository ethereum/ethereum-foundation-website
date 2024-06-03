"use client"
import React, { useEffect } from "react"
import Link from "../../components/Link"
import ContentBlock from "../../components/page/Content"
import { loadAndCacheTexture } from "components/page/animate"

const InfiniteGarden = (props: any) => {
  useEffect(() => {
    loadAndCacheTexture("/ethereum")
  }, [])

  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>Nurturing the Infinite Garden</h1>

        <p>
          <em>
            “A finite game is played for the purpose of winning. An infinite
            game for the purpose of continuing the play.”
          </em>{" "}
          ~ James P. Carse
        </p>

        <p>
          Our vision for Ethereum is the Infinite Garden. Ethereum is more than
          a technology, it is a diverse ecosystem of individuals and
          organizations that build and grow alongside a protocol. The Ethereum
          ecosystem wasn&apos;t something that was designed by any one
          individual or organization, but it organically evolved with the
          support of people who nurture the ecosystem to become more vibrant and
          diverse.
        </p>

        <p>
          Ethereum is a protocol for human coordination. Coordination is a game,
          but not one that is played to win. Coordination is more like tending a
          garden, where one works only so that the garden may continue to thrive.
        </p>

        <p>
          The Infinite Garden is an embodiment of the spirit of the Ethereum
          Foundation as one gardener in a vast ecosystem -- nurture and grow,
          but do not control, and continue to play.
        </p>

        <Link href="/ethereum" id="next-navigation">
          <object
            data="/assets/double-spirale-white.svg"
            width="50"
            height="50"
            aria-labelledby="Next"
          >
            {" "}
            Next
          </object>
          <span> What is Ethereum? </span>
        </Link>
      </div>
    </ContentBlock>
  )
}

export default InfiniteGarden
