import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const PageContainer = styled.div`
  margin: 6rem auto 4rem;
  max-width: 760px;
  padding: 2rem;
`

export const ButtonIcon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  color: white;
`

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.a`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2.5px;
  padding: 1rem 2rem;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);

    svg {
      color: #41c2e6;
    }
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`
