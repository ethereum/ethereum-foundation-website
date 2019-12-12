import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

import { motion, AnimatePresence } from "framer-motion"

import styled from "styled-components"

// TODO use gatsby-image for star
// import star from "../images/star.png"

const StyledFooter = styled(motion.footer)`
  background-color: rgba(255, 255, 255, 0.15);
  bottom: 0;
`

const FooterContentDiv = styled(motion.div)`
  padding: 32px;
  transform-origin: bottom center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const FooterChildDiv = styled(motion.div)`
  @media (max-width: 768px) {
    padding: 16px;
    flex: 0;
  }
`
const FooterDivContact = styled(FooterChildDiv)`
  flex: 0 1 200px;
`
const FooterDivCanary = styled(FooterChildDiv)`
  flex: 0 1 600px;
  /* TODO confirm with Tomo */
  font-size: 0.75rem;
`
const FooterDivLinks = styled(FooterChildDiv)`
  display: flex;
  justify-content: space-between;
  flex: 0 1 200px;
`

const IconContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`

// TODO footer should "push up" the rest of the content (including constellation)
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const footerToggleIcon = this.state.isOpen ? faChevronDown : faChevronUp
    return (
      <>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            color: `white`,
            padding: `32px`,
          }}
        >
          <div>© Ethereum Foundation, {new Date().getFullYear()}</div>
          {/* TODO star image behind chevron */}
          <IconContainer onClick={this.handleToggle}>
            <FontAwesomeIcon icon={footerToggleIcon} />
          </IconContainer>
        </div>

        <AnimatePresence initial={false}>
          {this.state.isOpen && (
            <StyledFooter
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 1.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <FooterContentDiv
                variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
                transition={{ duration: 0.8 }}
              >
                <FooterDivContact>
                  <strong>General Contact:</strong>
                  <div style={{ marginBottom: `16px` }}>
                    <a href="mailto:info@ethereum.org">info@ethereum.org</a>
                  </div>
                  <strong>Press Contact:</strong>
                  <div>
                    <a href="mailto:press@ethereum.org">press@ethereum.org</a>
                  </div>
                </FooterDivContact>
                <FooterDivCanary>
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
                </FooterDivCanary>
                <FooterDivLinks>
                  <div>
                    {/* TODO style links */}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://devcon.org"
                    >
                      Devcon.org
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://blog.ethereum.org"
                    >
                      Blog
                    </a>
                  </div>
                </FooterDivLinks>
              </FooterContentDiv>
            </StyledFooter>
          )}
        </AnimatePresence>
      </>
    )
  }
}

export default Footer
