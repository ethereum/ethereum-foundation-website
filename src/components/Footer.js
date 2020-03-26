import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

import { screenSizeM, screenSizeL } from "../utils/styles"
import devconLogo from "../images/devcon-logo.svg"
import blogLogo from "../images/ethereum-line-logo.svg"
import canary from "../images/canary.svg"
import star from "../images/star.png"

const StyledFooter = styled(motion.footer)`
  background-color: rgba(255, 255, 255, 0.15);
  bottom: 0;
  font-size: 0.875rem;
`

const FooterToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 8px 24px;
  font-size: 0.75rem;
`

const FooterContentDiv = styled(motion.div)`
  padding: 32px;
  transform-origin: bottom center;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${screenSizeM}) {
    flex-wrap: wrap;
    padding: 24px;
  }
`

const FooterChildDiv = styled(motion.div)`
  @media (max-width: ${screenSizeM}) {
    padding: 16px;
  }
`
const FooterDivContact = styled(FooterChildDiv)`
  flex: 0 1 200px;
  @media (max-width: ${screenSizeL}) {
    flex: 0 0 180px;
  }
  @media (max-width: ${screenSizeM}) {
    flex: 0 1 150px;
    padding: 0;
  }
`
const FooterDivCanary = styled(FooterChildDiv)`
  flex: 0 1 600px;
  display: flex;
  align-items: center;
  line-height: 1.8;
  font-size: 0.625rem;
  @media (max-width: ${screenSizeM}) {
    flex-direction: column;
    flex: 0 1 600px;
    order: 3;
  }
`

const Canary = styled.img`
  @media (max-width: ${screenSizeM}) {
    margin-bottom: 1rem;
  }
`

const CanaryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  @media (max-width: ${screenSizeL}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: ${screenSizeM}) {
    padding-left: 0;
    padding-right: 0;
  }
`

const FooterDivLinks = styled(FooterChildDiv)`
  display: flex;
  justify-content: space-between;
  flex: 0 1 160px;
  @media (max-width: ${screenSizeL}) {
    flex: 0 0 160px;
  }
  @media (max-width: ${screenSizeM}) {
    flex: 0 1 140px;
    padding: 0;
  }
`

const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`

const ImageAndTextLink = styled(OutboundLink)`
  display: flex;
  flex-direction: column;
`

const Star = styled(motion.img)`
  position: absolute;
  width: 40px;
`
const starHover = { scale: 1.8, transition: { duration: 1 } }

const Footer = ({ isOpen, toggleFooter }) => {
  const footerToggleIcon = isOpen ? faChevronDown : faChevronUp
  return (
    <>
      <FooterToggleContainer>
        <div>© Ethereum Foundation, {new Date().getFullYear()}</div>
        <IconContainer onClick={() => toggleFooter()}>
          <FontAwesomeIcon icon={footerToggleIcon} size="lg" />
          <Star whileHover={starHover} src={star} />
        </IconContainer>
      </FooterToggleContainer>

      <AnimatePresence>
        {isOpen && (
          <StyledFooter
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 1 }}
          >
            <FooterContentDiv>
              <FooterDivContact>
                <strong>General Contact:</strong>
                <div style={{ marginBottom: `16px` }}>
                  <OutboundLink href="mailto:info@ethereum.org">
                    info@ethereum.org
                  </OutboundLink>
                </div>
                <strong>Press Contact:</strong>
                <div>
                  <OutboundLink href="mailto:press@ethereum.org">
                    press@ethereum.org
                  </OutboundLink>
                </div>
              </FooterDivContact>
              <FooterDivCanary>
                <Canary src={canary} alt="Ethereum Foundation Canary" />
                <CanaryContent>
                  <div style={{ marginBottom: `16px` }}>
                    The Ethereum Foundation (Stiftung Ethereum) has never been
                    contacted by any agency anywhere in the world in a way which
                    requires that contact not to be disclosed.
                  </div>
                  <div>
                    Stiftung Ethereum will publicly disclose any sort of inquiry
                    from government agencies that falls outside the scope of
                    regular business operations.
                  </div>
                </CanaryContent>
              </FooterDivCanary>
              <FooterDivLinks>
                <ImageAndTextLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devcon.org"
                >
                  <img src={devconLogo} alt="Devcon Logo" />
                  Devcon.org
                </ImageAndTextLink>
                <ImageAndTextLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blog.ethereum.org"
                >
                  <img src={blogLogo} alt="Ethereum Foundation Blog Logo" />
                  Blog
                </ImageAndTextLink>
              </FooterDivLinks>
            </FooterContentDiv>
          </StyledFooter>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
