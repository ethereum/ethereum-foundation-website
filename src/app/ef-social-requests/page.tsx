"use client"

import React, { useEffect } from "react"
import Link from "../../components/Link"
import ContentBlock from "../../components/page/Content"
import { loadAndCacheTexture } from "components/page/animate"

const EFSocialRequestsPage = () => {
  useEffect(() => {
    loadAndCacheTexture("/ef-social-requests")
  }, [])

  return (
    <ContentBlock>
      <style jsx global>{`
        ul {
          padding: 0;
          margin: 0;
        }
        h2 {
          margin-block: 35px;
        }
        .list-heading {
          text-align: left;
          font-size: 18px;
          padding: 0px;
          margin-bottom: 8px;
          font-weight: 600;
        }   
        section li {
            margin: 0 100px;
            @media (max-width: 900px) {
              margin: 0 50px;
            }
            @media (max-width: 500px) {
              margin: 0 20px;
            }
        }
        ul, ul ul {
          margin-left: 20px;
        }
        hr {
          margin: 40px 0;
          border: none;
          border-top: 1px solid #ddd;
        }
      `}</style>
      <div id="content-body" className="disable--selection">
        <h1>Ethereum Social Media Promotion Request & Guidelines</h1>
        
        <p>
          Welcome! This page outlines the process for submitting ecosystem news and updates to the Ethereum Foundation to be shared on the <a href="https://twitter.com/ethereum" target="_blank" rel="noopener noreferrer">@Ethereum</a> and/or Ethereum Foundation social media platforms.
        </p>

        <p>
          The Ethereum Foundation stewards both Ethereum and Ethereum Foundation social media properties. If you have a news update to share with the Ethereum Foundation for promotion, you can submit it using the form below.
        </p>

        <p>
          <strong>Please note: Submitting a request does not guarantee your post will be shared.</strong>
        </p>

        <section>
          <h2>Submission Requirements</h2>
          
          <p>
            To be considered, updates must be submitted <strong>at least 48 hours in advance</strong> and follow the guidelines below.
          </p>

          <p>
            If your submission is accepted, the EF team will reach out to you on Telegram.
          </p>

          <hr />

          <h2>Guidelines</h2>
          
          <p>
            The Ethereum social media accounts aim to highlight work from across the Ethereum ecosystem. To maintain Ethereum's neutrality and avoid unintended signals, we typically don't amplify:
          </p>

          <ul>
            <li>Token promotions, airdrops, or sales</li>
            <li>Price speculation, $ETH cashtags, or token imagery resembling ETH</li>
            <li>Content that implies endorsement by the Ethereum Foundation</li>
            <li>Content that attacks or undermines other chains, communities, or projects</li>
            <li>Superlative marketing ("best," "#1," etc.) unless substantiated by transparent, public data</li>
          </ul>

          <h2>We Are Most Likely to Share</h2>
          
          <ul>
            <li>Highlights live applications, tools, or infrastructure deployed on Ethereum mainnet or L2s</li>
            <li>Announces integrations that bring new functionality or users into the Ethereum ecosystem</li>
            <li>Shares open-source contributions or technical advancements that support Ethereum's core values (e.g., decentralization, credible neutrality, censorship resistance)</li>
            <li>Offers high-quality educational content for developers, researchers, or everyday users</li>
            <li>Shares ecosystem-wide stats, dashboards, or data that help people understand Ethereum's growth</li>
            <li>Spotlights meaningful real-world use cases or community events (online or IRL)</li>
          </ul>

          <hr />

          <h2>Ready to Submit?</h2>
          
          <p>
            Please review the guidelines above carefully before submitting your request. Submissions that do not follow these guidelines will not be considered.
          </p>

          <p>
            <a href="https://ef-social-requests.paperform.co/" target="_blank" rel="noopener noreferrer">
              <strong>SUBMIT YOUR REQUEST</strong>
            </a>
          </p>

          <hr />

          <p>
            <strong>Important Reminders:</strong>
          </p>
          <ul>
            <li>Submit at least 48 hours in advance</li>
            <li>Follow all guidelines listed above</li>
            <li>Submitting does not guarantee promotion</li>
            <li>We'll contact you via Telegram if accepted</li>
          </ul>

        </section>

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

export default EFSocialRequestsPage