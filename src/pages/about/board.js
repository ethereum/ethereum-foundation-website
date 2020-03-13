import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Profile from "../../components/Profile"
import SEO from "../../components/SEO"

const PageContainer = styled.div`
  margin: 6rem auto 4rem;
  max-width: 1140px;
  padding: 2rem;
`

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

// TODO remove after confirmation
const ExecutiveBoardPage = () => {
  const data = useStaticQuery(graphql`
    query {
      aya: file(relativePath: { eq: "aya.png" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vitalik: file(relativePath: { eq: "vitalik.png" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      patrick: file(relativePath: { eq: "patrick.png" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const board = [
    {
      name: "Aya Miyaguchi",
      title: "Executive Director",
      bio: "",
      img: data.aya.childImageSharp.fixed,
    },
    {
      name: "Vitalik Buterin",
      title: "Co-founder of Ethereum",
      bio: "",
      img: data.vitalik.childImageSharp.fixed,
    },
    {
      name: "Patrick Storcheneger",
      title: "Board member",
      bio: "",
      img: data.patrick.childImageSharp.fixed,
    },
  ]

  return (
    <>
      <SEO title="Executive Board" />
      <PageContainer>
        <HeaderContainer>
          <h1>Meet our Executive Board</h1>
          <p style={{ maxWidth: `460px`, margin: `auto` }}>
            As a non profit organization. lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
        </HeaderContainer>
        <ProfileContainer>
          {board.map(member => (
            <Profile key={member.name} member={member} />
          ))}
        </ProfileContainer>
      </PageContainer>
    </>
  )
}

export default ExecutiveBoardPage
