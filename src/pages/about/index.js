import React from "react"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
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

const Icon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  color: white;
`

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

const Button = styled(Link)`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2.5px;
  padding: 1rem 2rem;
  font-weight: 600;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  @media (max-width: 380px) {
    width: 100%;
  }
`

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
          The Ethereum Foundation (EF) is a non-profit organization dedicated to
          supporting{" "}
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://ethereum.org/"
          >
            Ethereum
          </OutboundLink>{" "}
          and related technologies.
        </p>
        <p>
          The EF is not a company, or even a traditional non-profit. We do not
          control Ethereum, nor are we the only organization that funds critical
          development of Ethereum-related technologies. We are part of a large
          ecosystem of organizations, individuals, and companies that support
          Ethereum.
        </p>

        <p>
          Our mission is to do what is best for Ethereum’s long-term success.
          Our role is to allocate resources to critical projects, to be a valued
          voice within the Ethereum ecosystem, and to advocate for Ethereum to
          the outside world.
        </p>
        <ButtonContainer>
          <Button to="/about/board/">
            Meet the Executive Board <Icon icon={faChevronRight} />
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </PageContainer>
  </>
)

export default AboutPage
