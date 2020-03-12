import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import SEO from "../../components/SEO"
import SideNav from "../../components/SideNav"
import {
  PageContainer,
  ContentContainer,
  PageH1,
} from "../../components/SharedStyledComponents"

const AboutPage = () => (
  <>
    <SEO title="About" />
    <PageContainer>
      <ContentContainer>
        <PageH1>What is the Ethereum Foundation?</PageH1>
      </ContentContainer>
      <SideNav from="/philosophy/" to="/esp/" />
      <ContentContainer>
        <p>
          The Ethereum Foundation is a non-profit organization dedicated to
          supporting{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ethereum.org/"
          >
            Ethereum
          </a>{" "}
          and related technologies.
        </p>
        <p>
          The EF is not a company, or even a traditional non-profit. We do not
          control Ethereum, nor are we the only organization that funds critical
          development of Ethereum-related technologies. We are part of a large
          ecosystem of of organizations, individuals, and companies who support
          Ethereum.
        </p>

        <p>
          Our mission is to do what is best for Ethereum’s long-term success.
          Our role is to allocate resources to critical projects, be a valued
          voice within the Ethereum ecosystem, and be an advocate for Ethereum
          to the outside world.
        </p>
      </ContentContainer>
    </PageContainer>
  </>
)

export default AboutPage
