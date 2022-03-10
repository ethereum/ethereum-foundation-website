import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import styled from "styled-components"

const StyledProfile = styled.div`
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
`

const Content = styled.div`
  text-align: center;
`

const LinkContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin: 8px;
  color: #1d9bf0;
`

const Profile = ({ member }) => {
  return (
    <StyledProfile>
      <Img
        style={{ marginBottom: `1rem` }}
        fixed={member.img}
        alt={member.name}
      />
      <h3 style={{ marginBottom: `0.5rem` }}>{member.name}</h3>
      <Content>
        <div>{member.title}</div>
        {member.twitter && (
          <div>
            <OutboundLink
              href={`https://twitter.com/${member.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkContentContainer>
                <Icon icon={faTwitter} />@{member.twitter}
              </LinkContentContainer>
            </OutboundLink>
          </div>
        )}
      </Content>
    </StyledProfile>
  )
}

export default Profile
