import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Pages

export const PageContainer = styled.div`
  margin: 6rem auto 4rem;
  max-width: 800px;
`

export const ContentContainer = styled.div`
  padding: 1rem 4rem;
`

export const PageH1 = styled.h1`
  margin-bottom: 0;
`

//

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
