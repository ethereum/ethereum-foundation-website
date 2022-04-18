import React from "react"
import styled from "styled-components"

import SEO from "../components/SEO"

const ReportLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  background: #069fcc;
  justify-content: center;
`

const ReportTextContainer = styled.p`
  margin:0 0.5rem;
  color: #FFF;
  line-height: 2rem;
`

const ReportLink = styled.a`
  color: white;
  opacity: 1;
  background: #506aaf;
  padding: 0.2rem 0.6rem;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  font-weight: bold;
  &:hover {
    color: white;
    opacity: 0.8;
    transition-duration: 0.4s;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ReportLinkContainer>
      <ReportTextContainer>
        The EF anual report is out.
      </ReportTextContainer>
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
