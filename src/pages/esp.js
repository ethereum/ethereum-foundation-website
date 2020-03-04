import React from "react"

import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/SEO"
import {
  PageContainer,
  Button,
  ButtonIcon,
  ButtonContainer,
} from "../components/SharedStyledComponents"

const EcosystemSupportPage = () => (
  <>
    <SEO title="Ecosystem Support Program" />
    <PageContainer>
      <h1>Ecosystem Support Program</h1>
      <p>
        The Ecosystem Support Program is a large-scale effort aimed at ensuring
        that the Ethereum ecosystem has the support it needs to succeed. We
        provide financial support to teams and organizations working on
        important projects across the Ethereum ecosystem and beyond, as well as
        guidance and non-monetary support to teams that need more than just
        money to succeed.
      </p>

      <p>
        Interested in learning more about Ecosystem Support and whether it might
        be a good fit for your project?
      </p>
      <ButtonContainer>
        <Button
          target="_blank"
          rel="noopener noreferrer"
          href="https://ecosystem.support"
        >
          Visit ecosystem.support <ButtonIcon icon={faChevronRight} />
        </Button>
      </ButtonContainer>
    </PageContainer>
  </>
)

export default EcosystemSupportPage
