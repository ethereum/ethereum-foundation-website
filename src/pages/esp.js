import React from "react"

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import SideNav from "../components/SideNav"
import SEO from "../components/SEO"
import {
  PageContainer,
  PageH1,
  ContentContainer,
  Button,
  ButtonIcon,
  ButtonContainer,
} from "../components/SharedStyledComponents"

const EcosystemSupportPage = () => (
  <>
    <SEO title="Ecosystem Support Program" />
    <PageContainer>
      <ContentContainer>
        <PageH1>Ecosystem Support Program</PageH1>
      </ContentContainer>
      <SideNav from="/about/" to="/ethereum/" />
      <ContentContainer>
        <p>
          The Ecosystem Support Program is a large-scale effort aimed at
          ensuring that the Ethereum ecosystem has the support it needs to
          succeed. We provide financial support to teams and organizations
          working on important projects across the Ethereum ecosystem and
          beyond, as well as guidance and non-monetary support to teams that
          need more than just money to succeed.
        </p>

        <p>
          Interested in learning more about Ecosystem Support and whether it
          might be a good fit for your project?{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ecosystem.support"
          >
            Visit ecosystem.support
          </a>
          .
        </p>
        <ButtonContainer>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://ecosystem.support"
          >
            Learn more <ButtonIcon icon={faExternalLinkAlt} />
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </PageContainer>
  </>
)

export default EcosystemSupportPage
