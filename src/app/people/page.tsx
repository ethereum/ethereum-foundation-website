"use client"
import React from "react"
import Link from "../../components/Link"
import ContentBlock from "../../components/page/Content"
import Image from "next/image"

const EthereumFoundation = (props: any) => {
  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>Ethereum Foundation Organization Chart</h1>
        <p>A high-level overview of the Ethereum Foundation's teams, coordinators, and focus areas.</p>
        <a 
          href="/assets/ef-org-chart.png" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ cursor: 'pointer', display: 'block' }}
          className="people-org-chart-link"
        >
          <Image
            src="/assets/ef-org-chart.png"
            width={2500}
            height={2128}
            alt="Organizational Chart of the Ethereum Foundation"
            layout="responsive"
            priority
          />
        </a>

        <Link href="/ourstory" id="next-navigation">
          <object
            data="/assets/double-spirale-white.svg"
            width="50"
            height="50"
            aria-labelledby="Next"
          >
            {" "}
            Next
          </object>
          <span>Read our story</span>
        </Link>
      </div>
      <style jsx>{`
        .people-org-chart-link {
          /* No styles by default, only apply on mobile */
        }
        @media (max-width: 1050px) { /* Using 1050px directly */
          .people-org-chart-link {
            margin-left: 15px;
            margin-right: 15px;
          }
        }
      `}</style>
    </ContentBlock>
  )
}

export default EthereumFoundation
