import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"

const StyledProfile = styled.div`
  flex: 0 1 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
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
      <p>{member.title}</p>
      <p>{member.bio}</p>
    </StyledProfile>
  )
}

export default Profile
