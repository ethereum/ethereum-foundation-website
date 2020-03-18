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

const EthereumPage = () => (
  <>
    <SEO title="What is Ethereum?" />
    <PageContainer>
      <ContentContainer>
        <PageH1>What is Ethereum?</PageH1>
      </ContentContainer>
      <SideNav from="/esp/" to="/philosophy/" />
      <ContentContainer>
        <p>Ethereum is the world’s programmable blockchain. </p>

        <p>
          Launched in 2015, Ethereum is a global, open-source platform used for
          programmable money and decentralized applications that allow users
          have control over their own data.
        </p>

        <p>
          Ethereum applications are diverse, spanning a range of industries
          and use-cases. They might be financial (like payments, lending, or
          insurance), games (like collectible cards, or virtual worlds),
          identity related (self-sovereign ID) or something entirely different.
          Each “web 3” application benefits from censorship resistance,
          decentralization, and security.
        </p>

        <p>
          Ethereum is not controlled by anyone - it is built and maintained by
          thousands of people, companies, organizations and users all over the
          world.
        </p>

        <p>
          To learn more about Ethereum or its native token (Ether),{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ethereum.org"
          >
            visit ethereum.org
          </a>
        </p>
        <ButtonContainer>
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href="https://ethereum.org"
          >
            Visit ethereum.org <ButtonIcon icon={faExternalLinkAlt} />
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </PageContainer>
  </>
)

export default EthereumPage
