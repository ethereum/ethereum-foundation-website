import React from "react"
import styled from "styled-components"

import SEO from "../components/SEO"

const ReportLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`

const ReportLink = styled.a`
  color: white;
  opacity: 0.7;
  &:hover {
    color: white;
    opacity: 1;
    transition-duration: 0.4s;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ReportLinkContainer>
      <ReportLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://ethereum.foundation/report-2022-04.pdf"
      >
        View 2022 report
      </ReportLink>
    </ReportLinkContainer>
  </>
)

export default IndexPage
