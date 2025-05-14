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
        <p>
          
        </p>
        <Image
          src="/assets/ef-org-chart.png"
          width={5392}
          height={3744}
          alt="Organizational Chart of the Ethereum Foundation"
          layout="responsive"
          priority
        />
        <Link href="/philosophy" id="next-navigation">
          <object
            data="/assets/double-spirale-white.svg"
            width="50"
            height="50"
            aria-labelledby="Next"
          >
            {" "}
            Next
          </object>
          <span> Sit with our philosophy </span>
        </Link>
      </div>
    </ContentBlock>
  )
}

export default EthereumFoundation
