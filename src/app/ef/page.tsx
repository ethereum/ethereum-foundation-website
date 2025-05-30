"use client"
import React, { useEffect } from "react"
import Link from "../../components/Link"
import ContentBlock from "../../components/page/Content"
import { loadAndCacheTexture } from "components/page/animate"

const EthereumFoundation = (props: any) => {
  useEffect(() => {
    loadAndCacheTexture("/people")
  }, [])

  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>What is the EF?</h1>
        <p>
          The Ethereum Foundation (EF) is a non-profit that supports the
          Ethereum ecosystem. We are part of a larger community of organizations
          and individuals that fund protocol development,{" "}
          <Link href="https://esp.ethereum.foundation/">
            grow the ecosystem
          </Link>
          , and advocate for Ethereum.
        </p>

        <p>
          Behind that simple description, the EF is hard to categorize. We are
          not a tech company, or a "normal" non-profit. Just as Ethereum
          requires new concepts and technologies, it has spawned new kinds of
          organizations.
        </p>

        <p>
          We are at the frontier of a new kind of organization: one that
          supports a blockchain and its ecosystem without controlling it. Since
          the Ethereum ecosystem evolves every day, it is important for the EF
          to also keep learning and evolving to support Ethereum&apos;s long
          term growth.
        </p>

        <p>
          Over the course of this evolution, the EF has become more like a
          community of teams than a traditional organization.
        </p>

        <div id="executive-board">
          <h3>Meet our Ethereum Foundation Board</h3>

          <div className="member">
            <img
              src="/assets/portrait-aya-miyaguchi.png"
              alt="Aya Miyaguchi, the President of Ethereum Foundation"
              height="150"
              width="150"
            />
            <div className="info">
              <h4 className="name">Aya Miyaguchi</h4>
              <span className="title">President</span>
              <Link
                href="https://twitter.com/ayamiyagotchi"
                className="social-link"
              >
                @AyaMiyagotchi
              </Link>
            </div>
          </div>

          <div className="member">
            <img
              src="/assets/portrait-vitalik-buterin.png"
              alt="Vitalik Buterin, the Inventor of Ethereum"
              height="150"
              width="150"
            />
            <div className="info">
              <h4 className="name">Vitalik Buterin</h4>
              <span className="title">Inventor of Ethereum</span>
              <Link
                href="https://twitter.com/VitalikButerin"
                className="social-link"
              >
                @VitalikButerin
              </Link>
            </div>
          </div>

          <div className="member">
            <img
              src="/assets/portrait-patrick-storchenegger.png"
              alt="Patrick Storchenegger, one of the Ethereum Foundation's board members"
              height="150"
              width="150"
            />
            <div className="info">
              <h4 className="name">Patrick Storchenegger</h4>
              <span className="title">Board Member</span>
            </div>
          </div>

          <div className="member">
            <img
              src="/assets/portrait-hsiao-wei.png"
              alt="Hsiao-Wei, one of the Ethereum Foundation's board members"
              height="150"
              width="150"
            />
            <div className="info">
              <h4 className="name">Hsiao-Wei Wang</h4>
              <span className="title">Co-Executive Director</span>
              <Link
                href="https://twitter.com/hwwonx"
                className="social-link"
              >
                @hwwonx
              </Link>
            </div>
          </div>
        </div>

        {/*
        <Link href="/whatwedo" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p>Read our story</p>
        </Link>
        */}

        <Link href="/people" id="next-navigation">
          <object
            data="/assets/double-spirale-white.svg"
            width="50"
            height="50"
            aria-labelledby="Next"
          >
            {" "}
            Next
          </object>
          <span>View EF Organization</span>
        </Link>
      </div>
    </ContentBlock>
  )
}

export default EthereumFoundation
