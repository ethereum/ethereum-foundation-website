import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/Layout"
import Subpage from "../../components/Subpage"
import SEO from "../../components/SEO"

const PageContainer = styled.div`
  margin: 6rem auto 4rem;
  max-width: 760px;
  padding: 2rem;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Subpage>
      <PageContainer>
        <h1>What is the Ethereum Foundation?</h1>
        <p>
          The Ethereum Foundation (EF) is a non-profit organization that
          supports development of the Ethereum blockchain, the growing ecosystem
          around it, and related technologies.
        </p>
        <p>
          The EF is not a company, or even a traditional non-profit. We do not
          control Ethereum, nor are we the only organization that funds critical
          development of Ethereum-related technologies.
        </p>

        <p>
          Our mission is to do what is best for Ethereum’s long-term success.
          Our role is to allocate resources to critical projects, be a valued
          voice within the Ethereum ecosystem, and be an advocate for Ethereum
          to the outside world.
        </p>
        <Link to="/about/board">Meet the Executive Board</Link>
      </PageContainer>
    </Subpage>
  </Layout>
)

export default AboutPage
