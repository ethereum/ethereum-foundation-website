import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import SEO from "../../components/SEO"
import { PageContainer } from "../../components/SharedStyledComponents"

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
      <h1>What is the Ethereum Foundation?</h1>
      <p>
        The Ethereum Foundation (EF) is a non-profit organization that supports
        development of the Ethereum blockchain, the growing ecosystem around it,
        and related technologies.
      </p>
      <p>
        The EF is not a company, or even a traditional non-profit. We do not
        control Ethereum, nor are we the only organization that funds critical
        development of Ethereum-related technologies.
      </p>

      <p>
        Our mission is to do what is best for Ethereum’s long-term success. Our
        role is to allocate resources to critical projects, be a valued voice
        within the Ethereum ecosystem, and be an advocate for Ethereum to the
        outside world.
      </p>
      <ButtonContainer>
        <Button to="/about/board/">
          Meet the Executive Board <Icon icon={faChevronRight} />
        </Button>
      </ButtonContainer>
    </PageContainer>
  </>
)

export default AboutPage
