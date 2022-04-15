import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { screenSizeM, screenHeightMobileLandscape } from "../utils/styles"

// Pages

export const PageContainer = styled.div`
  margin: 6rem auto 4rem;
  max-width: 800px;

  @media (min-width: ${screenSizeM}) {
    margin: 10rem auto 4rem;
  }

  @media (max-height: ${screenHeightMobileLandscape}) {
    margin: 4rem 3rem;
  }
`

export const ContentContainer = styled.div`
  padding: 1rem 4rem;
`

export const PageH1 = styled.h1`
  margin-bottom: 0;
  font-weight: 300;
`

// Buttons

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
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2.5px;
  padding: 1rem 2rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);

    svg {
      color: #41c2e6;
    }
  }

  @media (max-width: 380px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
`
