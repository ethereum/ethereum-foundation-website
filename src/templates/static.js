import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { PageContainer } from "../components/SharedStyledComponents"

const StaticPage = ({ data }) => {
  const content = data.markdownRemark
  const { frontmatter } = content

  return (
    <>
      <SEO title={frontmatter.title} />
      <PageContainer>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </PageContainer>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
      html
    }
  }
`
export default StaticPage
