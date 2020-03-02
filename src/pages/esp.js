import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/SEO"
import { PageContainer } from "../components/SharedStyledComponents"

const Icon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  color: white;
`

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

const Button = styled.a`
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
        <Button target="_blank"
          rel="noopener noreferrer"
          href="https://ecosystem.support">
          Visit ecosystem.support <Icon icon={faChevronRight} />
        </Button>
      </ButtonContainer>
    </PageContainer>
  </>
)

export default EcosystemSupportPage
